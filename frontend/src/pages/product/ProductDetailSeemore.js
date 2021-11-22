import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './ProductDetails.css';
import axios from 'axios';
import { PUBLIC_URL, API_URL } from '../../config/config';

export default class CenterMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similar: [],
    };
  }
  async componentDidMount() {
    let res = await axios.get(
      `${API_URL}/products/product/${this.props.productCategory}`
    );
    res.json();

    console.log(`${API_URL}/similar/${this.props.productCategory}`);
  }

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
            <img src={this.props.samplepic} alt="" />
          </div>
          <div>
            <img src={this.props.samplepic} alt="" />
          </div>
          <div>
            <img src={this.props.samplepic} alt="" />
          </div>
          <div>
            <img src={this.props.samplepic} alt="" />
          </div>
          <div>
            <img src={this.props.samplepic} alt="" />
          </div>
          <div>
            <img src={this.props.samplepic} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
