import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "../../api/AppUrl";
import parse from "html-react-parser";

export default class Purchase extends Component {
  constructor() {
    super();

    this.state = {
      purchaseGuide: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    let SiteInfoPurchaseGuide = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoPurchaseGuide === null) {
      axios.get(AppUrl.AllSiteInfo).then(response => {
        let StatusCode = response.status;
  
        if (StatusCode === 200) {
          let JsonData = (response.data)[0]["purchase_guide"];
  
          this.setState(
            {
              purchaseGuide: JsonData, 
              loaderDiv: "d-none",
              mainDiv: ""
            });

          sessionStorage.setItem("SiteInfoPurchaseGuide", JsonData);
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
      this.setState({purchaseGuide: SiteInfoPurchaseGuide});
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
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
                <h4 className="section-title-login">How to Purchase</h4>
                <p className="section-title-contact">Welcome to PVB i-Store! We're thrilled to have you here and help you find the products you need. Below is a step-by-step guide on how to purchase products from our site.</p>
                {parse(this.state.purchaseGuide)}
              </div>              
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}
