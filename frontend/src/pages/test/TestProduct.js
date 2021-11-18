import './result.css';
// import { NavLink } from 'react-router-dom';

const TestProduct = () => {
  return (
    <>
      {/* <NavLink to="/"> */}

      {/* <div className="col-md-3"> */}
        <div className="card w-100 outermost location">
          <p className="object-price">$380</p>
          <div className="mx-auto m-3 object-img" />
          {/* <img class="card-img-top" src="" alt="Card image cap"> */}
          <div className="card-body">
            <p className="card-text">
              紓壓玩具
              <br />
              <span className="quantity">已售出990件</span>
            </p>
          </div>
        </div>
      {/* </div> */}

      {/* </NavLink> */}
    </>
  );
};
export default TestProduct;
