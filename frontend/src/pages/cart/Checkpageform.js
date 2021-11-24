import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Checkpageform = ({ history }) => {
  let orderInfo = JSON.parse(sessionStorage.getItem('orderInfostr'));
  let orderItem = JSON.parse(sessionStorage.getItem('orderItemstr'));

  console.log('orderInfo', orderInfo);
  console.log('orderItem', orderItem);

  //離開頁面時清除sessionstorage
  useEffect(() => {
    history.listen(() => {
      sessionStorage.removeItem('orderInfostr');
      sessionStorage.removeItem('orderItemstr');
    });
  }, []);

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
      </div>
    </>
  );
};

export default withRouter(Checkpageform);
