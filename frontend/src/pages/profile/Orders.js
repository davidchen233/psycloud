import { useState, useEffect } from 'react';
import { ORDER_STATUS } from '../../config/status';
import './orders.css';
import axios from 'axios';
import { API_URL } from '../../config/config';

const Orders = ({ setShowOrderModal, setOrderId }) => {
  const [orders, setOrders] = useState([
    {
      order_code: '#D554845',
      created_at: '2021-05-05',
      total: 1500,
      status: 1,
    },
  ]);

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/users/orders`, {
      withCredentials: true,
    });
    setOrders(res.data);
  }, []);

  return (
    <>
      <div className="profile-heading">
        <h2>我的訂單</h2>
      </div>

      <div className="order-table">
        <div className="row fw-bold mb-4 order-heading">
          <div className="col-2">訂單編號</div>
          <div className="col-3">下單日期</div>
          <div className="col-2">總金額</div>
          <div className="col-2">訂單狀態</div>
          <div className="col-3"></div>
        </div>

        {/* TODO: map 出訂單內容 */}
        {orders.map((order) => {
          return (
            <div className="row mb-4 align-items-center" key={order.id}>
              <div className="col-2">{order.order_code}</div>
              <div className="col-3">{order.created_at.split('T')[0]}</div>
              <div className="col-2">$ {order.total}</div>
              <div className="col-2">
                <span className="order-status">
                  {ORDER_STATUS[order.order_status]}
                </span>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    setShowOrderModal(true);
                    setOrderId(order.id);
                  }}
                  className="viewBtn"
                >
                  檢視詳情
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Orders;
