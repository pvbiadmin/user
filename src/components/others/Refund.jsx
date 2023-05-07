import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "../../api/AppUrl";
import parse from "html-react-parser";

export default class Refund extends Component {
  constructor() {
    super();

    this.state = {
      refundPolicy: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    let SiteInfoRefundPolicy = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoRefundPolicy === null) {
      axios.get(AppUrl.AllSiteInfo).then(response => {
        let StatusCode = response.status;
  
        if (StatusCode === 200) {
          let JsonData = (response.data)[0]["refund_policy"];
  
          this.setState({
            refundPolicy: JsonData, 
            loaderDiv: "d-none",
            mainDiv: ""
          });

          sessionStorage.setItem("SiteInfoRefundPolicy", JsonData);
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
      this.setState({refundPolicy: SiteInfoRefundPolicy});
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
                <h4 className="section-title-login">Refund Policy</h4>
                <p className="section-title-contact">At PVB i-Store, we want our customers to be completely satisfied with their purchases. If you are not satisfied with your order for any reason, we offer a refund or exchange subject to the following terms and conditions.</p>
                {parse(this.state.refundPolicy)}
              </div>              
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}
