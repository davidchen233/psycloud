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
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/product/${productID}`);
    setProductDetail(res.data);

    let newCatProducts = await axios.get(
      `${API_URL}/products/similarproduct/${res.data.product_category}`
    );
    setCategoryProducts(newCatProducts.data);
    console.log(newCatProducts);
  }, []);
  console.log(productDetail);
  return (
    <>
      <ProductDetailsSection
        productDetail={productDetail.id}
        image={PUBLIC_URL + productDetail.image}
        name={productDetail.name}
        description={productDetail.description}
        price={productDetail.price}
        productInfo={productDetail}
      />
      <ProductDetailSeemore categoryProducts={categoryProducts} />
    </>
  );
};

export default ProductDetails;
