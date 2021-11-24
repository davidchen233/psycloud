import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartSection from './CartSection';
import CreditCards from './CreditCards';
import './checkoutFormSection.css';
import './cart.css';

const Cart = () => {
  const history = useHistory();
  const [credicCardInfo, setcredicCardInfo] = useState({});

  // 購物車資訊
  const [cartInfo, setCartInfo] = useState({});

  // 個人資料
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handlePersonalInfoChange = (e) => {
    let newPersonalInfo = { ...personalInfo };
    newPersonalInfo[e.target.name] = e.target.value;
    setPersonalInfo(newPersonalInfo);
  };

  return (
    <div className="container">
      <div className="Cart-Title mb-4">
        <h3>-購物車-</h3>
        <div className="cart-div">
          <CartSection setCartInfo={setCartInfo} />
        </div>
      </div>
      {localStorage.getItem('cart') ? (
        <>
          <div className="row checkform ">
            <div className="col-md-5 checkout-div">
              <div className="checkout-Title">
                <h3 class="CF-h3">-訂購資訊-</h3>
              </div>
              <div className="CF-body">
                <form id="personalInfoForm">
                  <div className="form-group cf-group mb-3">
                    <input
                      type="text"
                      size="40"
                      placeholder="姓名"
                      name="name"
                      value={personalInfo.name}
                      required
                      onChange={handlePersonalInfoChange}
                    />
                    <input
                      type="text"
                      size="40"
                      maxlength="10"
                      placeholder="手機"
                      name="phone"
                      value={personalInfo.phone}
                      required
                      onChange={handlePersonalInfoChange}
                    />
                    <input
                      type="text"
                      size="40"
                      maxlength="10"
                      placeholder="宅配地址"
                      name="address"
                      value={personalInfo.address}
                      required
                      onChange={handlePersonalInfoChange}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6 checkout-div3">
              <div className="checkout-Title">
                <h3 class="CF-h3">-付款方式-</h3>
              </div>
              <div className="creditCard">
                <CreditCards setcredicCardInfo={setcredicCardInfo} />
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 pt-5 d-md-flex justify-content-md-end">
            <button className="CF-btn1 me-md-2" type="button">
              繼續逛逛
            </button>

            <button
              className="CF-btn2"
              type="button"
              onClick={() => {
                // 檢查資料是否有沒填寫的
                if (
                  !personalInfo.name ||
                  !personalInfo.phone ||
                  !personalInfo.address ||
                  !credicCardInfo.cvc ||
                  !credicCardInfo.expiry ||
                  !credicCardInfo.focus ||
                  !credicCardInfo.name ||
                  !credicCardInfo.number
                ) {
                  alert('資料未填寫完整');
                } else {
                  let orderInfo = { ...personalInfo, total: cartInfo.total };
                  let orderItem = cartInfo.cartItems;
                  // console.log('orderInfo', orderInfo);
                  // console.log('orderItem', orderItem);
                  // console.log('credicCardInfo', credicCardInfo);

                  let orderInfostr = JSON.stringify(orderInfo);
                  let orderItemstr = JSON.stringify(orderItem);
                  let credicCardInfostr = JSON.stringify(credicCardInfo);

                  sessionStorage.setItem('orderInfostr', orderInfostr);
                  sessionStorage.setItem('orderItemstr', orderItemstr);
                  sessionStorage.setItem(
                    'credicCardInfostr',
                    credicCardInfostr
                  );
                  history.push('/checkpage');
                }
              }}
            >
              下一步
            </button>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
