import { Link } from 'react-router-dom';
import Card from './Card';
import './doctor.css';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
SwiperCore.use(EffectCoverflow);

const Doctor = () => {
  return (
    <section className="h-section doctor">
      <h2>-- 心理師團隊 --</h2>
      <div className="d-flex justify-content-between">
        <div></div>
        <Link to="/doctor" className="seeMore text-center">
          See More
        </Link>
      </div>
      <div className="reflect">
        <Swiper
          effect={'coverflow'}
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
              slidesPerView: 2,
              spaceBetween: 10,
            },
            996: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          loop={true}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Doctor;
