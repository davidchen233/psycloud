import './orders.css';

const Orders = ({ openModal }) => {
  console.log(openModal);
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

        <div className="row mb-4 align-items-center">
          <div className="col-2">#D554845</div>
          <div className="col-3">2021-05-30</div>
          <div className="col-2">$ 666</div>
          <div className="col-2">
            <span className="order-status">未出貨</span>
          </div>
          <div className="col-3">
            <button onClick={openModal} className="viewBtn">
              檢視詳情
            </button>
          </div>
        </div>
        <div className="row mb-4 align-items-center">
          <div className="col-2">#D554845</div>
          <div className="col-3">2021-05-30</div>
          <div className="col-2">$ 666</div>
          <div className="col-2">
            <span className="order-status">未出貨</span>
          </div>
          <div className="col-3">
            <button onClick={openModal} className="viewBtn">
              檢視詳情
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
