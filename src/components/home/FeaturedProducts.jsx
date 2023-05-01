import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

export default class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCTS</h2>
            <p>Some Of Our Exclusive Collections</p>
          </div>
          <Row className="card-deck">
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>

            <Col className="p-1" key={2} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>

            <Col className="p-1" key={3} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>

            <Col className="p-1" key={4} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>

            <Col className="p-1" key={5} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>

            <Col className="p-1" key={6} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
