import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppUrl from "../../api/AppUrl";
import Validation from "../../validation/Validation";

export default class Contact extends Component {
  constructor() {
    super();
    
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  }

  nameOnChange = (event) => {
    let name = event.target.value;
    this.setState({name: name});
  }

  emailOnChange = (event) => {
    let email = event.target.value;
    this.setState({email: email});
  }

  subjectOnChange = (event) => {
    let subject = event.target.value;
    this.setState({subject: subject});
  }

  messageOnChange = (event) => {
    let message = event.target.value;
    this.setState({message: message});
  }

  onFormSubmit = (event) => {
    let name = this.state.name;
    let email = this.state.email;
    let subject = this.state.subject;
    let message = this.state.message;
    let sendBtn = document.getElementById("sendBtn");
    let contactForm = document.getElementById("contactForm");

    if (message.length === 0) {
      toast.error("Please write any message");
    } else if (name.length === 0) {
      toast.error("Please enter valid name");
    } else if (email.length === 0) {
      toast.error("Please enter valid email address");
    } else if (subject.length === 0) {
      toast.error("Please enter subject");
    } else if (!(Validation.NameRegex).test(name)) {
      toast.error("Invalid name");
    } else {
      sendBtn.innerHTML = "Sending...";

      let MyFormData = new FormData();

      MyFormData.append("name", name);
      MyFormData.append("email", email);
      MyFormData.append("subject", subject);
      MyFormData.append("message", message);

      axios.post(AppUrl.PostContact, MyFormData)
      .then(function (response) {
        if (response.status === 200 && response.data === 1) {
          toast.success("Message sent successfully");
          sendBtn.innerHTML = "Send";
          contactForm.reset();
        } else {
          toast.error("Something went wrong");
          sendBtn.innerHTML = "Send";
        }
      }) 
      .catch(function (error) {
        toast.error(error);
        sendBtn.innerHTML = "Send";
      });
    }
   
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                  <Form id="contactForm" onSubmit={this.onFormSubmit} className="onboardForm">
                    <h4 className="section-title-login">CONTACT US</h4>
                    <h6 className="section-sub-title">Please send your inquiries and contact with us</h6>   
                    <input onChange={this.nameOnChange} className="form-control m-2" type="text" placeholder="Username" />                 
                    <input onChange={this.emailOnChange} className="form-control m-2" type="email" placeholder="Email Address" />
                    <input onChange={this.subjectOnChange} className="form-control m-2" type="text" placeholder="Subject" />                    
                    <Form.Control onChange={this.messageOnChange} className="form-control m-2" as="textarea" rows={3} placeholder="Message" />
                    <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login">Send</Button>
                  </Form>
                </Col>
                <Col className="Desktop p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                  <br/><br/>
                  <p className="section-title-contact">
                    2 Pines Park, Lubas Rd, La Trinidad, Benguet, Philippines 2601<br/>
                    Email: pvbistore@gmail.com
                  </p>
                  <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15306.272229678292!2d120.59218364138168!3d16.44674941166847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a30ea3e638f5%3A0xd5b91815f0aecbd8!2sLubas%2C%20La%20Trinidad%2C%20Benguet!5e0!3m2!1sen!2sph!4v1683165185805!5m2!1sen!2sph" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}
