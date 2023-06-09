import React, { Component, Fragment } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import ImgLogo from "../../assets/images/logo.svg";
import MegaMenuAll from "../home/MegaMenuAll";
import ImgBars from "../../assets/images/bars.png";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

export default class NavMenuDesktop extends Component {
  constructor() {
    super();

    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
      SearchKey: "",
      SearchRedirectStatus: false,
      cartCount: 0
    }

    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.SearchOnClick = this.SearchOnClick.bind(this);
    this.SearchRedirect = this.SearchRedirect.bind(this);
  }

  componentDidMount() {
    let product_code = this.props.product_code;
    axios.get(AppUrl.CartCount(product_code)).then(response => {
      this.setState({ cartCount: response.data })
    });
  }

  logout() {
    localStorage.clear();
  }

  SearchOnChange(event) {
    let SearchKey = event.target.value;
    // alert(SearchKey);
    this.setState({
      SearchKey: SearchKey
    })
  }

  SearchOnClick() {
    if (this.state.SearchKey.length >= 2) {
      this.setState({
        SearchRedirectStatus: true
      })
    }
  }

  SearchRedirect() {
    if (this.state.SearchRedirectStatus === true) {
      return (
        <Redirect to={"/productbysearch/" + this.state.SearchKey} />
      )
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  }

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState

    if (SideNavState === "sideNavOpen") {
      this.setState({
        SideNavState: "sideNavClose",
        ContentOverState: "ContentOverlayClose"
      });
    } else {
      this.setState({
        SideNavState: "sideNavOpen",
        ContentOverState: "ContentOverlayOpen"
      });
    }
  }

  render() {
    let buttons;

    if (localStorage.getItem("token")) {
      buttons = (
        <div>
          <Link to="/favorite" className="btn">
            <i className="h4 fa fa-heart"></i>
            <sup>
              <span className="badge text-white bg-danger">3</span>
            </sup>
          </Link>
          <Link to="/notification" className="btn">
            <i className="h4 fa fa-bell"></i>
            <sup>
              <span className="badge text-white bg-danger">5</span>
            </sup>
          </Link>
          <Link to="/cart" className="cart-btn">
            <i className="fa fa-shopping-cart"></i>{" "}{this.state.cartCount} Items
          </Link>
          <Link to="/profile" className="h4 btn">PROFILE</Link>
          <Link to="/" onClick={this.logout} className="h4 btn" > LOGOUT</Link>
        </div >
      )
    } else {
      buttons = (
        <div>
          <Link to="/favorite" className="btn">
            <i className="h4 fa fa-heart"></i>
            <sup>
              <span className="badge text-white bg-danger">3</span>
            </sup>
          </Link>
          <Link to="/notification" className="btn">
            <i className="h4 fa fa-bell"></i>
            <sup>
              <span className="badge text-white bg-danger">5</span>
            </sup>
          </Link>
          <Link to="/cart" className="cart-btn">
            <i className="fa fa-shopping-cart"></i>{" "}0 Items
          </Link>
          <Link to="/login" className="h4 btn">LOGIN</Link>
          <Link to="/register" className="h4 btn">REGISTER</Link>
        </div>
      )
    }
    //
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar className="navbar" fixed={"top"} bg="light">
            <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <img onClick={this.MenuBarClickHandler} className="bar-img" src={ImgBars} alt="MegaMenu Toggle" />
                  <Link to="/">
                    <img className="nav-logo ml-2" src={ImgLogo} alt="logo" />
                  </Link>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input onChange={this.SearchOnChange} className="form-control" type="text" />
                    <Button onClick={this.SearchOnClick} className="btn site-btn" type="button">
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  {buttons}
                </Col>
              </Row>
              {this.SearchRedirect()}
            </Container>
          </Navbar>
        </div>
        <div className={this.state.SideNavState}>
          <MegaMenuAll />
        </div>
        <div
          onClick={this.ContentOverlayClickHandler}
          className={this.state.ContentOverState}
        ></div>
      </Fragment>
    )
  }
}
