const express = require("express");
const connection = require("../utils/db_connection");

// 建立 router
const router = express.Router();

// 取得單一心理師的行程
router.get("/psychologistEvents/:psychologistId", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM reservations WHERE psychologist_id =?",
    [req.params.psychologistId]
  );
  if (data.length > 0) {
    res.json(data);
  } else {
    res.send("還沒有建立行程喔");
  }
});

// 匯出此 router
module.exports = router;
