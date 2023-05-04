import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                  <Form className="onboardForm">
                    <h4 className="section-title-login">CONTACT US</h4>
                    <h6 className="section-sub-title">Please send your inquiries and contact with us</h6>                    
                    <input className="form-control m-2" type="email" placeholder="Enter Email Address" />
                    <input className="form-control m-2" type="text" placeholder="Enter Subject" />
                    <input className="form-control m-2" type="text" placeholder="Enter Message" />
                    <Button className="btn btn-block m-2 site-btn-login">Send</Button>
                  </Form>
                </Col>
                <Col className="Desktop p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                  <br/><br/>
                  <p className="section-title-contact">
                    2 Pines Park, Lubas Rd, La Trinidad, Benguet, Philippines 2601<br/>
                    Email: support@syswebdev.tech
                  </p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15306.272229678292!2d120.59218364138168!3d16.44674941166847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a30ea3e638f5%3A0xd5b91815f0aecbd8!2sLubas%2C%20La%20Trinidad%2C%20Benguet!5e0!3m2!1sen!2sph!4v1683165185805!5m2!1sen!2sph" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
