import { useState, useEffect, useContext } from 'react';
import { Link, useParams, withRouter, useHistory } from 'react-router-dom';
import axios from 'axios';
import { PUBLIC_URL, API_URL } from '../../config/config';
import { GlobalValues } from '../../App';

const ProductDetailsSection = ({
  image,
  name,
  description,
  price,
  productInfo,
}) => {
  let globalValues = useContext(GlobalValues);
  let user = localStorage.getItem('user');
  let history = useHistory();
  const { productID } = useParams();
  const [smallimages, setsmallimages] = useState([]);
  const [viewPic, setViewPic] = useState(image);
  const [amount, setAmount] = useState(1);

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/${productID}/images`);
    setsmallimages(res.data);
    setViewPic(image);
  }, [image]);

  const changeViewPic = (e) => {
    setViewPic(e.target.currentSrc);
  };

  const handleAmountChange = (e) => {
    let newAmount = e.target.value;
    setAmount(newAmount);
  };
  if (image === undefined) {
    return <></>;
  }
  return (
    <div className="detail-product d-flex mx-auto justify-content-between">
      <div className="d-flex justify-content-evenly">
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

      <div className="d-flex align-items-start flex-column bd-highlight mb-3 right-content">
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
              value={amount}
              min="1"
              onChange={handleAmountChange}
            />
          </div>
        </div>
        <div className="p-2 bd-highlight">
          <h2>NT${price}</h2>
        </div>
        <div className="p-2 bd-highlight">
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button
              className="me-md-2 detail-btn1"
              type="button"
              onClick={(e) => {
                if (!user) {
                  history.push('/auth');
                } else {
                  if (localStorage.getItem(productInfo.id)) {
                    alert('您已加入購物車');
                  } else {
                    localStorage.setItem(
                      productInfo.id,
                      e.currentTarget.children[0].value
                    );
                    let newCart = localStorage.getItem('cart');
                    newCart += `${productInfo.id},`;
                    localStorage.setItem('cart', newCart);

                    let cartStr = localStorage.getItem('cart');
                    let cartObj = cartStr.split(',');
                    let cartCount = cartObj.length - 1;
                    globalValues.setCartCount(cartCount);
                  }
                }
              }}
            >
              {/* image|name|price|amount */}
              <input
                type="text"
                value={`${productInfo.image}|${productInfo.name}|${productInfo.price}|${amount}`}
                hidden
              />
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

export default withRouter(ProductDetailsSection);
