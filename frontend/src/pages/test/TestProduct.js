import './result.css';
// import { NavLink } from 'react-router-dom';

const TestProduct = ({ sold, image, name, price }) => {
  return (
    <>
      {/* <NavLink to="/"> */}

      {/* <div className="col-md-3"> */}
      <div className="card w-100 outermost location">
        <p className="object-price">${price}</p>
        {/* <div className="mx-auto m-3 object-img"> */}
        <img className="mx-auto m-3 object-img" src={image} alt="" />
        {/* </div> */}
        {/* <img class="card-img-top" src="" alt="Card image cap"> */}
        <div className="card-body">
          <p className="card-text">
            {name}
            <br />
            <span className="quantity">已售出{sold}件</span>
          </p>
        </div>
      </div>
      {/* </div> */}

      {/* </NavLink> */}
    </>
  );
};
export default TestProduct;
