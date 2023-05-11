import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import ImgForget from "../../assets/images/forget.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: ''
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email
    }

    axios.post(AppUrl.UserForgetPassword, data).then(response => {
      // console.log(response);
      this.setState({
        message: response.data.message
      })

      toast.success(this.state.message, {
        position: "top-right"
      });
    }).catch(error => {
      // console.log(error);

      this.setState({
        message: error.response.data.message
      })

      toast.error(this.state.message, {
        position: "top-right"
      });
    });

  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login">FORGET PASSWORD</h4>

                    <input className="form-control m-2" type="email" placeholder="Enter Your Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />

                    <Button type="submit" className=" btn btn-block m-2 site-btn-login">Reset Password</Button>
                  </Form>
                </Col>
                <Col className="Desktop p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={ImgForget} alt="Forget Password" />
                </Col>
              </Row>

            </Col>
          </Row>
        </Container >
        <ToastContainer />
      </Fragment >
    )
  }
}
