import './seemore.css';
import { PUBLIC_URL, API_URL } from '../../config/config';
import { Link } from 'react-router-dom';

const ProductDetailSeemore = ({ categoryProducts }) => {
  if (categoryProducts === undefined) {
    return <></>;
  }
  return (
    <div className="seeMoreWrapper">
      <h4>其他人也看了 ... </h4>
      <div className="seeMoreContent">
        {categoryProducts.map((seemores) => {
          return (
            <a href={`/ProductDetails/${seemores.id}`} alt="">
              <div className="seeMoreImg">
                <img src={PUBLIC_URL + seemores.image} alt="" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetailSeemore;
