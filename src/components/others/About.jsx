import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">About Us</h4>
              <p className="section-title-contact">Welcome to PVB i-Store, your ultimate destination for all your shopping needs!</p>              
              <p>At PVB i-Store, we strive to offer a diverse range of high-quality products that cater to our customers' every need. Our online store is home to an extensive collection of products, ranging from electronics, fashion, beauty, home and kitchen essentials, and much more. We believe that everyone deserves access to top-quality products at affordable prices, and that's exactly what we offer.</p>
              
              <p>Our commitment to quality is evident in the brands we offer. We have partnered with some of the world's most renowned brands to bring you products that are innovative, reliable, and durable. We understand that our customers expect nothing but the best, and we make it our mission to exceed their expectations.</p>
              
              <p>At PVB i-Store, we believe that shopping should be easy and hassle-free. Our website is designed to provide a seamless and user-friendly shopping experience. You can easily browse through our product categories, read product descriptions, and check out customer reviews to make an informed decision. If you have any questions or concerns, our friendly customer service team is always here to help.</p>
              
              <p>We take pride in our fast and reliable delivery service. We understand that our customers want their products as soon as possible, and we do our best to ensure timely delivery. Our payment process is also secure and straightforward, so you can shop with confidence.</p>
              
              <p>At PVB i-Store, we value our customers' satisfaction above everything else. We are constantly striving to improve our services and enhance our customers' experience. Whether you're shopping for yourself or looking for the perfect gift, we are confident that you'll find what you're looking for at PVB i-Store.</p>
              
              <p>Thank you for choosing PVB i-Store. We are committed to providing you with an exceptional shopping experience and look forward to serving you in the future.</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
