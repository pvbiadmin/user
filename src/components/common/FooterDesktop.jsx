import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class FooterDesktop extends Component {
  render() {
    return (
      <Fragment >
        <Container>
          <Row>
            <Col lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
              <p>
                LD91-C, Lubas Proper, La Trinidad, Benguet, Philippines 2601<br/>
                Email: support@syswebdev.tech
              </p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">SOCIAL LINK</h5>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">THE COMPANY</h5>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">MORE INFO</h5>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
