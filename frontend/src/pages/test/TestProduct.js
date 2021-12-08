import './result.css';
import { Link } from 'react-router-dom';

const TestProduct = ({ id, sold, image, name, price }) => {
  return (
    <Link to={`/ProductDetails/${id}`} className="text-decoration-none">
      <div className="card w-100 outermost location beshadow">
        <p className="object-price">${price}</p>
        <img className="mx-auto m-3 object-img" src={image} alt="" />
        <div className="process-card-body">
          <p className="card-text black">
            <span className="ellipsis">{name}</span>
            <span className="quantity gr">已售出{sold}件</span>
          </p>
        </div>
      </div>
      <div>
        <br />
      </div>
    </Link>
  );
};
export default TestProduct;
