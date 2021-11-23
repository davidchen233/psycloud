const express = require("express");
const connection = require("../utils/db_connection");
const multer = require("multer");
const path = require("path");

// 建立 router
const router = express.Router();

// 取得所有會員資料
router.get("/", async (req, res) => {
  let data = await connection.queryAsync("SELECT * FROM users");
  res.json(data);
});

// 取得登入會員資料
router.get("/userInfo", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM users WHERE id=?",
    req.session.user.id
  );

  data = data[0];
  let returnUserData = {};

  if (data.is_psychologist === 1) {
    let psychologistInfo = await connection.queryAsync(
      "SELECT * FROM psychologists WHERE user_id=?",
      [data.id]
    );
    returnUserData = {
      id: data.id,
      psychologist_id: psychologistInfo.id,
      name: data.name,
      username: data.username,
      avatar: data.avatar,
      email: data.email,
      birth: data.birth,
      isPsychologist: data.is_psychologist,
      isAdmin: data.is_admin,
    };
  } else {
    returnUserData = {
      id: data.id,
      name: data.name,
      username: data.username,
      avatar: data.avatar,
      email: data.email,
      birth: data.birth,
      isPsychologist: data.is_psychologist,
      isAdmin: data.is_admin,
    };
  }
  res.json(returnUserData);
});

// 取得登入者的測驗結果
router.get("/userTestResult", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM test_results WHERE user_id=?",
    [req.session.user.id]
  );
  if (data.length === 0) {
    res.json({ status: "none", message: "未填寫" });
  }
  data = data[0];
  res.json(data);
});

// 設定 muler
const storage = multer.diskStorage({
  // 設定路徑
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "public", "user_avatar"));
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    cb(null, `user-${Date.now()}.${ext}`);
  },
});

const uploader = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      cb(new Error("檔案不符合格式喔"), false);
    } else {
      cb(null, true);
    }
  },
  // limit:{
  //   fileSize
  // }
});

// 上傳大頭貼
router.post("/uploadAvatar", uploader.single("avatar"), async (req, res) => {
  let filename = req.file ? "/user_avatar/" + req.file.filename : "";

  let result = await connection.queryAsync(
    "UPDATE users SET avatar=? WHERE id =?",
    [filename, req.session.user.id]
  );

  res.json({ code: "0", avatar: filename });
});

// 匯出此 router
module.exports = router;
