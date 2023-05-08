import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import AppUrl from "../../api/AppUrl";
import axios from "axios";

export default class HomeTop extends Component {
  constructor() {
    super();

    this.state = {
      MenuData: []
    }
  }

  componentDidMount(){
    axios.get(AppUrl.AllCategoryDetails).then(response => { 
      this.setState({
        MenuData: response.data
      });
    }).catch();
  }

  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data={this.state.MenuData} />
            </Col>

            <Col lg={9} md={9} sm={12}>
              <HomeSlider />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
