import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import parse from "html-react-parser";

export default class Privacy extends Component {
  constructor() {
    super();

    this.state = {
      privacyPolicy: ""
    }
  }

  componentDidMount() {
    axios.get(AppUrl.AllSiteInfo).then(response => {
      let StatusCode = response.status;

      if (StatusCode === 200) {
        let JsonData = (response.data)[0]["privacy_policy"];

        this.setState({privacyPolicy: JsonData});
      }
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">Privacy Policy</h4>
              <p className="section-title-contact">Welcome to PVB i-Store! We're thrilled to have you here anWelcome to PVB i-Store! We are committed to protecting the privacy of our customers and users of our website. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information.</p>
              {parse(this.state.privacyPolicy)}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
