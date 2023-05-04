import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Privacy extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">Privacy Policy</h4>
              <p className="section-title-contact">Welcome to PVB i-Store! We're thrilled to have you here anWelcome to PVB i-Store! We are committed to protecting the privacy of our customers and users of our website. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information.</p>
              <h5>Collection of Personal Information</h5>
              <p>We collect personal information such as your name, address, email address, and phone number when you place an order on our website. We may also collect information about your browsing history, IP address, and device information.</p>
              <h5>Use of Personal Information</h5>
              <p>We use your personal information to process your orders, communicate with you about your orders, and to provide you with customer support. We may also use your information to improve our website, to personalize your experience, and to send you marketing communications.</p>
              <h5>Disclosure of Personal Information</h5>
              <p>We do not sell or rent your personal information to third parties. However, we may share your information with third-party service providers who assist us with processing orders, delivering products, or providing customer support. We may also share your information if required by law or to protect our rights or property.</p>
              <h5>Cookies</h5>
              <p>We use cookies to collect information about your browsing behavior and to personalize your experience on our website. Cookies are small files that are stored on your computer or device. You may disable cookies in your browser settings, but please note that some features of our website may not function properly without cookies.</p>
              <h5>Security</h5>
              <p>We take reasonable measures to protect the security of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the security of your information.</p>
              <h5>Your Rights</h5>
              <p>You have the right to access, update, or delete your personal information at any time. You may also opt-out of receiving marketing communications from us. To exercise these rights, please contact us at the email address below.</p>
              <h5>Changes to the Privacy Policy</h5>
              <p>We reserve the right to modify this Privacy Policy at any time. We will post any changes on this page and update the "last updated" date at the top of the page.</p>
              <h5>Contact Us</h5>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at pvbistore@gmail.com.</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
