import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class CompanyProfile extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">Company Profile</h4>
              <p className="section-title-contact">Welcome to Prime Ventures Builder, Inc. (PVB), a dynamic and diversified company specializing in real estate, fintech, e-commerce, food processing, and agri-business.</p>          

              <p>With a proven track record of success, PVB has established itself as a leader in the industries we operate in. Our mission is to create value for our clients, customers, and stakeholders by delivering innovative solutions and exceptional service.</p>
              
              <p>In the real estate industry, we focus on developing high-quality properties that meet the needs of modern living. We take pride in creating sustainable and environmentally friendly communities that are both functional and aesthetically pleasing.</p>
              
              <p>Our fintech solutions leverage the latest technologies to provide innovative financial products and services that meet the needs of our customers. We are committed to providing secure, reliable, and user-friendly financial services that empower our customers to achieve their financial goals.</p>
              
              <p>In e-commerce, we operate a multi-purpose online store that offers a diverse range of products, including electronics, fashion, beauty, home and kitchen essentials, and much more. We are dedicated to providing our customers with a hassle-free and convenient shopping experience, no matter what they're looking for.</p>
              
              <p>Our food processing and agri-business operations are focused on creating high-quality products that meet the growing demand for healthy and sustainable food. We are committed to promoting responsible and sustainable agriculture practices that support the local economy and promote environmental stewardship.</p>
              
              <p>At PVB, we are guided by a strong set of values that include integrity, innovation, excellence, and social responsibility. We are committed to making a positive impact on the communities we serve and strive to create long-term value for our stakeholders.</p>

              <p>Thank you for your interest in PVB. We are dedicated to providing you with exceptional service and look forward to serving you in the future.</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
