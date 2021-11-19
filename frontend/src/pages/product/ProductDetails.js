import { useState, useEffect } from 'react';
import ProductDetailsSection from './ProductDetailsSection';
import ProductDetailSeemore from './ProductDetailSeemore';
import './ProductDetails.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { PUBLIC_URL, API_URL } from '../../config/config';

const ProductDetails = () => {
  const { productID } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [productCategory, setProductCategory] = useState(0);

  useEffect(async () => {
    try {
      let res = await axios.get(`${API_URL}/products/product/${productID}`);
      setProductDetail(res.data);
      setProductCategory(res.data.product_category);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <ProductDetailsSection
        productDetail={productDetail}
        samplepic="/sources/sample.jpg"
      />
      <ProductDetailSeemore
        product_category={productCategory}
        samplepic="/sources/sample.jpg"
      />
    </>
  );
};

export default ProductDetails;
