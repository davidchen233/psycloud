const express = require("express");
const connection = require("../utils/db_connection");

// 建立 router
const router = express.Router();

// 取得所有會員資料
router.get("/", async (req, res) => {
  let data = await connection.queryAsync("SELECT * FROM users");
  res.json(data);
});

// 取得單筆會員資料
router.get("/userInfo", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM users WHERE id=?",
    req.session.user.id
  );

  data = data[0];

  let returnUserData = {
    id: data.id,
    name: data.name,
    username: data.username,
    avatar: data.avatar,
    email: data.email,
    birth: data.birth,
  };

  // 判斷是否有資料
  res.json(returnUserData);
});

// 匯出此 router
module.exports = router;
