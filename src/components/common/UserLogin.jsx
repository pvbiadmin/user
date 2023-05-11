import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppUrl from "../../api/AppUrl";
import ImgLogin from "../../assets/images/login.png";

export default class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: ""
    }
  }

  setEmailState(event) {
    this.setState({ email: event.target.value })
  }

  setPasswordState(event) {
    this.setState({ password: event.target.value })
  }

  formSubmit(event) {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post(AppUrl.UserLogin, data).then(response => {
      console.log(response);
    }).catch();// 
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                  <Form onSubmit={this.formSubmit} className="onboardForm" >
                    <h4 className="section-title-login">USER LOGIN</h4>

                    <input onChange={event => this.setEmailState(event)} className="form-control m-2" type="email" placeholder="Enter Your Email" />
                    <input onChange={event => this.setPasswordState(event)} className="form-control m-2" type="password" placeholder="Enter Your Password" />
                    <Button type="submit" className=" btn btn-block m-2 site-btn-login">Sign In</Button>
                    <br /><br /><hr />
                    <p><b>Forgot your password? <Link to="/forget">Reset Password</Link></b></p>
                    <p><b>Don't have an account? <Link to="/register">Register Here</Link></b></p>
                  </Form>
                </Col>
                <Col className="Desktop p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={ImgLogin} alt="Login" />
                </Col>
              </Row>

            </Col>
          </Row>
        </Container >
      </Fragment >
    )
  }
}
