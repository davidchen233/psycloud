import './result.css';
import Cloud from './cloud/cloud3.jpg';
import TestPsychologist from './TestPsychologist';
import TestProduct from './TestProduct';
import { useEffect, useState } from 'react';
import { PUBLIC_URL, API_URL } from '../../config/config';
import { TEST_RESULT } from '../../config/test-result';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Cell,
} from 'recharts';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import axios from 'axios';
SwiperCore.use(EffectCoverflow);

const Result = () => {
  const [result, setResult] = useState(TEST_RESULT[0]);
  //產品
  const [hotproducts, setHotproducts] = useState([]);

  const [data, setData] = useState([
    { name: '普通', 測驗分布: 0 },
    { name: '輕度', 測驗分布: 0 },
    { name: '中度', 測驗分布: 0 },
    { name: '重度', 測驗分布: 0 },
  ]);

  const [doctor, setDoctor] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/users/userTestResult`, {
      withCredentials: true,
    });
    setResult(TEST_RESULT[res.data.pressure_level]);

    let products = await axios.get(
      `${API_URL}/products/level/${res.data.pressure_level}`
    );
    setHotproducts(products.data);

    let resData = await axios.get(`${API_URL}/tests/testData`);
    setData(resData.data);

    let doctors = await axios.post(`${API_URL}/tests/recommendDoc`, {
      pressure_type: res.data.pressure_type,
    });
    setDoctor(doctors.data);
  }, []);

  return (
    <>
      <div className="gradient">
        <div className="container p-5">
          <div className="row mx-auto maxwid">
            <div className="col-md-12 ">
              <h2 className="text-center">-檢測結果-</h2>
            </div>
            <div className="col-md-12 text-center mt-3">
              <div class="card-container">
                <div className="result-card test-block outermost back">
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
                <div class="result-card test-block outermost cover">
                  <div class="card-body  align-items-center">
                    <div className="logoBox">
                      <Logo />
                    </div>
                    <h5 class="text-center mt-5">
                      --- 翻開查看您的測驗結果 ---
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-12 align-items-center mt-4">
                <h4>-壓力統計-</h4>
                <div className="App">
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 80,
                      bottom: 5,
                    }}
                    barSize={20}
                  >
                    <XAxis
                      dataKey="name"
                      scale="point"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar
                      dataKey="測驗分布"
                      fill="#4797ff"
                      background={{ fill: '#eee' }}
                    />
                  </BarChart>
                </div>
              </div>
              <div className="text-center mt-5 location">
                <h4>-推薦適合您的心理師-</h4>
                <div className="moredetail">
                  <Link to="/doctor" className="more del-line">
                    看更多&gt;&gt;
                  </Link>
                </div>
              </div>
              <div className="row mt-3">
                <Swiper
                  effect={'coverflow'}
                  // slidesPerView={3}
                  grabCursor={true}
                  // centeredSlides={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 1,
                    },
                    996: {
                      slidesPerView: 3,
                      spaceBetween: 1,
                    },
                  }}
                  // loop={true}
                >
                  {doctor.map((i) => {
                    return (
                      <SwiperSlide key={i.id}>
                        <TestPsychologist
                          id={i.id}
                          name={i.name}
                          expertise={i.expertise}
                          photo={PUBLIC_URL + '/' + i.photo}
                        />
                      </SwiperSlide>
                    );
                  })}
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
                  {hotproducts.map((hotproduct, hotproductID) => {
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
