const express = require("express");
const { body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt')
const connection = require('../utils/db_connection');


// 建立 router
const router = express.Router();

const signupRules = [
  body("email").isEmail().withMessage("Email 欄位請正確填寫"),
  body("password").isLength({min: 8}).withMessage("密碼長度至少為 8"),
  body("confirmPassword").custom((value,{req})=>{
    return value === req.body.password;
  }).withMessage("密碼不一致"),
];

// 註冊
router.post("/signup",signupRules, async(req,res)=>{
  try{// TODO: 驗證資料
    const validateResult = validationResult(req);
    if(!validateResult.isEmpty()){
      let error = validateResult.array();
      return res.status(400).json({ code: 99, message: error });
    }
  
    // TODO: 檢查是否已經註冊過
    let user = await connection.queryAsync(
      "SELECT * FROM users WHERE email = ?",
      req.body.email
    )
    if(user.length>0){
      return res.json({code: '1102', message: '該 email 已經註冊'})
    }
  
    // TODO: 密碼加密
    let hashPassword = await bcrypt.hash(req.body.password, 10);
  
    // TODO: 建立這筆資料
    let username = req.body.email.split("@")[0];
    let result = await connection.queryAsync("INSERT INTO users (name, username, email, gender, password) VALUES (?)",
    [[req.body.name, username, req.body.email, req.body.gender, hashPassword]])
    res.json({code: 0, message: '註冊成功'})
    }catch(err){
      console.log(err);
      res.json({code: '9999', message: '註冊失敗，請洽系統管理員'})
    }
})





// 匯出此 router
module.exports = router;