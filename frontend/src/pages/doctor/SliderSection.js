import Card from './Card';
import './SliderSection.scss';
import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { recommend } = this.props;

    return (
      <div>
        <Slider {...settings}>
          {recommend.length > 0 &&
            recommend.map((doctor) => {
              return <Card key={doctor.id} {...doctor} />;
            })}
        </Slider>
      </div>
    );
  }
}
