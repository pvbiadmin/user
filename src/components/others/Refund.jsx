import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import parse from "html-react-parser";

export default class Refund extends Component {
  constructor() {
    super();

    this.state = {
      refundPolicy: ""
    }
  }

  componentDidMount() {
    axios.get(AppUrl.AllSiteInfo).then(response => {
      let StatusCode = response.status;

      if (StatusCode === 200) {
        let JsonData = (response.data)[0]["refund_policy"];

        this.setState({refundPolicy: JsonData});
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
              <h4 className="section-title-login">Refund Policy</h4>
              <p className="section-title-contact">At PVB i-Store, we want our customers to be completely satisfied with their purchases. If you are not satisfied with your order for any reason, we offer a refund or exchange subject to the following terms and conditions.</p>
              {parse(this.state.refundPolicy)}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
