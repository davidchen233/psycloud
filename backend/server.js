const express = require('express');
const cors = require('cors');

// 建立應用程式
let app = express();

// 限制 req 來源
app.use(cors({
  origin: ['http://localhost:3000'],
  credential: true,
}))

// 讀取 body 的資料
app.use(express.urlencoded({ extended: true }));

// 解析 JSON 的資料
app.use(express.json());

app.use(express.static("public"))

// auth 相關的 API
let authRouter = require('./routers/auth');
app.use('/api/auth', authRouter);

// users 相關的 API
let usersRouter = require('./routers/users');
app.use('/api/users', usersRouter);

// tests 相關的 API
let testsRouter = require('./routers/tests');
app.use('/api/tests', testsRouter);

// doctors 相關的 API
let doctorsRouter = require('./routers/doctors');
app.use('/api/doctors', doctorsRouter);

// products 相關的 API
let productsRouter = require('./routers/products');
app.use('/api/products', productsRouter);

// orders 相關的 API
let ordersRouter = require('./routers/orders');
app.use('/api/orders', ordersRouter);


// 404 not found
app.use((req,res,next)=>{
  console.log(`找不到${req.url}路由`);
  next();
})
app.use((req,res,next)=>{
  res.status(404).send('404 not found')
})

app.listen(3001, ()=>{console.log('psycloud server 已啟動')})