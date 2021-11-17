import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './ProductDetails.css';

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '200px',
      slidesToShow: 3,
      speed: 800,
      autoplay: true,
      pauseOnHover: true,
    };
    return (
      <div className="container slick">
        <h3 className="text-center">其他人也看了...</h3>
        <Slider {...settings}>
          <div>
            <img src="/sources/bear.jpg" alt="" />
          </div>
          <div>
            <img src="/sources/bear.jpg" alt="" />
          </div>
          <div>
            <img src="/sources/bear.jpg" alt="" />
          </div>
          <div>
            <img src="/sources/bear.jpg" alt="" />
          </div>
          <div>
            <img src="/sources/bear.jpg" alt="" />
          </div>
          <div>
            <img src="/sources/bear.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
