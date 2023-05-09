import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import AppUrl from "../../api/AppUrl";
import axios from "axios";
import SliderLoading from "../PlaceHolder/SliderLoading";

export default class HomeTop extends Component {
  constructor() {
    super();

    this.state = {
      MenuData: [],
      SliderData: [],
      isLoading: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    axios.get(AppUrl.AllCategoryDetails).then(response => {
      this.setState({
        MenuData: response.data
      });
    }).catch();

    axios.get(AppUrl.AllSlider).then(response => {
      this.setState({
        SliderData: response.data,
        isLoading: "d-none",
        mainDiv: ""
      });
    }).catch();
  }

  render() {
    return (
      <Fragment>
        <SliderLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row>
              <Col lg={3} md={3} sm={12}>
                <MegaMenu data={this.state.MenuData} />
              </Col>

              <Col lg={9} md={9} sm={12}>
                <HomeSlider data={this.state.SliderData} />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}
