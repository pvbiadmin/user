import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";

export default class Favorite extends Component {
  constructor() {
    super();

    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    axios.get(AppUrl.FavouriteList(this.props.user.email)).then(response => {
      this.setState({
        productData: response.data,
        isLoading: "d-none",
        mainDiv: ""
      });
    }).catch();
  }

  render() {
    const favoriteList = this.state.productData;

    const myView = favoriteList.map((favorite, i) => {
      return (
        <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
            <img
              className="center w-75"
              src={favorite.image}
              alt=""
            />
            <Card.Body>
              <p className="product-name-on-card">{favorite.product_name}</p>
              <Button className="btn btn-sm"><i className="fa fa-trash-alt"></i> Remove</Button>
            </Card.Body>
          </Card>
        </Col>
      )
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55 pt-3">
            <h2>MY FAVORITE ITEMS</h2>
            <p>Some Of My Favorite Items</p>
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    )
  }
}
