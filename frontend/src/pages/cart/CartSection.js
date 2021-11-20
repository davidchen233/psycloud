import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartSection = () => {
  return (
    <>
      <table className="cart-table">
        <thead className="cart-thead">
          <tr>
            <td className="thead-td">商品圖片</td>
            <td>商品名稱</td>
            <td>價格</td>
            <td>數量</td>
            <td>小計</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cart-tbody-td py-3">
              <div className="cart-tbody-image">
                <img src="/sources/bear.jpg" alt="" />
              </div>
            </td>
            <td className="cart-tbody-td">章魚小麵團</td>
            <td className="cart-tbody-td">$299</td>
            <td className="cart-tbody-td">
              <input
                className="quantity-input pl-1"
                type="number"
                Value="1"
                min="1"
              />
            </td>
            <td className="cart-tbody-td">$299</td>
            <td className="cart-tbody-td">
              <FaTrashAlt />
            </td>
          </tr>
          <tr>
            <td className="cart-tbody-td py-3">
              <div className="cart-tbody-image">
                <img src="/sources/bear.jpg" alt="" />
              </div>
            </td>
            <td className="cart-tbody-td">章魚小麵團</td>
            <td className="cart-tbody-td">$299</td>
            <td className="cart-tbody-td">
              <input
                className="quantity-input pl-1"
                type="number"
                Value="1"
                min="1"
              />
            </td>
            <td className="cart-tbody-td">$299</td>
            <td className="cart-tbody-td">
              <FaTrashAlt />
            </td>
          </tr>
          <tr>
            <td className="cart-tbody-td py-3">
              <div className="cart-tbody-image">
                <img src="/sources/bear.jpg" alt="" />
              </div>
            </td>
            <td className="cart-tbody-td">章魚小麵團</td>
            <td className="cart-tbody-td">$299</td>
            <td className="cart-tbody-td">
              <input
                className="quantity-input pl-1"
                type="number"
                Value="1"
                min="1"
              />
            </td>
            <td className="cart-tbody-td">$299</td>
            <td className="cart-tbody-td">
              <FaTrashAlt />
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <div className="d-flex justify-content-between">
        <div></div>
        <div className="w-25 text-end pe-4 ">
          <div className="row">
            <div className="col-6">商品總計</div>
            <div className="col-6">NT$ 1,234</div>
          </div>
          <div className="row">
            <div className="col-6">運費</div>
            <div className="col-6">NT$ 60</div>
          </div>
          <div className="row total">
            <div className="col-6">訂單總金額</div>
            <div className="col-6">NT$ 2,831</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
