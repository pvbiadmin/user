import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";

export default class About extends Component {
  constructor() {
    super();

    this.state = {
      about: ""
    }
  }

  componentDidMount() {
    axios.get(AppUrl.AllSiteInfo).then(response => {
      let StatusCode = response.status;

      if (StatusCode === 200) {
        let JsonData = (response.data)[0]["about"];

        this.setState({about: JsonData});
      }
    }).catch(error => {

    });
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">About Us</h4>
              <p className="section-title-contact">Welcome to PVB i-Store, your ultimate destination for all your shopping needs!</p>              
              {this.state.about}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
