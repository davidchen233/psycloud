import { Link } from 'react-router-dom';

const OrderCompleted = () => {
  return (
    <>
      <div className="container">
        <div className="CP-div w-50 mx-auto mt-5">
          <div className="CP-title complete-h3">
            <h3>您已訂購完成</h3>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to="/" className="CF-btn1 me-md-2 text-decoration-none">
            回到首頁
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderCompleted;
