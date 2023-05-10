import React, { Component, Fragment } from "react";
import { Breadcrumb, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Subcategory extends Component {
  render() {
    const subcategoryList = this.props.ProductData;
    const category = this.props.Category;
    const subcategory = this.props.Subcategory;

    const myView = subcategoryList.map((subcategoryList, i) => {
      if (subcategoryList.special_price === "na") {
        return (
          <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
            <Link className="text-link" to={"/productdetails/" + subcategoryList.id} >
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src={subcategoryList.image}
                  alt=""
                />
                <Card.Body>
                  <p className="product-name-on-card">{subcategoryList.title}</p>
                  <p className="product-price-on-card">Price: ${subcategoryList.price}</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        )
      } else {
        return (
          <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
            <Link className="text-link" to={"/productdetails/" + subcategoryList.id} >
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src={subcategoryList.image}
                  alt=""
                />
                <Card.Body>
                  <p className="product-name-on-card">{subcategoryList.title}</p>
                  <p className="product-price-on-card">Price: <strike className="text-secondary">${subcategoryList.price}</strike>{" "}${subcategoryList.special_price}</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        )
      }
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to={"/productcategory/" + category}>{category}</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to={"/productsubcategory/" + category + "/" + subcategory}>{subcategory}</Link></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="section-title text-center mb-40 mt-2">
            <h2>{category} / {subcategory}</h2>
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    )
  }
}
