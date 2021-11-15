const express = require("express");
const connection = require('../utils/db_connection')

// 建立 router
const router = express.Router();

// 取得所有會員資料
router.get("/", async(req,res)=>{
  let data = await connection.queryAsync('SELECT * FROM users');
  res.json(data);
})

// 取得單筆會員資料
router.get("/:userId", async(req,res)=>{
  let data = await connection.queryAsync('SELECT * FROM users WHERE id=?',
  [req.params.userId]);

  // 判斷是否有資料
  if (data.length>0){
		res.json(data[0]);
	} else {
		res.status(404).send('查無此資料')
	}
})



// 匯出此 router
module.exports = router;