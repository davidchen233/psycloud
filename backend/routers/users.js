const express = require("express");
const connection = require("../utils/db_connection");
const multer = require("multer");
const path = require("path");
const moment = require("moment");

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
    let birth = moment(data.birth).format("YYYY-MM-DD");
    returnUserData = {
      id: data.id,
      psychologist_id: psychologistInfo.id,
      name: data.name,
      username: data.username,
      avatar: data.avatar,
      email: data.email,
      birth: birth,
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
      birth: birth,
      isPsychologist: data.is_psychologist,
      isAdmin: data.is_admin,
    };
  }
  res.json(returnUserData);
});

// 更改個人資料
router.post("/editInfo", async (req, res) => {
  let data = await connection.queryAsync(
    "UPDATE users SET name=?, birth=? WHERE id=?",
    [req.body.name, req.body.birth, req.session.user.id]
  );
  res.json({ code: "0", message: "編輯成功" });
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

// 上傳大頭貼
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
router.post("/uploadAvatar", uploader.single("avatar"), async (req, res) => {
  let filename = req.file ? "/user_avatar/" + req.file.filename : "";

  let result = await connection.queryAsync(
    "UPDATE users SET avatar=? WHERE id =?",
    [filename, req.session.user.id]
  );

  res.json({ code: "0", avatar: filename });
});

// 上傳 Banner
const bannerStorage = multer.diskStorage({
  // 設定路徑
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "public", "user_banner"));
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    cb(null, `userBanner-${Date.now()}.${ext}`);
  },
});

const bannerUploader = multer({
  storage: bannerStorage,
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
router.post(
  "/uploadBanner",
  bannerUploader.single("banner"),
  async (req, res) => {
    let filename = req.file ? "/user_banner/" + req.file.filename : "";

    let result = await connection.queryAsync(
      "UPDATE users SET banner=? WHERE id =?",
      [filename, req.session.user.id]
    );

    res.json({ code: "0", banner: filename });
  }
);

// 取得訂單資訊
router.get("/orders", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM orders WHERE user_id=?",
    [req.session.user.id]
  );
  res.json(data);
});

// 取得訂單詳情
router.post("/orderItems", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM orders WHERE id=? ORDER BY created_at",
    [req.body.orderId]
  );
  let data2 = await connection.queryAsync(
    "SELECT * FROM order_items WHERE order_id=?",
    [req.body.orderId]
  );

  let data3 = await connection.queryAsync(
    "SELECT  products.id, products.name, products.image FROM products LEFT JOIN order_items ON products.id = order_items.product_id;"
  );
  res.json({ orderInfo: data[0], orderItems: data2, products: data3 });
});

// 匯出此 router
module.exports = router;
