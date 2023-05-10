import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ImgForget from "../../assets/images/forget.jpg";

export default class ForgetPassword extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className="onboardForm">
                                        <h4 className="section-title-login">FORGET PASSWORD</h4>

                                        <input className="form-control m-2" type="email" placeholder="Enter Your Email" />

                                        <Button className="btn btn-block m-2 site-btn-login">Reset Password</Button>
                                    </Form>
                                </Col>
                                <Col className="Desktop p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src={ImgForget} alt="Forget Password" />
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container >
            </Fragment >
        )
    }
}
