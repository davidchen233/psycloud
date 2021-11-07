import './orderModal.css';
import { GrClose } from 'react-icons/gr';
import ProductImg from './tempImg/12.jpg';

const OrderModal = ({ closeModal }) => {
  return (
    <div className="orderModal-mask">
      <div className="orderModal">
        <GrClose size="30" className="close" onClick={closeModal} />
        <h3 className="mb-4">訂單詳情</h3>
        <div className="row mb-2 ps-3">
          <div className="col-md-6 mb-3">
            訂單編號 :<span>EG58554</span>
          </div>
          <div className="col-md-6 mb-3">
            下單日期 :<span>2021-06-25</span>
          </div>
          <div className="col-md-6 mb-3">
            付款方式 :<span>貨到付款</span>
          </div>
          <div className="col-md-6 mb-3">
            訂單狀態 :<span>已出貨</span>
          </div>
          <div className="col-md-6 mb-3">
            取或超商 :<span>7-11 信義安和門市</span>
          </div>
        </div>
        <div className="orderProducts">
          <div className="row ps-3 align-items-center mb-3">
            <div className="col-3">
              <div className="imgBx">
                <img src={ProductImg} alt="" />
              </div>
            </div>
            <div className="col-4 fw-bold">超級捏捏好舒服</div>
            <div className="col-2">x 2</div>
            <div className="col-3">
              小計 :<span className="s-total">600</span>
            </div>
          </div>
          <div className="row ps-3 align-items-center mb-3">
            <div className="col-3">
              <div className="imgBx">
                <img src={ProductImg} alt="" />
              </div>
            </div>
            <div className="col-4 fw-bold">超級捏捏好舒服</div>
            <div className="col-2">x 2</div>
            <div className="col-3">
              小計 :<span className="s-total">600</span>
            </div>
          </div>
          <div className="row ps-3 align-items-center mb-3">
            <div className="col-3">
              <div className="imgBx">
                <img src={ProductImg} alt="" />
              </div>
            </div>
            <div className="col-4 fw-bold">超級捏捏好舒服</div>
            <div className="col-2">x 2</div>
            <div className="col-3">
              小計 :<span className="s-total">600</span>
            </div>
          </div>
          <div className="row ps-3 align-items-center mb-3">
            <div className="col-3">
              <div className="imgBx">
                <img src={ProductImg} alt="" />
              </div>
            </div>
            <div className="col-4 fw-bold">超級捏捏好舒服</div>
            <div className="col-2">x 2</div>
            <div className="col-3">
              小計 :<span className="s-total">600</span>
            </div>
          </div>
        </div>
        <p className="totalPrice mt-4">總價 : $3000</p>
      </div>
    </div>
  );
};

export default OrderModal;
