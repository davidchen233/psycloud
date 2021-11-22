import { useState, useEffect } from 'react';
import ProductDetailsSection from './ProductDetailsSection';
import ProductDetailSeemore from './ProductDetailSeemore';
import './ProductDetails.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { PUBLIC_URL, API_URL } from '../../config/config';

const ProductDetails = () => {
  const { productID, catagoryID } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [productCategory, setProductCategory] = useState(true);

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/product/${productID}`);
    setProductDetail(res.data);
  }, []);
  console.log(productDetail);

  // useEffect(async () => {
  //   try {
  //     let res = await axios.get(`${API_URL}/prouduts/catagory/${catagoryID}`);
  //     setProductCategory(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  // console.log(productCategory);

  useEffect(async () => {
    try {
      let res = await axios.get(`${API_URL}/products/product/${productID}`);
      setProductDetail(res.data);
      setProductCategory(res.data.product_category);
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(productCategory);

  return (
    <>
      <ProductDetailsSection
        productDetail={productDetail.id}
        image={PUBLIC_URL + productDetail.image}
        name={productDetail.name}
        description={productDetail.description}
        price={productDetail.price}
      />
      <ProductDetailSeemore
        productCategory={productCategory.id}
        similarpic={PUBLIC_URL + productCategory.image}
      />
    </>
  );
};

export default ProductDetails;
