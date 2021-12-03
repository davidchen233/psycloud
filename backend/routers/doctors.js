const express = require("express");
const connection = require("../utils/db_connection");
const moment = require("moment");

// 建立 router
const router = express.Router();

//get all doctors
router.get("/", async (req, res) => {
  const sql = "SELECT * FROM psychologists";
  let data = await connection.queryAsync(sql);
  res.json(data);
});

router.post("/reservation", async (req, res) => {
  try {
    const sql =
      `UPDATE reservations SET user_id=?, reserved_at=?, info=? ,reserved=1 WHERE psychologist_id = ? AND period = ? AND date LIKE ?`;
    let result = await connection.queryAsync(sql, [
      req.session.user.id,
      moment().format("YYYY-MM-DD hh:mm:ssa"),
      req.body.info,
      req.body.psychologist_id,
      `${req.body.period}%`,
      req.body.date,
    ]);
    res.json({ message: "success", sql });
  } catch (e) {
    console.log(e);
  }
});

router.get("/currentUser", async (req, res) => {
  // const { id } = req.session.user;
  if (req.session.user) {
    res.json(req.session.user);
  }
  // const sql = `SELECT * FROM user WHERE id = ?`;
  // try {
  //   let data = await connection.queryAsync(sql, [id]);
  //   res.json(data);
  // } catch (e) {
  //   console.error(e);
  // }
});

//get doctor by search
router.get("/search", async (req, res) => {
  const { key } = req.query;
  const sql = `SELECT * FROM psychologists WHERE expertise LIKE '%${key}%'`;
  let data = await connection.queryAsync(sql);
  res.json(data);
});

//get doctor by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM psychologists WHERE id = ?`;
  let data = await connection.queryAsync(sql, [id]);
  res.json(data);
});

//get recommend list
router.get("/:id/recommend", async (req, res) => {
  const { id } = req.params;
  // get types by id
  const sql = `SELECT pressure_type FROM psy_pressuretypes WHERE psychologist_id = ?`;
  let data = await connection.queryAsync(sql, [id]);
  //get the array of types
  let result = data
    .map((type) => type.pressure_type)
    .map((value) => `pressure_type = ${value}`)
    .join(" OR ");
  //get the other id by types acquire above
  const sql2 = `SELECT name, expertise, pressure_type, doc.id, photo FROM psychologists AS doc INNER JOIN psy_pressuretypes AS type ON doc.id = type.psychologist_id WHERE ${result}`;
  let list = await connection.queryAsync(sql2);
  //get rid of duplicated list and itself and then respond
  res.json(
    list
      .filter(
        (doctor, index, array) =>
          index === array.findIndex((d) => d.id === doctor.id)
      )
      .filter((d) => d.id != id)
  );
});

router.get("/:id/reservation", async (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM reservations WHERE psychologist_id = ${id} AND reserved = 0 ORDER BY date ASC`;
  let data = await connection.queryAsync(sql);
  res.json(
    data.filter(
      (day, index, array) =>
        index ===
        array.findIndex(
          (d) => moment(d.date).toString() === moment(day.date).toString()
        )
    )
  );
});

router.get("/:id/reservation/:date", async (req, res) => {
  const { id, date } = req.params;
  const sql = `SELECT period FROM reservations WHERE psychologist_id = ${id} AND date LIKE '${date}%' AND reserved = 0`;
  let data = await connection.queryAsync(sql);
  res.json(data);
});

// 匯出此 router
module.exports = router;
