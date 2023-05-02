import React, { Component, Fragment } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImgLogo from "../../assets/images/logo.png";

export default class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar className="navbar" fixed={"top"} bg="light">
            <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to="/"><img className="nav-logo ml-2" src={ImgLogo} alt="logo" /></Link>
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input className="form-control" type="text" />
                    <Button className="btn site-btn" type="button">
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>                  
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <Link to="/" className="btn">
                    <i className="h4 fa fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <button className="btn"><i className="h4 fa fa-mobile-alt"></i></button>
                  <Link to="/" className="h4 btn">LOGIN</Link>
                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"></i>{" "}3 Items
                  </Button>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>        
      </Fragment>
    )
  }
}
