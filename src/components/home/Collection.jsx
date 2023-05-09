import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import axios from "axios";
import CollectionLoading from "../PlaceHolder/CollectionLoading";

export default class Collection extends Component {
  constructor() {
    super();

    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    axios.get(AppUrl.ProductListByRemarks("collection")).then(response => {
      this.setState({
        productData: response.data,
        isLoading: "d-none",
        mainDiv: ""
      });
    }).catch();
  }

  render() {
    const collectionList = this.state.productData;

    const myView = collectionList.map((collectionList, i) => {
      if (collectionList.special_price === "na") {
        return (
          <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img
                className="center w-75"
                src={collectionList.image}
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">{collectionList.title}</p>
                <p className="product-price-on-card">Price: ${collectionList.price}</p>
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
                src={collectionList.image}
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">{collectionList.title}</p>
                <p className="product-price-on-card">Price: <strike className="text-secondary">${collectionList.price}</strike>{" "}${collectionList.special_price}</p>
              </Card.Body>
            </Card>
          </Col>
        )
      }
    });

    return (
      <Fragment>
        <CollectionLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>PRODUCT COLLECTION</h2>
              <p>Some Of Our Exclusive Collections</p>
            </div>
            <Row>
              {myView}
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}
