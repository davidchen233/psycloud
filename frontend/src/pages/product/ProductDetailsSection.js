import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { PUBLIC_URL, API_URL } from '../../config/config';

const ProductDetailsSection = ({ image, name, description, price }) => {
  const { productID } = useParams();
  const [smallimages, setsmallimages] = useState([]);
  const [viewPic, setViewPic] = useState(image);

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/${productID}/images`);
    setsmallimages(res.data);

    setViewPic(image);
  }, [image]);
  console.log(smallimages);

  const changeViewPic = (e) => {
    setViewPic(e.target.currentSrc);
  };

  return (
    <div className="row detail-product ">
      <div className="col-7 d-flex justify-content-evenly">
        <div>
          <div className="product-small-img">
            {smallimages.map((smallimage) => {
              return (
                <img
                  src={PUBLIC_URL + smallimage.image}
                  alt=""
                  onClick={changeViewPic}
                />
              );
            })}
          </div>
          <div className="img-container">
            <img src={viewPic} alt="" />
          </div>
        </div>
      </div>

      <div className="col-5 d-flex align-items-start flex-column bd-highlight mb-3">
        <div className="mb-auto p-2 bd-highlight">
          <p className="detail-title">{name}</p>
          <p>{description}</p>
        </div>
        <div className="px-2 py-3 bd-highlight">
          <div>
            <label>數量: &thinsp; </label>
            <input
              className="detail-quantity-input pl-1"
              type="number"
              defaultValue="1"
              min="1"
            />
          </div>
        </div>
        <div className="p-2 bd-highlight">
          <h2>NT${price}</h2>
        </div>
        <div className="p-2 bd-highlight">
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button className="me-md-2 detail-btn1" type="button">
              加入購物車
            </button>
            <Link to="/cart">
              <button className="detail-btn2" type="button">
                直接購買
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
