import './result.css';
import Cloud from './cloud/cloud3.jpg';
import TestPsychologist from './TestPsychologist';
import TestProduct from './TestProduct';
import { useEffect, useState } from 'react';
import { PUBLIC_URL, API_URL } from '../../config/config';
import { TEST_RESULT } from '../../config/test-result';
import { Link } from 'react-router-dom';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import axios from 'axios';
SwiperCore.use(EffectCoverflow);

const Result = () => {
  const [result, setResult] = useState(TEST_RESULT[0]);
  //產品
  const [hotproducts, sethotproducts] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/users/userTestResult`, {
      withCredentials: true,
    });
    setResult(TEST_RESULT[res.data.pressure_level]);

    let products = await axios.get(
      `${API_URL}/products/level/${res.data.pressure_level}`
    );
    sethotproducts(products.data);
  }, []);

  // console.log(result);
  // console.log(hotproducts);

  return (
    <>
      <div className="gradient">
        <div className="container p-5">
          <div className="row mx-auto maxwid">
            <div className="col-md-12 ">
              <h2 className="text-center">-檢測結果-</h2>
            </div>
            <div className="col-md-12 text-center mt-3">
              <div className="card test-block outermost">
                <div className="card-body  align-items-center">
                  <div className="mx-auto  m-top">
                    {/* <img src="http://fakeimg.pl/100x75" alt="雲朵" /> */}
                    <img src={Cloud} alt="雲朵" className="lastcloud" />
                    <div className="mt-3">
                      <p />
                      <h5>
                        您的壓力狀態為&nbsp; :&nbsp;
                        <span className="cocolor">{result.pressure}</span>
                      </h5>
                      <p />
                      <p>{result.info}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5 location">
                <h4>-推薦適合您的心理師-</h4>
                <div className="moredetail">
                  <a href="#/" className="more del-line">
                    看更多&gt;&gt;
                  </a>
                </div>
              </div>
              <div className="row mt-3">
                <Swiper
                  effect={'coverflow'}
                  // slidesPerView={3}
                  grabCursor={true}
                  centeredSlides={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  breakpoints={{
                    // when window width is >= 480px
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 1,
                    },
                    996: {
                      slidesPerView: 3,
                      spaceBetween: 1,
                    },
                  }}
                  loop={true}
                >
                  <SwiperSlide>
                    <TestPsychologist />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TestPsychologist />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TestPsychologist />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="mt-5 location">
                <h4>-您可能會喜歡的舒壓好物-</h4>
                <div className="moredetail">
                  <Link to="/product" className="more del-line">
                    看更多&gt;&gt;
                  </Link>
                </div>
              </div>
              {/* 產品                 */}
              <div className="row mt-3">
                <Swiper
                  effect={'coverflow'}
                  // slidesPerView={3}
                  grabCursor={true}
                  centeredSlides={false}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  breakpoints={{
                    // when window width is >= 480px
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 1,
                    },
                    996: {
                      slidesPerView: 4,
                      spaceBetween: 1,
                    },
                  }}
                  loop={true}
                >
                  {/* <SwiperSlide>
                    <TestProduct />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TestProduct />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TestProduct />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TestProduct />
                  </SwiperSlide> */}
                  {hotproducts.map((hotproduct, productID) => {
                    return (
                      <SwiperSlide>
                        <TestProduct
                          key={hotproduct.id}
                          id={hotproduct.id}
                          sold={hotproduct.sold}
                          name={hotproduct.name}
                          price={hotproduct.price}
                          image={PUBLIC_URL + hotproduct.image}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              {/* 產品                 */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
