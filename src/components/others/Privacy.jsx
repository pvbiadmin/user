import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "../../api/AppUrl";
import parse from "html-react-parser";

export default class Privacy extends Component {
  constructor() {
    super();

    this.state = {
      privacyPolicy: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    let SiteInfoPrivacyPolicy = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoPrivacyPolicy === null) {
      axios.get(AppUrl.AllSiteInfo).then(response => {
        let StatusCode = response.status;
  
        if (StatusCode === 200) {
          let JsonData = (response.data)[0]["privacy_policy"];
  
          this.setState({
            privacyPolicy: JsonData, 
            loaderDiv: "d-none",
            mainDiv: ""
          });

          sessionStorage.setItem("SiteInfoPrivacyPolicy", JsonData);
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
      this.setState({privacyPolicy: SiteInfoPrivacyPolicy});
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
                <h4 className="section-title-login">Privacy Policy</h4>
                <p className="section-title-contact">Welcome to PVB i-Store! We're thrilled to have you here anWelcome to PVB i-Store! We are committed to protecting the privacy of our customers and users of our website. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information.</p>
                {parse(this.state.privacyPolicy)}
              </div>              
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}
