import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Category from "../components/productDetails/Category";
import axios from "axios";
import AppUrl from "../api/AppUrl";

export default class ProductCategoryPage extends Component {
  constructor({match}) {
    super();

    this.state = {
      Category: match.params.category,
      ProductData: []
    }
  }

  componentDidMount() {
    window.scroll(0, 0);
    // alert(this.state.Category);
    axios.get(AppUrl.ProductListByCategory(this.state.Category)).then(response => {
      this.setState({
        ProductData: response.data
      });
    }).catch();
  }

  render() {
    return (
        <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />          
        </div>
        <div className="Mobile">
          <NavMenuMobile />          
        </div>

        <Category Category={this.state.Category} ProductData={this.state.ProductData} />
        
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
