import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconDlApple from "../../assets/images/apple.png";
import IconDlGoogle from "../../assets/images/google.png";

export default class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                <p>
                2 Pines Park, Lubas Rd, La Trinidad, Benguet, Philippines 2601<br/>
                  Email: pvbistore@gmail.com
                </p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a className="icon-social" href="//facebook.com"><i className="m-1 h4 fab fa-facebook"></i></a>
                <a className="icon-social" href="//instagram.com"><i className="m-1 h4 fab fa-instagram"></i></a>
                <a className="icon-social" href="//twitter.com"><i className="m-1 h4 fab fa-twitter"></i></a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="/" className="footer-link">About Us</Link><br/>
                <Link to="/" className="footer-link">Company Profile</Link><br/>
                <Link to="/contact" className="footer-link">Contact Us</Link><br/>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="/purchase" className="footer-link">How To Purchase</Link><br/>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link><br/>
                <Link to="/refund" className="footer-link">Refund Policy</Link><br/>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                <a href="/"><img src={IconDlGoogle} alt="Google Download" /></a><br/>
                <a href="/"><img className="mt-2" src={IconDlApple} alt="Apple Download" /></a><br/><br/>
                Change Your Language<br/>
                <div id="google_translate_element"></div>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className="text-white">&copy; Copyright {(new Date().getFullYear())} Prime Ventures Builder, Inc. All Rights Reserved</h6>
              </Row>
            </Container>
          </Container>
        </div>        
      </Fragment>
    )
  }
}
