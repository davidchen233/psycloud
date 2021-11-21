const express = require("express");
const connection = require('../utils/db_connection')

// 建立 router
const router = express.Router();



//  結果送到資料庫
router.post("/result", async(req,res)=>{
    //檢查是否填寫過
    let check = await connection.queryAsync(
        "SELECT * FROM test_results WHERE user_id = ?",
        req.body.user_id
      )
      if(check.length>0){
         let result = await connection.queryAsync('UPDATE test_results SET pressure_type=?,pressure_level=?,created_at=? WHERE user_id = ?', [req.body.pressure_type, req.body.pressure_level,req.body.now,req.body.user_id]);
         res.json({message:"update"});
      }
    //驗證成功送入資料庫
    let result = await connection.queryAsync('INSERT INTO test_results(user_id,pressure_type,pressure_level,created_at)VALUES (?)', [[req.body.user_id, req.body.pressure_type, req.body.pressure_level,req.body.now]]);
    // res.json(result) ; 
    res.json({message:"success"});
})






//  /api/tests/result
// router.post("/result", async(req,res)=>{
//     let result = await connection.queryAsync('SELECT * FROM test_results', [req.body]);
//     res.json(result) ; 
// })



// 匯出此 router
module.exports = router;