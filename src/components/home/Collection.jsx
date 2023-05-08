import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import axios from "axios";

export default class Collection extends Component {
  constructor() {
    super();

    this.state = {
      productData: []
    }
  }

  componentDidMount() {    
    axios.get(AppUrl.ProductListByRemarks("collection")).then(response => {
      this.setState({
        productData: response.data
      });
    }).catch();
  }

  render() {
    const featuredList = this.state.productData;

    const myView = featuredList.map((featuredList, i) => {     
      if (featuredList.special_price === "na") {
        return (
          <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100"> 
              <img 
                className="center w-75"
                src={featuredList.image} 
                alt="" 
              />             
              <Card.Body>
                <p className="product-name-on-card">{featuredList.title}</p> 
                <p className="product-price-on-card">Price: ${featuredList.price}</p>           
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
                src={featuredList.image} 
                alt="" 
              />             
              <Card.Body>
                <p className="product-name-on-card">{featuredList.title}</p> 
                <p className="product-price-on-card">Price: <strike className="text-secondary">${featuredList.price}</strike>{" "}${featuredList.special_price}</p>           
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
            <h2>PRODUCT COLLECTION</h2>
            <p>Some Of Our Exclusive Collections</p>
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    )
  }
}
