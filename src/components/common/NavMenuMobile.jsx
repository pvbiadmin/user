import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImgLogo from "../../assets/images/logo.svg";
import MegaMenuMobile from "../home/MegaMenuMobile";
import ImgBars from "../../assets/images/bars.png";

export default class NavMenuMobile extends Component {
  constructor() {
    super();

    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose"
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
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <img onClick={this.MenuBarClickHandler} className="bar-img" src={ImgBars} alt="MegaMenu Toggle" />
                <Link to="/"><img className="nav-logo ml-2 mr-2" src={ImgLogo} alt="logo" /></Link>
                {/* <Link to="/cart" className="cart-btn">
                  <i className="fa fa-shopping-cart"></i>{" "}3 Items
                </Link>                   */}
              </Col>
            </Row>
          </Container>
          <div className={this.state.SideNavState}>
            <MegaMenuMobile />
          </div>

          <div
            onClick={this.ContentOverlayClickHandler}
            className={this.state.ContentOverState}
          ></div>
        </div>
      </Fragment>
    )
  }
}
