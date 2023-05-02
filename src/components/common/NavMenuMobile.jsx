import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImgLogo from "../../assets/images/logo.png";

export default class NavMenuMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">          
        <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Button className="btn">
                  <i className="fa fa-bars"></i>
                </Button>                  
                <Link to="/"><img className="nav-logo ml-2" src={ImgLogo} alt="logo" /></Link>
                <Button className="cart-btn">
                  <i className="fa fa-shopping-cart"></i>{" "}3 Items
                </Button>                  
              </Col>                
            </Row>
          </Container>
          <div className="sideNavOpen">
            <hr className="w-80" />
            <div className="list-group">
              <a href="/" className="list-group-item nav-font nav-itemmenu list-group-item-action"><i className="fa fa-home mr-2"></i> Home</a>
            </div>
          </div>

          <div className="ContentOverlayOpen">

          </div>          
        </div>
      </Fragment>
    )
  }
}
