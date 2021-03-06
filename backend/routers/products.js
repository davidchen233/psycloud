const express = require("express");
const connection = require("../utils/db_connection");

// 建立 router
const router = express.Router();

// 抓熱門商品
router.get("/hotproducts", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM products ORDER BY sold DESC LIMIT 4"
  );
  res.json(data);
});

// 抓分類推薦商品
router.get("/similarproduct/:categoryID", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM products WHERE product_category = ? ORDER BY sold DESC LIMIT 6",
    [req.params.categoryID]
  );
  res.json(data);
});

// 抓分類商品
router.get("/category/:categoryID", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM products WHERE product_category = ?",
    [req.params.categoryID]
  );
  res.json(data);
});

//取得單筆商品
router.get("/product/:productID", async (req, res) => {
  let data = await connection.queryAsync("SELECT * FROM products WHERE id =?", [
    req.params.productID,
  ]);
  if (data.length > 0) {
    res.json(data[0]);
  } else {
    res.status(404).send("查無此資料");
  }
});

// 檢測推薦商品
router.get("/level/:pressure_level", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM products WHERE pressure_level = ?",
    [req.params.pressure_level])
    res.json(data);
  })

// 取得小照片
router.get("/:productID/images", async (req, res) => {
  let data = await connection.queryAsync(
    "SELECT * FROM product_images WHERE product_id=?",
    [req.params.productID]
  );
  res.json(data);
});

// 匯出此 router
module.exports = router;
