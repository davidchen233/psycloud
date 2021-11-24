const express = require("express");
const connection = require("../utils/db_connection");

// 建立 router
const router = express.Router();

//生成訂單編號的 function
function getOrderCode(randomLength) {
  return Number(
    Math.random().toString().substr(2, randomLength) + Date.now()
  ).toString(36);
}

// 建立訂單
router.post("/createOrder", async (req, res) => {
  // 建立主訂單
  let data = await connection.queryAsync(
    "INSERT INTO orders (order_code, user_id, name, phone, address, total, created_at ) VALUES (?)",
    [
      [
        getOrderCode(12),
        req.session.user.id,
        req.body.orderInfo.name,
        req.body.orderInfo.phone,
        req.body.orderInfo.address,
        req.body.orderInfo.total,
        new Date(),
      ],
    ]
  );
  // 處理購買商品
  for (let i = 0; i < req.body.orderItem.length; i++) {
    // 建立訂單詳情
    let orderdata = await connection.queryAsync(
      "INSERT INTO order_items (order_id, product_id, amount, price ) VALUES (?)",
      [
        [
          data.insertId,
          req.body.orderItem[i].product_id,
          req.body.orderItem[i].amount,
          req.body.orderItem[i].price,
        ],
      ]
    );

    // 更新商品的銷售量
    // TODO: 取得當個商品
    // TODO: 取得當中的 sold 讓他加上購買的數量
    // TODO: UPDATE 回 商品資料表
  }
  res.json({ code: "0", message: "您已購買成功!!" });
});

// 匯出此 router
module.exports = router;
