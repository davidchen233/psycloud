const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const connection = require("../utils/db_connection");
require("dotenv").config();

// 建立 router
const router = express.Router();

// 註冊
const signupRules = [
  body("email").isEmail().withMessage("Email 欄位請正確填寫"),
  body("password").isLength({ min: 8 }).withMessage("密碼長度至少為 8"),
  body("confirmPassword")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("密碼不一致"),
];
router.post("/signup", signupRules, async (req, res) => {
  try {
    // TODO: 驗證資料
    const validateResult = validationResult(req);
    if (!validateResult.isEmpty()) {
      let error = validateResult.array();
      return res.status(400).json({ code: 99, message: error });
    }

    // TODO: 檢查是否已經註冊過
    let user = await connection.queryAsync(
      "SELECT * FROM users WHERE email = ?",
      req.body.email
    );
    if (user.length > 0) {
      return res.json({ code: "1102", message: "該 email 已經註冊" });
    }

    // TODO: 密碼加密
    let hashPassword = await bcrypt.hash(req.body.password, 10);

    // TODO: 建立這筆資料
    let username = req.body.email.split("@")[0];
    let result = await connection.queryAsync(
      "INSERT INTO users (name, username, email, gender, password) VALUES (?)",
      [[req.body.name, username, req.body.email, req.body.gender, hashPassword]]
    );
    res.json({ code: "0", message: "註冊成功" });
  } catch (err) {
    console.log(err);
    res.json({ code: "9999", message: "註冊失敗，請洽系統管理員" });
  }
});

// 登入
router.post("/login", async (req, res) => {
  // TODO: 比對帳號
  let user = await connection.queryAsync("SELECT * FROM users WHERE email=?", [
    req.body.email,
  ]);
  if (user.length === 0) {
    res.json({ code: "1103", message: "email帳號或密碼錯誤" });
  }
  user = user[0];

  // TODO: 比對密碼
  let result = await bcrypt.compare(req.body.password, user.password);
  if (!result) {
    res.json({ code: "1103", message: "email帳號或密碼錯誤" });
  }

  if (user.is_psychologist === 1) {
    let psychologistInfo = await connection.queryAsync(
      "SELECT * FROM psychologists WHERE user_id=?",
      user.id
    );
    let returnUser = {
      id: user.id,
      psychologistId: psychologistInfo[0].id,
      name: user.name,
      username: user.username,
      avatar: user.avatar,
      banner: user.banner,
      email: user.email,
      birth: user.birth,
      isPsychologist: user.is_psychologist,
      isAdmin: user.is_admin,
    };
    req.session.user = returnUser;

    // TODO: 比對資料成功
    res.json({ code: "0", message: "心理師登入成功", user: returnUser });
  }

  // 寫入 session
  let returnUser = {
    id: user.id,
    name: user.name,
    username: user.username,
    avatar: user.avatar,
    banner: user.banner,
    email: user.email,
    birth: user.birth,
    isPsychologist: user.is_psychologist,
    isAdmin: user.is_admin,
  };
  req.session.user = returnUser;

  // TODO: 比對資料成功
  res.json({ code: "0", message: "登入成功", user: returnUser });
});

// 登出
router.get("/logout", (req, res) => {
  req.session.user = null;
  // req.session.destroy();
  res.json({ code: "0", message: "登出成功" });
});

// 更改密碼
const mailgun = require("mailgun-js");
function getOrderCode(randomLength) {
  return Number(Math.random().toString().substr(2, randomLength) + Date.now())
    .toString(36)
    .toUpperCase();
}

// 忘記密碼
router.post("/forgetPassword", async (req, res) => {
  try {
    let check = await connection.queryAsync(
      "SELECT * FROM users WHERE email = ?",
      [req.body.email]
    );

    if (check.length === 0) {
      return res.json({ message: "帳號不存在" });
    }

    // 設定新密碼並更新使用者密碼
    let newPwd = getOrderCode(8);
    let hashNewPwd = await bcrypt.hash(newPwd, 10);
    let setNewPwd = await connection.queryAsync(
      "UPDATE users SET password=? WHERE email=?",
      [hashNewPwd, req.body.email]
    );

    // 寄送新密碼到使用者 email
    const mg = mailgun({
      apiKey: process.env.MG_API_KEY,
      domain: process.env.MG_DOMAIN,
    });
    const data = {
      from: "心理雲 <postmaster@sandbox75ded4288ec64e9692a47287e3068442.mailgun.org>",
      to: req.body.email,
      subject: "心理雲",
      text: `您的新密碼為: ${newPwd}`,
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
    res.json({ message: "請到 email 查看信件取得新密碼" });
  } catch (e) {
    console.log(e);
  }
});

// 更改密碼
router.post("/changePassword", async (req, res) => {
  let userInfo = await connection.queryAsync(
    "SELECT * FROM users WHERE email=?",
    [req.session.user.email]
  );
  console.log("password", userInfo[0].password);
  console.log("oldpwd", req.body.oldPassword);
  let result = await bcrypt.compare(req.body.oldPassword, userInfo[0].password);
  if (!result) {
    res.json({ message: "密碼輸入錯誤" });
  }

  // TODO: 比對資料成功
  let newPwd = await bcrypt.hash(req.body.newPassword, 10);
  let changePwd = await connection.queryAsync(
    "UPDATE users SET password =? WHERE email=?",
    [newPwd, req.session.user.email]
  );
  res.json({ message: "密碼更改成功" });
});

// 匯出此 router
module.exports = router;
