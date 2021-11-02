import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
const Doctor = () => {
  return (
    <section className="doctor">
      <h2>-- 預約心理師 --</h2>
      <NavLink to="/doctor" className="seeMore d-block mx-auto text-center">
        See More
      </NavLink>
      <Swiper grabCursor={true} slidesPerView={'4'}>
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
    </section>
  );
};

export default Doctor;
