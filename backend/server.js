const express = require('express');
const cors = require('cors')

// 建立應用程式
let app = express();

// 限制 req 來源
app.use(cors({
  origin: ['http://localhost:3000'],
  credential: true,
}))


// users 相關的 API
let usersRouter = require('./routers/users')
app.use('/api/users', usersRouter)


// 404 not found
app.use((req,res,next)=>{
  console.log(`找不到${req.url}路由`);
  next();
})
app.use((req,res,next)=>{
  res.status(404).send('404 not found')
})

app.listen(3001, ()=>{console.log('psycloud server 已啟動')})