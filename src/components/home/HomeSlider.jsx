import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImgSlider1 from "../../assets/images/slider1.jpg";
import ImgSlider2 from "../../assets/images/slider2.jpg";
import ImgSlider3 from "../../assets/images/slider3.jpg";

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="slider-img" src={ImgSlider1} alt="" />
          </div>
          <div>
            <img className="slider-img" src={ImgSlider2} alt="" />
          </div>
          <div>
            <img className="slider-img" src={ImgSlider3} alt="" />
          </div>
        </Slider>
      </div>
    )
  }
}
