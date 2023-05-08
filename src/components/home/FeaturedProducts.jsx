import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppUrl from "../../api/AppUrl";
import axios from "axios";

export default class FeaturedProducts extends Component {
  constructor() {
    super();

    this.state = {
      productData: []
    }
  }

  componentDidMount() {    
    axios.get(AppUrl.ProductListByRemarks("featured")).then(response => {
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
          <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to="/productdetails">
              <Card className="image-box card"> 
                <img 
                  className="center"
                  src={featuredList.image} 
                  alt="" 
                />             
                <Card.Body>
                  <p className="product-name-on-card">{featuredList.title}</p> 
                  <p className="product-price-on-card">Price: ${featuredList.price}</p>           
                </Card.Body>
              </Card>
            </Link>                            
          </Col>
        )
      } else {
        return (
          <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to="/productdetails">
              <Card className="image-box card"> 
                <img 
                  className="center"
                  src={featuredList.image} 
                  alt="" 
                />             
                <Card.Body>
                  <p className="product-name-on-card">{featuredList.title}</p> 
                  <p className="product-price-on-card">Price: <strike className="text-secondary">${featuredList.price}</strike>{" "}${featuredList.special_price}</p>           
                </Card.Body>
              </Card>
            </Link>                            
          </Col>
        )
      }
    });
    
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCTS</h2>
            <p>Some Of Our Featured Products</p>
          </div>
          <Row className="card-deck">
            {myView}
          </Row>
        </Container>
      </Fragment>
    )
  }
}
