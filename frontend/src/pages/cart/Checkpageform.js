import { useState, useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { API_URL } from '../../config/config';
import { GlobalValues } from '../../App';
import axios from 'axios';
import Loading from './Loading';

const Checkpageform = ({ history }) => {
  let redirect = useHistory();
  let globalValues = useContext(GlobalValues);
  let orderInfo = JSON.parse(sessionStorage.getItem('orderInfostr'));
  let orderItem = JSON.parse(sessionStorage.getItem('orderItemstr'));
  const [showLoading, setShowLoading] = useState(false);

  console.log('orderInfo', orderInfo);
  console.log('orderItem', orderItem);

  //離開頁面時清除sessionstorage
  // useEffect(() => {
  //   history.listen(() => {
  //     localStorage.removeItem('orderInfostr');
  //     localStorage.removeItem('orderItemstr');
  //     localStorage.removeItem('creditCardInfostr');
  //   });
  // }, []);

  let creatOrder = async () => {
    let res = await axios.post(
      `${API_URL}/orders/createOrder`,
      {
        orderInfo: orderInfo,
        orderItem: orderItem,
      },
      { withCredentials: true }
    );
    if (res.data.code === '0') {
      let localCart = localStorage.getItem('cart').split(',');
      localCart.pop();
      for (let i = 0; i < localCart.length; i++) {
        localStorage.removeItem(localCart[i]);
      }
      localStorage.setItem('cart', '');
      globalValues.setCartCount(0);
      setTimeout(() => {
        redirect.push('/OrderCompleted');
      }, 2000);
      setShowLoading(true);
    } else {
      alert('訂單建立失敗');
    }
  };

  if (showLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="CP-text">
        <p>
          姓名:
          <span className="ps-2">{orderInfo.name}</span>
        </p>
        <p>
          電話:
          <span className="ps-2">{orderInfo.phone}</span>
        </p>
        <p>
          地址:
          <span className="ps-2">{orderInfo.address}</span>
        </p>
        <p>
          總金額:
          <span className="ps-2">{orderInfo.total}</span>
        </p>

        <div className="d-grid gap-2 pt-5 d-md-flex justify-content-md-center">
          <button
            className="CF-btn1 me-md-2"
            type="button"
            onClick={() => {
              redirect.push('/cart');
            }}
          >
            回上一頁
          </button>
          <button className="CF-btn2" type="button" onClick={creatOrder}>
            確定結帳
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(Checkpageform);
