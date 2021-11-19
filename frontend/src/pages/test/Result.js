import './result.css';
import Cloud from './cloud/cloud3.jpg';
import React from 'react';
import TestPsychologist from './TestPsychologist';
import TestProduct from './TestProduct';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
SwiperCore.use(EffectCoverflow);

const result = () => {
  return (
    <>
      <div className="gradient">
        <div className="container p-5">
          <div className="row mx-auto maxwid">
            <div className="col-md-12 ">
              <h2>-檢測結果-</h2>
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
                        <span className="cocolor">輕度</span>
                      </h5>
                      <p />
                      <p>
                        壓力滿困擾您，雖能勉強應付，但必須認真學習壓力管理了，
                        <br />
                        同時多與良師益友聊一聊。
                      </p>
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
                  <a href="#/" className="more del-line">
                    看更多&gt;&gt;
                  </a>
                </div>
              </div>
              {/* 產品                 */}
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
                    slidesPerView: 4,
                    spaceBetween: 1,
                  },
                }}
                loop={true}
              >
                <SwiperSlide>
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
                </SwiperSlide>
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

export default result;
