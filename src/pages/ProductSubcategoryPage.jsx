import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterMobile from "../components/common/FooterMobile";
import axios from "axios";
import AppUrl from "../api/AppUrl";
import Subcategory from "../components/productDetails/Subcategory";

export default class ProductSubcategoryPage extends Component {
  constructor({match}) {
    super();

    this.state = {
      Category: match.params.category,
      Subcategory: match.params.subcategory,
      ProductData: []
    }
  }

  componentDidMount() {
    window.scroll(0, 0);
    
    axios.get(AppUrl.ProductListBySubcategory(this.state.Category, this.state.Subcategory)).then(response => {
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

        <Subcategory 
          Category={this.state.Category} 
          Subcategory={this.state.Subcategory} 
          ProductData={this.state.ProductData} 
        />
        
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
