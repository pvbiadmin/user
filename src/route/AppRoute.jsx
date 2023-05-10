import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import CompanyProfilePage from "../pages/CompanyProfilePage";
import ContactPage from "../pages/ContactPage";
import FavoritePage from "../pages/FavoritePage";
import HomePage from "../pages/HomePage";
import NotificationPage from "../pages/NotificationPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductSubcategoryPage from "../pages/ProductSubcategoryPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import UserLoginPage from "../pages/UserLoginPage";

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
          <Route exact path="/login" render={(props) => <UserLoginPage {...props} key={Date.now()} />} />
          <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />} />
          <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} />} />
          <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />} />
          <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />} />
          <Route exact path="/productdetails/:id" render={(props) => <ProductDetailsPage {...props} key={Date.now()} />} />
          <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} />} />
          <Route exact path="/favorite" render={(props) => <FavoritePage {...props} key={Date.now()} />} />
          <Route exact path="/cart" render={(props) => <CartPage {...props} key={Date.now()} />} />
          <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />} />
          <Route exact path="/company" render={(props) => <CompanyProfilePage {...props} key={Date.now()} />} />
          <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubcategoryPage {...props} key={Date.now()} />} />
        </Switch>
      </Fragment>
    )
  }
}
