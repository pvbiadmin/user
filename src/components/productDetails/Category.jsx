import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default class Category extends Component {
  render() {
    const categoryList = this.props.ProductData;
    const category = this.props.Category;

    const myView = categoryList.map((categoryList, i) => {     
      if (categoryList.special_price === "na") {
        return (
          <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100"> 
              <img 
                className="center w-75"
                src={categoryList.image} 
                alt="" 
              />             
              <Card.Body>
                <p className="product-name-on-card">{categoryList.title}</p> 
                <p className="product-price-on-card">Price: ${categoryList.price}</p>           
              </Card.Body>
            </Card>
          </Col>
        )
      } else {
        return (
          <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100"> 
              <img 
                className="center w-75"
                src={categoryList.image} 
                alt="" 
              />             
              <Card.Body>
                <p className="product-name-on-card">{categoryList.title}</p> 
                <p className="product-price-on-card">Price: <strike className="text-secondary">${categoryList.price}</strike>{" "}${categoryList.special_price}</p>           
              </Card.Body>
            </Card>
          </Col>
        )
      }
    });

    return (
        <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>{category}</h2>            
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    )
  }
}
