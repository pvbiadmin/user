import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Purchase extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">How to Purchase</h4>
              <p className="section-title-contact">Welcome to PVB i-Store! We're thrilled to have you here and help you find the products you need. Below is a step-by-step guide on how to purchase products from our site.</p>
              <h6>Step 1: Browse our Products</h6>
              <p>Take your time to browse through our products and select the items you wish to purchase. You can search for products by category, brand, or use our search bar to find a specific product.</p>
              <h6>Step 2: Add to Cart</h6>
              <p>Once you've found the product you want to purchase, select the quantity you wish to buy and click the "Add to Cart" button. You can continue shopping and adding items to your cart until you're ready to check out.</p>
              <h6>Step 3: Review your Cart</h6>
              <p>When you're ready to check out, click the shopping cart icon in the top right corner of the page. Here, you'll be able to review the items in your cart, update quantities, or remove items.</p>
              <h6>Step 4: Checkout</h6>
              <p>When you're ready to proceed, click the "Checkout" button. You'll be asked to enter your billing and shipping information. Please ensure that all information entered is correct and up-to-date to avoid any shipping delays.</p>
              <h6>Step 5: Payment</h6>
              <p>Once you've entered your information, select your preferred payment method. We accept credit cards, debit cards, PayPal, and other payment methods depending on your location. Enter your payment details and click the "Place Order" button.</p>
              <h6>Step 6: Order Confirmation</h6>
              <p>After your order has been placed, you'll receive an order confirmation email with the details of your purchase. You'll also receive updates on the status of your order and tracking information once your order has been shipped.</p>

              <p>If you have any questions or concerns about the purchasing process, please don't hesitate to contact our customer support team. Thank you for shopping with us, and we hope you enjoy your products!</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
