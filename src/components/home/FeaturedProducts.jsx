import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCTS</h2>
            <p>Some Of Our Exclusive Collections</p>
          </div>
          <Row>
            <Col>
              
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
