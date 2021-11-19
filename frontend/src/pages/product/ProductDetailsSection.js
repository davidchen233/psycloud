import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsSection = ({ samplepic }) => {
  return (
    <div className="row detail-product ">
      <div className="col-7 d-flex justify-content-evenly">
        <div>
          <div className="product-small-img">
            <img src={samplepic} alt="" />
            <img src={samplepic} alt="" />
            <img src={samplepic} alt="" />
            <img src={samplepic} alt="" />
            <img src={samplepic} alt="" />
          </div>
          <div className="img-container">
            <img src={samplepic} alt="" />
          </div>
        </div>
      </div>

      <div class="col-5 d-flex align-items-start flex-column bd-highlight mb-3">
        <div class="mb-auto p-2 bd-highlight">
          <p className="detail-title">雙面章魚娃娃</p>
          <p>小巧可愛的外型，陪你開心、陪你生氣，搭配呆萌療癒表情！</p>
          <p>一秒翻臉，飽滿填充、柔軟不怕壓扁，大人小孩都需要！</p>
        </div>
        <div class="px-2 py-3 bd-highlight">
          <div>
            <label>數量: &thinsp; </label>
            <input
              className="detail-quantity-input pl-1"
              type="number"
              Value="1"
              min="1"
            />
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <h2>NT$290</h2>
        </div>
        <div class="p-2 bd-highlight">
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
