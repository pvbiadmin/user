import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

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
                  LD91-C, Lubas Proper, La Trinidad, Benguet, Philippines 2601<br/>
                  Email: support@syswebdev.tech
                </p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a className="icon-social" href="facebook.com"><i className="m-1 h4 fab fa-facebook"></i></a>
                <a className="icon-social" href="facebook.com"><i className="m-1 h4 fab fa-instagram"></i></a>
                <a className="icon-social" href="facebook.com"><i className="m-1 h4 fab fa-twitter"></i></a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APP</h5>
              </Col>
            </Row>
          </Container>
        </div>        
      </Fragment>
    )
  }
}
