const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const connection = require("../utils/db_connection");

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
  req.session.destroy();
  res.json({ code: "0", message: "登出成功" });
});

// 匯出此 router
module.exports = router;
