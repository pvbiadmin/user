import axios from "axios";
import cogoToast from "cogo-toast";
import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import AppUrl from "../../api/AppUrl";

export default class Favorite extends Component {
  constructor() {
    super();

    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none",
      PageRefreshStatus: false
    }
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios.get(AppUrl.FavouriteList(this.props.user.email)).then(response => {
      this.setState({
        productData: response.data,
        isLoading: "d-none",
        mainDiv: ""
      });
    }).catch();
  }

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location;

      return (
        <Redirect to={URL} />
      )
    }
  }

  removeItem = event => {
    let product_code = event.target.getAttribute("data-code");
    let email = this.props.user.email;
    axios.get(AppUrl.FavouriteRemove(product_code, email)).then(response => {
      cogoToast.success("Item Removed From Favorites", { position: 'top-right' });
      this.setState({ PageRefreshStatus: true });
    }).catch(() => {
      cogoToast.error("Your Request is not done, try again", { position: 'top-right' });
    });
  }

  render() {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />
    }

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
              <Button onClick={this.removeItem} data-code={favorite.product_code} className="btn btn-sm" > <i className="fa fa-trash-alt"></i> Remove</Button>
            </Card.Body>
          </Card>
        </Col >
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
        {this.PageRefresh()}
      </Fragment >
    )
  }
}
