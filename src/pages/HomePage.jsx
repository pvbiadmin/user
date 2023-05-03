import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HomeTop from "../components/home/HomeTop";
import NewArrival from "../components/home/NewArrival";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterMobile from "../components/common/FooterMobile";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>        
        
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
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
