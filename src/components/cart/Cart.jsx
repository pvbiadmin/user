import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    axios.get(AppUrl.CartList(this.props.user.email)).then(response => {
      this.setState({
        productData: response.data,
        isLoading: "d-none",
        mainDiv: ""
      });
    }).catch();
  }

  render() {
    const cartList = this.state.productData;

    const myView = cartList.map((cart, i) => {
      return (
        <Col className="p-1" key={i.toString()} lg={12} md={12} sm={12} xs={12}>
          <Card >
            <Card.Body>
              <Row>
                <Col md={3} lg={3} sm={6} xs={6}>
                  <img className="cart-product-img" src={cart.image} alt="" />
                </Col>

                <Col md={6} lg={6} sm={6} xs={6}>
                  <h5 className="product-name">{cart.product_name}</h5>
                  <h6><span className="fw-bold">Quantity:</span> {cart.quantity}</h6>
                  <p>{cart.size} | {cart.color}</p>
                  <h6><span className="fw-bold">Price:</span> USD {cart.total_price} ({cart.quantity} * {cart.unit_price})</h6>
                </Col>

                <Col md={3} lg={3} sm={12} xs={12}>
                  {/* <input placeholder="2" className="form-control text-center" type="number" /> */}
                  <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      )
    });
    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55 pt-3">
            <h2>Product Cart List</h2>
          </div>
          <Row>
            {myView}

            {/* <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={4} lg={4} sm={6} xs={6}>
                      <h5><span className="fw-bold">Total Item:</span> 5</h5>
                      <h5><span className="fw-bold">Total Price:</span> USD 5,000.00</h5>
                      <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-shopping-cart"></i> CheckOut </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </Fragment>
    )
  }
}
