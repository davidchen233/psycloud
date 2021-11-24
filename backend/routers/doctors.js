const express = require("express");
const connection = require("../utils/db_connection");

// 建立 router
const router = express.Router();

router.get("/", async (req, res) => {
  const sql = "SELECT * FROM psychologists";
  let data = await connection.queryAsync(sql);
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM psychologists WHERE id = ${id}`;
  let data = await connection.queryAsync(sql);
  res.json(data);
});

router.get("/:id/recommend", async (req, res) => {
  const { id } = req.params;
  // get types by id
  const sql = `SELECT pressure_type FROM psy_pressuretypes WHERE psychologist_id = ${id}`;
  let data = await connection.queryAsync(sql);
  //get the array of types
  let result = data
    .map((type) => type.pressure_type)
    .map((value) => `pressure_type = ${value}`)
    .join(" OR ");
  console.log(result);
  //get the other id by types acquire above
  const sql2 = `SELECT name, expertise, pressure_type, doc.id FROM psychologists AS doc INNER JOIN psy_pressuretypes AS type ON doc.id = type.psychologist_id WHERE ${result}`;
  let list = await connection.queryAsync(sql2);
  //get rid of duplicated list and itself and respond
  res.json(
    list
      .filter(
        (doctor, index, array) =>
          index === array.findIndex((d) => d.id === doctor.id)
      )
      .filter((d) => d.id != id)
  );
});

// 匯出此 router
module.exports = router;
