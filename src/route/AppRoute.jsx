import axios from "axios";
import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import AppUrl from "../api/AppUrl";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import CompanyProfilePage from "../pages/CompanyProfilePage";
import ContactPage from "../pages/ContactPage";
import FavoritePage from "../pages/FavoritePage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import HomePage from "../pages/HomePage";
import NotificationPage from "../pages/NotificationPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductSubcategoryPage from "../pages/ProductSubcategoryPage";
import ProfilePage from "../pages/ProfilePage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SearchPage from "../pages/SearchPage";
import UserLoginPage from "../pages/UserLoginPage";

export default class AppRoute extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get(AppUrl.UserData).then(response => {
      this.setUser(response.data)
    }).catch();
  }

  setUser(user) {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <Fragment>
        <NavMenuDesktop user={this.state.user} setUser={this.setUser} />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />
          <Route exact path="/login" render={(props) => <UserLoginPage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} />} />
          <Route exact path="/register" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />
          <Route exact path="/forget" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} />} />
          <Route exact path="/reset/:id" render={(props) => <ResetPasswordPage {...props} key={Date.now()} />} />
          <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} />} />
          <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />} />
          <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} />} />
          <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />} />
          <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />} />
          <Route exact path="/productdetails/:id" render={(props) => <ProductDetailsPage user={this.state.user} {...props} key={Date.now()} />} />
          <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} />} />
          <Route exact path="/favorite" render={(props) => <FavoritePage user={this.state.user} {...props} key={Date.now()} />} />
          <Route exact path="/cart" render={(props) => <CartPage {...props} user={this.state.user} key={Date.now()} />} />
          <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />} />
          <Route exact path="/company" render={(props) => <CompanyProfilePage {...props} key={Date.now()} />} />
          <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubcategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()} />} />
          <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />
        </Switch>
      </Fragment>
    )
  }
}
