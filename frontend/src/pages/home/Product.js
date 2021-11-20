import './product.css';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import Tilt from 'react-tilt';
import P1 from './tempImg/3.jpg';

const Product = ({ id, sold, image, name, price }) => {
  return (
    <Tilt>
      <Link to={`/ProductDetails/${id}`}>
        <div className="p-card">
          <div className="content">
            <div className="productImg mx-auto">
              <img src={image} alt="" />
            </div>
            <div className="d-flex justify-content-between mb-1">
              <h3>{name}</h3>
              <p>$ {price}</p>
            </div>
            <div className="d-flex justify-content-center">
              <span>
                <FaFire style={{ color: '#FF4646' }} className="me-1" />
                已售出 {sold} 件
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Tilt>
  );
};

export default Product;
