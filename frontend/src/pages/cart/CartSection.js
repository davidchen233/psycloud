import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { PUBLIC_URL } from '../../config/config';
import { GlobalValues } from '../../App';

const CartSection = ({ setCartInfo }) => {
  let globalValues = useContext(GlobalValues);
  let cartObj = localStorage.getItem('cart').split(',');
  cartObj.pop();
  // cartObj = ["","",""]

  let cartItems = [];
  for (let i = 0; i < cartObj.length; i++) {
    let cartItem = localStorage.getItem(cartObj[i]).split('|');
    cartItems.push({
      product_id: cartObj[i],
      name: cartItem[1],
      amount: cartItem[3],
      price: cartItem[2],
      image: PUBLIC_URL + cartItem[0],
    });
  }
  const [cartItemsState, setCartItemState] = useState(cartItems);
  // cartItemsState=[{},{},{}]

  // 訂單價格計算
  let total = 0;
  let shipping = 60;
  const [finalTotal, setFinalTotal] = useState(total + shipping);

  useEffect(() => {
    setFinalTotal(total + shipping);
    setCartInfo({ total: total + shipping, cartItems: cartItemsState });
  }, [cartItemsState]);

  // 三元運算子
  // 判斷式?如果TRUE的結果:如果FALSE的結果
  if (cartObj.length === 0) {
    return (
      <>
        <h3 style={{ color: '#9D9D9D' }}>您尚未加入商品</h3>
        <Link to="/product" className="CF-btn1 text-decoration-none">
          回到商品頁
        </Link>
      </>
    );
  }

  return (
    <>
      {/* {cartObj.length === 0 ? <p>您尚未加入商品</p> : } */}
      <table className="cart-table">
        <thead className="cart-thead">
          <tr>
            <td className="thead-td d-none d-lg-inline-block">商品圖片</td>
            <td>名稱</td>
            <td>價格</td>
            <td>數量</td>
            <td>小計</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {cartItemsState.map((item) => {
            total += +item.price * +item.amount;
            return (
              <tr>
                <td className="cart-tbody-td py-3  d-none d-lg-inline-block">
                  <div className="cart-tbody-image">
                    <img src={item.image} alt="" />
                  </div>
                </td>
                <td className="cart-tbody-td">{item.name}</td>
                <td className="cart-tbody-td">${item.price}</td>
                <td className="cart-tbody-td">
                  <input
                    className="quantity-input pl-1"
                    type="number"
                    Value={item.amount}
                    min="1"
                    onChange={(e) => {
                      // 最少為 1
                      if (e.target.value === '' || e.target.value <= 0) {
                        e.target.value = 1;
                      }

                      // 改變當頁顯示陣列的值
                      // 複製出一個新的陣列
                      let newcartItems = [...cartItemsState];
                      // 找到陣列中當個物件
                      newcartItems.find((cartItem) => {
                        return cartItem.product_id === item.product_id;
                      }).amount = e.target.value;
                      // 重新給定其狀態
                      setCartItemState(newcartItems);
                      console.log(cartItemsState);

                      // 改變localstorage中對應到其id的amount
                      let storageItem = localStorage
                        .getItem(item.product_id)
                        .split('|');
                      storageItem[3] = e.target.value;

                      console.log(storageItem);
                      let storageItemString = storageItem.join('|');
                      localStorage.setItem(item.product_id, storageItemString);

                      // 更改總價
                      setFinalTotal(total + shipping);
                      setCartInfo({ total: total + shipping });
                    }}
                  />
                </td>
                <td className="cart-tbody-td">${+item.price * +item.amount}</td>
                <td
                  className="cart-tbody-td"
                  onClick={() => {
                    let itemId = item.product_id;
                    console.log(itemId);
                    // TODO: 移除 localstorage cart陣列中為該 id 的 item (filter)
                    let newcartObj = cartObj.filter((cartItem) => {
                      return cartItem !== itemId;
                    });
                    if (newcartObj.length === 0) {
                      localStorage.setItem('cart', '');
                    } else {
                      let newcartstring = newcartObj.join(',') + ',';
                      localStorage.setItem('cart', newcartstring);
                    }

                    // TODO: 移除 localstorage key 為該 id 的單筆資料
                    localStorage.removeItem(itemId);

                    // TODO: 移除 cartitem中product_id陣列中為該 id 的資料
                    let newcartItems = cartItems.filter((cartItem) => {
                      return cartItem.product_id !== itemId;
                    });
                    setCartItemState(newcartItems);

                    // 讓購物車上的數字減一
                    let cartCount = newcartObj.length;
                    globalValues.setCartCount(cartCount);
                  }}
                >
                  <FaTrashAlt size="24" className="trashcan" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <hr />
      <div className="float-left text-end pe-4 cart-totalBx">
        <div className="d-flex justify-content-end">
          <div className="me-3">商品總計</div>
          <div className="cart-value">NT$ {total}</div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="me-3">運費</div>
          <div className="cart-value">NT$ {shipping}</div>
        </div>
        <div className="d-flex justify-content-end total">
          <div className="me-3">訂單總金額</div>
          <div className="cart-value">NT$ {finalTotal}</div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
