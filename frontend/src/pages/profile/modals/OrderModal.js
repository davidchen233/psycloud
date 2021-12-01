import './orderModal.css';
import { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import axios from 'axios';
import { API_URL, PUBLIC_URL } from '../../../config/config';
import { ORDER_STATUS } from '../../../config/status';

const OrderModal = ({ toggleOrderModal, orderId }) => {
  const [orderModalInfo, setOrderModalInfo] = useState({
    orderInfo: { created_at: '' },
    orderItems: [],
    products: [],
  });

  useEffect(async () => {
    let orderItems = await axios.post(`${API_URL}/users/orderItems`, {
      orderId: orderId,
    });
    setOrderModalInfo(orderItems.data);
  }, []);

  return (
    <div className="orderModal-mask">
      <div className="orderModal">
        <GrClose size="30" className="close" onClick={toggleOrderModal} />
        <h3 className="mb-4">訂單詳情</h3>
        <div className="row mb-2 ps-3">
          <div className="col-md-6 mb-3">
            訂單編號 : <span>{orderModalInfo.orderInfo.order_code}</span>
          </div>
          <div className="col-md-6 mb-3">
            下單日期 :{' '}
            <span>{orderModalInfo.orderInfo.created_at.split('T')[0]}</span>
          </div>
          <div className="col-md-6 mb-3">
            付款方式 : <span>信用卡</span>
          </div>
          <div className="col-md-6 mb-3">
            訂單狀態 :{' '}
            <span>{ORDER_STATUS[orderModalInfo.orderInfo.order_status]}</span>
          </div>
        </div>
        <div className="orderProducts">
          {orderModalInfo.orderItems.map((item) => {
            let nameImage = orderModalInfo.products.filter((product) => {
              return product.id === +item.product_id;
            });
            nameImage = nameImage[0];
            return (
              <div className="row ps-3 align-items-center mb-3">
                <div className="col-3">
                  <div className="imgBx">
                    <img src={PUBLIC_URL + nameImage.image} alt="" />
                  </div>
                </div>
                <div className="col-4 fw-bold">{nameImage.name}</div>
                <div className="col-2">x{item.amount}</div>
                <div className="col-3">
                  小計 :{' '}
                  <span className="s-total">{item.price * item.amount}</span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="totalPrice mt-4">
          總價 : ${orderModalInfo.orderInfo.total}
        </p>
      </div>
    </div>
  );
};

export default OrderModal;
