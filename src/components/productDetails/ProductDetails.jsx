import React, { Component, Fragment } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import SuggestedProducts from "./SuggestedProducts";
import ReviewList from "./ReviewList";
import cogoToast from "cogo-toast";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      previewImg: "0",
      isSize: null,
      isColor: null,
      color: "",
      size: "",
      quantity: "",
      productCode: null,
      addToCart: "Add To Cart",
      PageRefreshStatus: false,
      addToFav: "Favorites",
    }
  }

  imgOnClick = event => {
    let imgSrc = event.target.getAttribute('src');
    this.setState({ previewImg: imgSrc })
  }

  addToCart = () => {
    let isSize = this.state.isSize;
    let isColor = this.state.isColor;
    let color = this.state.color;
    let size = this.state.size;
    let quantity = this.state.quantity;
    let productCode = this.state.productCode;
    let email = this.props.user.email;

    if (isColor === "YES" && color.length === 0) {
      cogoToast.error('Please Select Color', { position: 'top-right' });
    }
    else if (isSize === "YES" && size.length === 0) {
      cogoToast.error('Please Select Size', { position: 'top-right' });
    }
    else if (quantity.length === 0) {
      cogoToast.error('Please Select Quantity', { position: 'top-right' });
    }
    else if (!localStorage.getItem('token')) {
      cogoToast.warn('You have to Login First', { position: 'top-right' });
    }
    else {
      this.setState({ addToCart: "Adding..." });

      let MyFormData = new FormData();

      MyFormData.append("color", color);
      MyFormData.append("size", size);
      MyFormData.append("quantity", quantity);
      MyFormData.append("product_code", productCode);
      MyFormData.append("email", email);

      axios.post(AppUrl.AddToCart, MyFormData).then(response => {
        if (response.data === 1) {
          cogoToast.success("Product Added Successfully", { position: 'top-right' });
          this.setState({ addToCart: "Add To Cart" });
          this.setState({ PageRefreshStatus: true });
        }
        else {
          cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
          this.setState({ addToCart: "Add To Cart" });
        }
      }).catch(() => {
        cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
        this.setState({ addToCart: "Add To Cart" });
      });
    }
  }

  addToFav = () => {
    let productCode = this.state.productCode;
    let email = this.props.user.email;

    if (!localStorage.getItem("token")) {
      cogoToast.warn('You have to Login First', { position: 'top-right' });
    } else {
      this.setState({ addToFav: "Adding..." });

      axios.get(AppUrl.AddFavourite(productCode, email)).then(response => {
        if (response.data === 1) {
          cogoToast.success("Product is Added to Favorites", { position: 'top-right' });
          this.setState({ addToFav: "Favorite" });
        }
        else {
          cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
          this.setState({ addToCart: "Favorite" });
        }
      }).catch(() => {
        cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
        this.setState({ addToCart: "Favorite" });
      });
    }
  }

  colorOnChange = event => {
    let color = event.target.value;
    // alert(color);
    // cogoToast.error("Please select any color", {
    //   position: "top-right"
    // });
    this.setState({ color: color });
  }

  sizeOnChange = event => {
    let size = event.target.value;
    // alert(size);
    this.setState({ size: size });
  }

  quantityOnChange = event => {
    let quantity = event.target.value;
    // alert(quantity);
    this.setState({ quantity: quantity });
  }

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location;

      return (
        <Redirect to={URL} />
      )
    }
  }

  priceOption = (price, specialPrice) => {
    if (specialPrice === "na") {
      return (
        <p className="product-price-on-card">Price: ${price}</p>
      )
    } else {
      return (
        <p className="product-price-on-card">Price: <strike className="text-secondary">${price}</strike> ${specialPrice}</p>
      )
    }
  }

  render() {
    let productData = this.props.ProductData;

    let title = productData["productList"][0]["title"];
    let price = productData["productList"][0]["price"];
    let specialPrice = productData["productList"][0]["special_price"];
    let brand = productData["productList"][0]["brand"];
    let category = productData["productList"][0]["category"];
    let subcategory = productData["productList"][0]["subcategory"];
    let image = productData["productList"][0]["image"];
    let productCode = productData["productList"][0]["product_code"];
    let remarks = productData["productList"][0]["remarks"];
    let star = productData["productList"][0]["star"];

    let productId = productData["productDetails"][0]["product_id"];
    let imageOne = productData["productDetails"][0]["image_one"];
    let imageTwo = productData["productDetails"][0]["image_two"];
    let imageThree = productData["productDetails"][0]["image_three"];
    let imageFour = productData["productDetails"][0]["image_four"];
    let shortDescription = productData["productDetails"][0]["short_description"];
    let longDescription = productData["productDetails"][0]["long_description"];
    let color = productData["productDetails"][0]["color"];
    let size = productData["productDetails"][0]["size"];

    if (this.state.previewImg === "0") {
      this.setState({
        previewImg: image
      });
    }

    let colorDiv = "d-none";
    let sizeDiv = "d-none";

    let colorOptions = "";
    let sizeOptions = "";

    if (color !== "na") {
      let colorArr = color.split(",");
      colorOptions = colorArr.map((colorOption, index) => {
        return (
          <option value={colorOption} key={index.toString()}>
            {colorOption}
          </option>
        )
      });

      colorDiv = "";
    } else {
      colorDiv = "d-none";
    }

    if (this.state.isSize === null) {
      if (size !== "na") {
        this.setState({ isSize: "YES" });
      } else {
        this.setState({ isSize: "NO" });
      }
    }

    if (this.state.isColor === null) {
      if (color !== "na") {
        this.setState({ isColor: "YES" });
      } else {
        this.setState({ isColor: "NO" });
      }
    }

    if (this.state.productCode === null) {
      this.setState({ productCode: productCode });
    }

    if (size !== "na") {
      let sizeArr = size.split(",");
      sizeOptions = sizeArr.map((sizeOption, index) => {
        return (
          <option value={sizeOption} key={index.toString()}>
            {sizeOption}
          </option>
        )
      });

      sizeDiv = "";
    } else {
      sizeDiv = "d-none";
    }

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to={"/productcategory/" + category}>{category}</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to={"/productsubcategory/" + category + "/" + subcategory}>{subcategory}</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to={"/productdetails/" + productId}>{title}</Link></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <div className="div-big-img">
                    <div className="detailimage">
                      <InnerImageZoom
                        className="detailimage"
                        zoomScale={1.8}
                        zoomType="hover"
                        zoomSrc={this.state.previewImg}
                        src={this.state.previewImg}
                      />
                    </div>
                  </div>

                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img onClick={event => { this.imgOnClick(event) }} className="w-100 product-sm-img" src={imageOne} alt="" />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img onClick={event => { this.imgOnClick(event) }} className="w-100 product-sm-img" src={imageTwo} alt="" />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img onClick={event => { this.imgOnClick(event) }} className="w-100 product-sm-img" src={imageThree} alt="" />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img onClick={event => { this.imgOnClick(event) }} className="w-100 product-sm-img" src={imageFour} alt="" />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{title}</h5>
                  <h6 className="section-sub-title">{shortDescription}</h6>
                  {this.priceOption(price, specialPrice)}
                  {/* <div className="input-group">
                    <div className="Product-price-card d-inline ">Regular Price: ${price}</div>
                    <div className="Product-price-card d-inline ">50% Discount</div>
                    <div className="Product-price-card d-inline ">New Price: ${specialPrice}</div>
                  </div> */}
                  <h6 className="mt-2"><b>Category:</b> {category}</h6>
                  <h6 className="mt-2"><b>Subcategory:</b> {subcategory}</h6>
                  <h6 className="mt-2"><b>Brand:</b> {brand}</h6>
                  <h6 className="mt-2"><b>Product Code:</b> {productCode}</h6>

                  <div className={colorDiv}>
                    <h6 className="mt-2"><b>Colors</b></h6>
                    <select onChange={event => this.colorOnChange(event)} className="form-control form-select" >
                      <option>Choose color</option>
                      {colorOptions}
                    </select>
                  </div>

                  <div className={sizeDiv}>
                    <h6 className="mt-2"><b>Sizes</b></h6>
                    <select onChange={event => this.sizeOnChange(event)} className="form-control form-select">
                      <option>Choose size</option>
                      {sizeOptions}
                    </select>
                  </div>

                  {/* <h6 className="mt-2">Choose Color</h6>
                  <div className="input-group">
                    <div className="form-check mx-1">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                      <label className="form-check-label" htmlFor="exampleRadios1">Black</label>
                    </div>
                    <div className="form-check mx-1">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                      <label className="form-check-label" htmlFor="exampleRadios1">Green</label>
                    </div>
                    <div className="form-check mx-1">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                      <label className="form-check-label" htmlFor="exampleRadios1">Red</label>
                    </div>
                  </div> */}

                  {/* <h6 className="mt-2">Choose Size</h6>
                  <div className="input-group">
                    <div className="form-check mx-1">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                      <label className="form-check-label" htmlFor="exampleRadios1">X</label>
                    </div>
                    <div className="form-check mx-1">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                      <label className="form-check-label" htmlFor="exampleRadios1">XX</label>
                    </div>
                    <div className="form-check mx-1">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                      <label className="form-check-label" htmlFor="exampleRadios1">XXXX</label>
                    </div>
                  </div> */}

                  <h6 className="mt-2"><b>Quantity</b></h6>
                  <input onChange={event => this.quantityOnChange(event)} className="form-control text-center w-50" placeholder="Choose quantity" type="number" min="0" />

                  {/* <div className="">
                    <h6 className="mt-2"><b>Quantity</b></h6>
                    <select className="form-control form-select">
                      <option>Choose quantity</option>
                      {sizeOptions}
                    </select>
                  </div> */}

                  <div className="input-group mt-3">
                    <button onClick={this.addToCart} className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i> {this.state.addToCart}</button>

                    <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>

                    <button onClick={this.addToFav} className="btn btn-primary m-1"> <i className="fa fa-heart"></i> {this.state.addToFav}</button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  {longDescription}
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>

                  <ReviewList code={productId} />

                </Col>
              </Row>
            </Col>
          </Row>
        </Container >

        <SuggestedProducts subcategory={subcategory} />

        {this.PageRefresh()}

      </Fragment>
    )
  }
}
