const express = require("express");
const connection = require("../utils/db_connection");

// 建立 router
const router = express.Router();

//  結果送到資料庫
router.post("/result", async (req, res) => {
  //檢查是否填寫過
  let check = await connection.queryAsync(
    "SELECT * FROM test_results WHERE user_id = ?",
    req.body.user_id
  );
  if (check.length > 0) {
    let result = await connection.queryAsync(
      "UPDATE test_results SET pressure_type=?,pressure_level=?,created_at=? WHERE user_id = ?",
      [
        req.body.pressure_type,
        req.body.pressure_level,
        req.body.now,
        req.body.user_id,
      ]
    );
    res.json({ message: "update" });
  }
  //驗證成功送入資料庫
  let result = await connection.queryAsync(
    "INSERT INTO test_results(user_id,pressure_type,pressure_level,created_at)VALUES (?)",
    [
      [
        req.body.user_id,
        req.body.pressure_type,
        req.body.pressure_level,
        req.body.now,
      ],
    ]
  );
  // res.json(result) ;
  res.json({ message: "success" });
});

// 取得測驗數據
router.get("/testData", async (req, res) => {
  let data = await connection.queryAsync("SELECT * FROM test_results");
  let normal = data.filter((item) => {
    return item.pressure_level == 0;
  });
  let light = data.filter((item) => {
    return item.pressure_level == 1;
  });
  let medium = data.filter((item) => {
    return item.pressure_level == 2;
  });
  let serious = data.filter((item) => {
    return item.pressure_level == 3;
  });

  res.json([
    { name: "普通", 測驗分布: normal.length },
    { name: "輕度", 測驗分布: light.length },
    { name: "中度", 測驗分布: medium.length },
    { name: "重度", 測驗分布: serious.length },
  ]);
});

// 取得推薦醫生
router.post("/recommendDoc", async (req, res) => {
  let doctors = await connection.queryAsync(
    "SELECT psychologists.*, psy_pressuretypes.psychologist_id FROM psychologists JOIN psy_pressuretypes ON psy_pressuretypes.psychologist_id = psychologists.id WHERE pressure_type=?",
    [req.body.pressure_type]
  );
  res.json(doctors);
});

// 匯出此 router
module.exports = router;
