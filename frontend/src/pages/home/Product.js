import './product.css';
import { NavLink } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import Tilt from 'react-tilt';
import P1 from './tempImg/3.jpg';

const Product = () => {
  return (
    <Tilt>
      <NavLink to="/product" className="link-wrapper">
        <div className="p-card">
          <div className="content">
            <div className="productImg">
              <img src={P1} alt="" />
            </div>
            <div className="d-flex justify-content-between mb-1">
              <h3>捏捏捏好爽</h3>
              <p>$ 600</p>
            </div>
            <div className="d-flex justify-content-center">
              <span>
                <FaFire style={{ color: '#FF4646' }} className="me-1" />
                已售出 999 件
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    </Tilt>
  );
};

export default Product;