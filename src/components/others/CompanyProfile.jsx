import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "../../api/AppUrl";
import parse from "html-react-parser";

export default class CompanyProfile extends Component {
  constructor() {
    super();

    this.state = {
      companyProfile: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    let SiteInfoCompanyProfile = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoCompanyProfile === null) {
      axios.get(AppUrl.AllSiteInfo).then(response => {
        let StatusCode = response.status;
  
        if (StatusCode === 200) {
          let JsonData = (response.data)[0]["company_profile"];
  
          this.setState({
            companyProfile: JsonData, 
            loaderDiv: "d-none",
            mainDiv: ""
          });

          sessionStorage.setItem("SiteInfoCompanyProfile", JsonData);
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
                <h4 className="section-title-login">Company Profile</h4>
                <p className="section-title-contact">Welcome to Prime Ventures Builder, Inc. (PVB), a dynamic and diversified company specializing in real estate, fintech, e-commerce, food processing, and agri-business.</p>          
                {parse(this.state.companyProfile)}
              </div>                
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
