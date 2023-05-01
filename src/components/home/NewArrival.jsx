import React, { Component, Fragment } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class NewArrival extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>
              NEW ARRIVAL
              <button className="btn btn-sm ml-2 site-btn" onClick={this.previous}><i className="fa fa-angle-left"></i></button>
              <button className="btn btn-sm ml-2 site-btn" onClick={this.next}><i className="fa fa-angle-right"></i></button>
            </h2>
            <p>Some Of Our Exclusive Collections</p>
          </div>
          <Row>
            <Slider ref={c => (this.slider = c)} {...settings}>
              <div>
                <Card className="image-box card"> 
                  <img 
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                    alt="" 
                  />             
                  <Card.Body>
                    <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                    <p className="product-price-on-card">₹25,999</p>           
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card"> 
                  <img 
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                    alt="" 
                  />             
                  <Card.Body>
                    <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                    <p className="product-price-on-card">₹25,999</p>           
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card"> 
                  <img 
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                    alt="" 
                  />             
                  <Card.Body>
                    <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                    <p className="product-price-on-card">₹25,999</p>           
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card"> 
                  <img 
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                    alt="" 
                  />             
                  <Card.Body>
                    <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                    <p className="product-price-on-card">₹25,999</p>           
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card"> 
                  <img 
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                    alt="" 
                  />             
                  <Card.Body>
                    <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                    <p className="product-price-on-card">₹25,999</p>           
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card"> 
                  <img 
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                    alt="" 
                  />             
                  <Card.Body>
                    <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                    <p className="product-price-on-card">₹25,999</p>           
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card"> 
                  <img 
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                    alt="" 
                  />             
                  <Card.Body>
                    <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                    <p className="product-price-on-card">₹25,999</p>           
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card"> 
                  <img 
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                    alt="" 
                  />             
                  <Card.Body>
                    <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                    <p className="product-price-on-card">₹25,999</p>           
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
