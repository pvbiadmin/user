import React, { Component, Fragment } from "react";
import { Breadcrumb, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class SearchList extends Component {
    render() {
        const searchList = this.props.ProductData;
        const searchKey = this.props.SearchKey;

        const myView = searchList.map((search, i) => {
            if (search.special_price === "na") {
                return (
                    <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Link className="text-link" to={"/productdetails/" + search.id} >
                            <Card className="image-box card w-100">
                                <img
                                    className="center w-75"
                                    src={search.image}
                                    alt=""
                                />
                                <Card.Body>
                                    <p className="product-name-on-card">{search.title}</p>
                                    <p className="product-price-on-card">Price: ${search.price}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                )
            } else {
                return (
                    <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Link className="text-link" to={"/productdetails/" + search.id} >
                            <Card className="image-box card w-100">
                                <img
                                    className="center w-75"
                                    src={search.image}
                                    alt=""
                                />
                                <Card.Body>
                                    <p className="product-name-on-card">{search.title}</p>
                                    <p className="product-price-on-card">Price: <strike className="text-secondary">${search.price}</strike>{" "}${search.special_price}</p>
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
                            <Breadcrumb.Item><Link to={"/productbysearch/" + searchKey}>Search For: {searchKey}</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="section-title text-center mb-40 mt-2">
                        <h2>{searchKey}</h2>
                    </div>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment >
        )
    }
}
