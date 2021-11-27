const express = require("express");
const connection = require("../utils/db_connection");
const moment = require("moment");

// 建立 router
const router = express.Router();

// 取得心理師的行事曆行程
router.get("/psychologistEvents/:psychologistId", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM reservations WHERE psychologist_id =?",
    [req.params.psychologistId]
  );

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      data[i].date = moment(data[i].date).format("YYYY-MM-DD");
    }
    res.json(data);
  } else {
    data = [];
    res.json(data);
  }
});

// 新增時程
router.post("/createEvent", async (req, res) => {
  let check = await connection.queryAsync(
    "SELECT * from reservations WHERE psychologist_id=? && date=? && period=?",
    [req.body.id, req.body.date, req.body.period]
  );
  if (check.length > 0) {
    return res.json({ code: "1202", message: "時程已存在", data: check });
  }

  let data = await connection.queryAsync(
    "INSERT INTO reservations (psychologist_id,date,period) VALUE(?)",
    [[req.body.id, req.body.date, req.body.period]]
  );
  res.json({ code: "0", message: "新增成功" });
});

// 編輯時程
router.post("/editEvent", async (req, res) => {
  let check = await connection.queryAsync(
    "SELECT * from reservations WHERE psychologist_id=? && date=? && period=?",
    [req.body.psychologistId, req.body.date, req.body.period]
  );
  if (check.length > 0) {
    return res.json({ code: "1202", message: "時程已存在", data: check });
  }

  let data = await connection.queryAsync(
    "UPDATE reservations SET date=?, period=? WHERE id=?",
    [req.body.date, req.body.period, req.body.id]
  );
  res.json({ code: "0", message: "編輯成功" });
});

// 匯出此 router
module.exports = router;
