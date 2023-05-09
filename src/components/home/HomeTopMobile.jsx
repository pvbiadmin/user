import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import HomeSlider from "./HomeSlider";

export default class HomeTopMobile extends Component {
  constructor() {
    super();

    this.state = {
      SliderData: [],
    }
  }

  componentDidMount(){
    axios.get(AppUrl.AllSlider).then(response => { 
      this.setState({
        SliderData: response.data
      });
    }).catch();
  }

  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row className="p-0 m-0 overflow-hidden">        
            <Col lg={12} md={12} sm={12}>
              <HomeSlider data={this.state.SliderData} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
