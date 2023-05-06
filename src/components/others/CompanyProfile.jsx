import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import parse from "html-react-parser";

export default class CompanyProfile extends Component {
  constructor() {
    super();

    this.state = {
      companyProfile: ""
    }
  }

  componentDidMount() {
    axios.get(AppUrl.AllSiteInfo).then(response => {
      let StatusCode = response.status;

      if (StatusCode === 200) {
        let JsonData = (response.data)[0]["company_profile"];

        this.setState({companyProfile: JsonData});
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
              <h4 className="section-title-login">Company Profile</h4>
              <p className="section-title-contact">Welcome to Prime Ventures Builder, Inc. (PVB), a dynamic and diversified company specializing in real estate, fintech, e-commerce, food processing, and agri-business.</p>          
              {parse(this.state.companyProfile)}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
