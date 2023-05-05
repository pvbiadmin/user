import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default class Favorite extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55 pt-3">
            <h2>MY FAVORITE ITEMS</h2>
            <p>Some Of My Favorite Items</p>
          </div>
          <Row>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100"> 
                <img 
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                  alt="" 
                />             
                <Card.Body>
                  <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                  <p className="product-price-on-card">₹25,999</p>     
                  <Button className="btn btn-sm"><i className="fa fa-trash-alt"></i> Remove</Button>      
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100"> 
                <img 
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                  alt="" 
                />             
                <Card.Body>
                  <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                  <p className="product-price-on-card">₹25,999</p> 
                  <Button className="btn btn-sm"><i className="fa fa-trash-alt"></i> Remove</Button>          
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100"> 
                <img 
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                  alt="" 
                />             
                <Card.Body>
                  <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                  <p className="product-price-on-card">₹25,999</p>   
                  <Button className="btn btn-sm"><i className="fa fa-trash-alt"></i> Remove</Button>        
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100"> 
                <img 
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70" 
                  alt="" 
                />             
                <Card.Body>
                  <p className="product-name-on-card">Realme 10 Pro+ 5G</p> 
                  <p className="product-price-on-card">₹25,999</p>   
                  <Button className="btn btn-sm"><i className="fa fa-trash-alt"></i> Remove</Button>        
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
