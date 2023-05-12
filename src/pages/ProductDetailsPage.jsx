import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ProductDetails from "../components/productDetails/ProductDetails";
import axios from "axios";
import AppUrl from "../api/AppUrl";
import SliderLoading from "../components/PlaceHolder/SliderLoading";

export default class ProductDetailsPage extends Component {
  constructor({ match }) {
    super();

    this.state = {
      id: match.params.id,
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    window.scroll(0, 0);

    axios.get(AppUrl.ProductDetails(this.state.id)).then(response => {
      this.setState({
        ProductData: response.data,
        isLoading: "d-none",
        mainDiv: ""
      });
    }).catch();
  }

  render() {
    if (this.state.mainDiv === "d-none") {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenuDesktop />
          </div>
          <div className="Mobile">
            <NavMenuMobile />
          </div>

          <SliderLoading isLoading={this.state.isLoading} />

          <div className="Desktop">
            <FooterDesktop />
          </div>
          <div className="Mobile">
            <FooterMobile />
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenuDesktop />
          </div>
          <div className="Mobile">
            <NavMenuMobile />
          </div>

          <ProductDetails ProductData={this.state.ProductData} />

          <div className="Desktop">
            <FooterDesktop />
          </div>
          <div className="Mobile">
            <FooterMobile />
          </div>
        </Fragment>
      )
    }
  }
}
