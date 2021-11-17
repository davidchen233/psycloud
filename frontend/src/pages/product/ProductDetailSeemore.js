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
            <img src={require('./images/stuffedToys/4.jpg').default} alt="" />
          </div>
          <div>
            <img src={require('./images/stuffedToys/6.jpg').default} alt="" />
          </div>
          <div>
            <img src={require('./images/stuffedToys/13.jpg').default} alt="" />
          </div>
          <div>
            <img src={require('./images/stuffedToys/9.jpg').default} alt="" />
          </div>
          <div>
            <img src={require('./images/stuffedToys/21.jpg').default} alt="" />
          </div>
          <div>
            <img src={require('./images/stuffedToys/16.jpg').default} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
