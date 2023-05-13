import axios from "axios";
import cogoToast from "cogo-toast";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Redirect } from "react-router";
import AppUrl from "../../api/AppUrl";

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none",
      PageRefreshStatus: false,
      PageRedirectStatus: false,

      confirmBtn: "Confirm Order",
      city: "",
      payment: "",
      name: "",
      address: ""
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

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location;

      return (
        <Redirect to={URL} />
      )
    }
  }

  removeItem = id => {
    axios.get(AppUrl.RemoveCartList(id)).then(response => {
      if (response.data === 1) {
        cogoToast.success("Item Removed From Cart", { position: 'top-right' });
        this.setState({ PageRefreshStatus: true });
      } else {
        cogoToast.error("Your Request is not done, try again", { position: 'top-right' });
      }
    }).catch(() => {
      cogoToast.error("Your Request is not done, try again", { position: 'top-right' });
    });
  }

  itemMinus = (id, quantity, price) => {
    axios.get(AppUrl.CartItemMinus(id, quantity, price)).then(response => {
      if (response.data === 1) {
        cogoToast.success("Item Quantity Reduced", { position: 'top-right' });
        this.setState({ PageRefreshStatus: true });
      } else {
        cogoToast.error("Your Request is not done, try again", { position: 'top-right' });
      }
    }).catch(() => {
      cogoToast.error("Your Request is not done, try again", { position: 'top-right' });
    });
  }

  itemPlus = (id, quantity, price) => {
    axios.get(AppUrl.CartItemPlus(id, quantity, price)).then(response => {
      if (response.data === 1) {
        cogoToast.success("Item Quantity Increased", { position: 'top-right' });
        this.setState({ PageRefreshStatus: true });
      } else {
        cogoToast.error("Your Request is not done, try again", { position: 'top-right' });
      }
    }).catch(() => {
      cogoToast.error("Your Request is not done, try again", { position: 'top-right' });
    });
  }

  nameOnChange = (event) => {
    let name = event.target.value;
    this.setState({ name: name })
  }

  addressOnChange = (event) => {
    let address = event.target.value;
    this.setState({ address: address })
  }

  confirmOnClick = () => {
    let city = this.state.city;
    let payment = this.state.payment;
    let name = this.state.name;
    let address = this.state.address;
    let email = this.props.user.email;

    if (city.length === 0) {
      cogoToast.error("Please Select City", { position: 'top-right' });
    }
    else if (payment.length === 0) {
      cogoToast.error("Please Select Payment", { position: 'top-right' });
    }
    else if (name.length === 0) {
      cogoToast.error("Please Select Your Name", { position: 'top-right' });
    }
    else if (address.length === 0) {
      cogoToast.error("Please Select Your Address", { position: 'top-right' });
    }
    else {
      let invoice = new Date().getTime();
      let MyFromData = new FormData();

      MyFromData.append('city', city)
      MyFromData.append('payment_method', payment)
      MyFromData.append('name', name)
      MyFromData.append('delivery_address', address)
      MyFromData.append('email', email)
      MyFromData.append('invoice_no', invoice)
      MyFromData.append('delivery_charge', "00");

      axios.post(AppUrl.CartOrder, MyFromData).then(response => {

        if (response.data === 1) {
          cogoToast.success("Order Request Received", { position: 'top-right' });
          this.setState({ PageRedirectStatus: true })
        } else {
          cogoToast.error("Your Request is not done ! Try Aagain", { position: 'top-right' });
        }
      }).catch(() => {
        cogoToast.error("Your Request is not done ! Try Aagain", { position: 'top-right' });
      });
    }
  }

  PageRedirect = () => {
    if (this.state.PageRedirectStatus === true) {
      return (
        <Redirect to="/orderlist" />
      )
    }
  }

  render() {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />
    }

    const MyList = this.state.productData;

    let totalPriceSum = 0;

    const myView = MyList.map((ProductList, i) => {
      totalPriceSum = totalPriceSum + parseInt(ProductList.total_price)
      return (
        <div key={i.toString()}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} lg={3} sm={6} xs={6}>
                  <img className="cart-product-img" src={ProductList.image} alt="" />
                </Col>

                <Col md={6} lg={6} sm={6} xs={6}>
                  <h5 className="product-name">{ProductList.product_name}</h5>
                  <h6> Quantity: {ProductList.quantity} </h6>
                  <p>{ProductList.size} | {ProductList.color}</p>
                  <h6>Price: {ProductList.unit_price} x {ProductList.quantity} = {ProductList.total_price}$</h6>
                </Col>

                <Col md={3} lg={3} sm={12} xs={12}>

                  <Button onClick={() => this.removeItem(ProductList.id)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-trash-alt"></i> </Button>

                  <Button onClick={() => this.ItemPlus(ProductList.id, ProductList.quantity, ProductList.unit_price)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-plus"></i> </Button>

                  <Button onClick={() => this.ItemMinus(ProductList.id, ProductList.quantity, ProductList.unit_price)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-minus"></i> </Button>

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      )
    })

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55 pt-3">
            <h2>Product Cart List</h2>
          </div>
          <Row>
            <Col className="p-1" lg={7} md={7} sm={12} xs={12} >
              {myView}
            </Col>

            <Col className="p-1" lg={5} md={5} sm={12} xs={12} >
              <div className="card p-2">
                <div className="card-body">
                  <div className="container-fluid ">
                    <div className="row">
                      <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                        <h5 className="Product-Name text-danger">Total Due: ${totalPriceSum}</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">City</label>
                        <select onChange={this.cityOnChange} className="form-control">
                          <option value="">Choose Your City</option>
                          <option value="Manila">Manila</option>
                          <option value="Mandaluyong">Mandaluyong</option>
                          <option value="Makati">Makati</option>
                          <option value="Pasig">Pasig</option>
                          <option value="Marikina">Marikina</option>
                          <option value="Antipolo">Antipolo</option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Payment Method</label>
                        <select onChange={this.paymentMethodOnChange} className="form-control">
                          <option value="">Choose Method</option>
                          <option value="Cash On Delivery">Cash On Delivery</option>
                          <option value="Cash On Delivery">Stripe</option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Name</label>
                        <input onChange={this.nameOnChange} className="form-control" type="text" placeholder="" />
                      </div>

                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Delivery Address</label>
                        <textarea onChange={this.addressOnChange} rows={2} className="form-control" type="text" placeholder="" />
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12" style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={this.confirmOnClick} className="btn  site-btn"> {this.state.confirmBtn} </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {this.PageRefresh()}
      </Fragment >
    )
  }
}
