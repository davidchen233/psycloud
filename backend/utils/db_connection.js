// 連接資料庫
const mysql = require("mysql");
const Promise = require("bluebird");
require("dotenv").config();

let connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  connectionLimit: process.env.CONNECTION_LIMIT || 10,
});

connection = Promise.promisifyAll(connection);

module.exports = connection;
