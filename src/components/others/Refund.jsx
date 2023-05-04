import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Refund extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">Refund Policy</h4>
              <p className="section-title-contact">At PVB i-Store, we want our customers to be completely satisfied with their purchases. If you are not satisfied with your order for any reason, we offer a refund or exchange subject to the following terms and conditions.</p>
              <h5>Returns</h5>
              <p>You may return your order within 30 days of purchase for a full refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
              <p>To initiate a return, please contact us at the email address below. We will provide you with instructions on how to return your item. You will be responsible for the cost of return shipping unless the item was defective or damaged.</p>
              <h5>Refunds</h5>
              <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
              <p>If your refund is approved, it will be processed within 5-7 business days. A credit will automatically be applied to your original method of payment.</p>
              <h5>Exchanges</h5>
              <p>If you need to exchange an item, please contact us at the email address below. We will provide you with instructions on how to exchange your item. You will be responsible for the cost of return shipping unless the item was defective or damaged.</p>
              <p>If the item you are exchanging is of greater value than the original item, we will charge you the difference in price. If the item you are exchanging is of lesser value, we will issue a refund for the difference.</p>
              <h5>Damaged or Defective Items</h5>
              <p>If you received a damaged or defective item, please contact us at the email address below within 7 days of receiving your order. We will provide you with instructions on how to return the item and will cover the cost of return shipping.</p>
              <p>Once we receive the damaged or defective item, we will send you a replacement at no additional cost.</p>
              <h5>Contact Us</h5>
              <p>If you have any questions or concerns about our Refund Policy, please contact us at pvbistore@gmail.com. We're happy to help you with any questions or concerns you may have.</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
