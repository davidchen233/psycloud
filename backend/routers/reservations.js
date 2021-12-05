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

//get not unreserved events
router.get("/psychologistEvents/unreserved/:psychologistId", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM reservations WHERE psychologist_id =? AND reserved = 0",
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

//get reservation by user_id
router.get("/getUser", async (req, res) => {
  res.json(req.session.user.id);
});

router.get("/getUser/getList/:id", async (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT name, res.id, psychologist_id, date, period, photo, res.user_id FROM reservations AS res INNER JOIN psychologists AS psy on res.psychologist_id = psy.id WHERE res.user_id = ?";
  let data = await connection.queryAsync(sql, [id]);
  res.json(data);
});

//docotr getting its own list
router.get("/getPsyId/:id", async (req, res) => {
  const id = req.params.id;
  const sql ="SELECT psy.id from psychologists AS psy INNER JOIN users on users.id = psy.user_id WHERE user_id = ?"
  let data = await connection.queryAsync(sql, [id]);
  res.json(data[0].id)
});

router.get("/getPsyList/:id", async (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT res.id, avatar, users.name, date, period FROM reservations as res INNER JOIN users on users.id = res.user_id WHERE res.psychologist_id = ?";
  let data = await connection.queryAsync(sql, [id]);
  res.json(data);
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
