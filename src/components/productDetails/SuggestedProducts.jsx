import axios from "axios";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppUrl from "../../api/AppUrl";

export default class SuggestedProducts extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: []
    }
  }

  componentDidMount() {
    const subcategory = this.props.subcategory;
    axios.get(AppUrl.SimilarProduct(subcategory)).then(response => {
      this.setState({
        ProductData: response.data
      });
    }).catch();
  }

  render() {
    const myList = this.state.ProductData;

    if (myList.length > 0) {
      const myView = myList.map((item, i) => {
        if (item.special_price === "na") {
          return (
            <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link className="text-link" to={" /productdetails/" + item.id} >
                <Card className="image-box card">
                  <img
                    className="center"
                    src={item.image}
                    alt=""
                  />
                  <Card.Body>
                    <p className="product-name-on-card">{item.title}</p>
                    <p className="product-price-on-card">Price: ${item.price}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col >
          )
        } else {
          return (
            <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link className="text-link" to={"/productdetails/" + item.id} >
                <Card className="image-box card">
                  <img
                    className="center"
                    src={item.image}
                    alt=""
                  />
                  <Card.Body>
                    <p className="product-name-on-card">{item.title}</p>
                    <p className="product-price-on-card">Price: <strike className="text-secondary">${item.price}</strike>{" "}${item.special_price}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        }
      })

      return (
        <Fragment>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>YOU MAY ALSO LIKE</h2>
              <p>Some Of Our Products You May Like</p>
            </div>
            <Row className="card-deck">
              {myView}
            </Row>
          </Container>
        </Fragment >
      )
    } else {
      return (
        <Fragment>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>YOU MAY ALSO LIKE</h2>
              <p>Some Of Our Products You May Like</p>
            </div>
            <p>No similar products available.</p>
          </Container>
        </Fragment >
      )
    }
  }
}
