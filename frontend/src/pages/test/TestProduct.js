import './result.css';
import { Link } from 'react-router-dom';

const TestProduct = ({ id, sold, image, name, price }) => {
  return (
    <Link to={`/ProductDetails/${id}`} className="text-decoration-none">
      <div className="card w-100 outermost location">
        <p className="object-price">${price}</p>
        <img className="mx-auto m-3 object-img" src={image} alt="" />
        <div className="process-card-body">
          <p className="card-text">
            {name}
            <br />
            <span className="quantity">已售出{sold}件</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default TestProduct;
