import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartSection from './CartSection';
import CreditCards from './CreditCards';
import './checkoutFormSection.css';
import './cart.css';
import Loading from './Loading';

const Cart = () => {
  const history = useHistory();
  const [credicCardInfo, setcredicCardInfo] = useState({});
  const [showLoading, setShowLoading] = useState(false);

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

  if (showLoading) {
    return <Loading />;
  }

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
          <div className="d-md-flex checkform justify-content-between">
            <div className="w-45 mx-auto checkout-div pt-1">
              <div className="checkout-Title">
                <h3 class="CF-h3">-訂購資訊-</h3>
              </div>
              <div className="CF-body">
                <form id="personalInfoForm">
                  <div className="form-group cf-group mb-3">
                    <devicePixelRatio>
                      <input
                        type="text"
                        placeholder="姓名"
                        name="name"
                        value={personalInfo.name}
                        required
                        onChange={handlePersonalInfoChange}
                        className="w-75"
                      />
                    </devicePixelRatio>
                    <div>
                      <input
                        type="text"
                        maxlength="10"
                        placeholder="手機"
                        name="phone"
                        value={personalInfo.phone}
                        required
                        onChange={handlePersonalInfoChange}
                        className="w-75"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="宅配地址"
                        name="address"
                        value={personalInfo.address}
                        required
                        onChange={handlePersonalInfoChange}
                        className="w-75"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-50 mx-auto checkout-div3 pt-1">
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
                    'creditCardInfostr',
                    credicCardInfostr
                  );
                  setTimeout(() => {
                    history.push('/checkpage');
                  }, 1000);
                  setShowLoading(true);
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
