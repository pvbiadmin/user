import axios from "axios";
import React, { Component, Fragment } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "../../api/AppUrl";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export default class About extends Component {
  constructor() {
    super();

    this.state = {
      about: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    let SiteInfoAbout = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoAbout === null) {
      axios.get(AppUrl.AllSiteInfo).then(response => {
        let StatusCode = response.status;

        if (StatusCode === 200) {
          let JsonData = (response.data)[0]["about"];

          this.setState({
            about: JsonData,
            loaderDiv: "d-none",
            mainDiv: ""
          });

          sessionStorage.setItem("SiteInfoAbout", JsonData);
        } else {
          toast.error("Something went wrong", {
            position: "bottom-center"
          });
        }
      }).catch(() => {
        toast.error("Something went wrong", {
          position: "bottom-center"
        });
      });
    } else {
      this.setState({ about: SiteInfoAbout });
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/about">About</Link></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <div className={this.state.loaderDiv}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">About Us</h4>
                <p className="section-title-contact">Welcome to PVB i-Store, your ultimate destination for all your shopping needs!</p>
                {parse(this.state.about)}
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}
