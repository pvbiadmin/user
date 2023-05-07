import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import IconDlApple from "../../assets/images/apple.png";
import IconDlGoogle from "../../assets/images/google.png";
import AppUrl from "../../api/AppUrl";
import parse from "html-react-parser";

export default class FooterDesktop extends Component {
  constructor() {
    super();

    this.state = {
      officeAddress: "",
      androidAppLink: "",
      iosAppLink: "",
      facebookLink: "",
      twitterLink: "",
      instagramLink: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    let SiteInfoFooter = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoFooter === null) {
      axios.get(AppUrl.AllSiteInfo).then(response => {
        let StatusCode = response.status;
  
        if (StatusCode === 200) {
          let JsonData = (response.data)[0];

          this.setState({
            officeAddress: JsonData["office_address"],
            androidAppLink: JsonData["android_app_link"],
            iosAppLink: JsonData["ios_app_link"],
            facebookLink: JsonData["facebook_link"],
            twitterLink: JsonData["twitter_link"],
            instagramLink: JsonData["instagram_link"],
            loaderDiv: "d-none",
            mainDiv: ""
          });

          sessionStorage.setItem("SiteInfoFooter", JsonData);
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
      this.setState({about: SiteInfoFooter});
    }    
  }

  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <div className={this.state.loaderDiv}>              
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
              </div><br />
              <div className="ph-row">                           
                <div className="ph-col-12"></div>
                <div className="ph-col-12"></div>
                <div className="ph-col-12"></div>
                <div className="ph-col-12"></div>
              </div>
            </div>              
          </div>
          <div className={this.state.mainDiv}>
            <Container>            
              <Row className="px-0 my-5">              
                <Col className="p-2" lg={3} md={3} sm={6} xs={12}>                
                  <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                  {parse(this.state.officeAddress)}                  
                  <h5 className="footer-menu-title">SOCIAL LINK</h5>
                  <a className="icon-social" href={this.state.facebookLink}><i className="m-1 h4 fab fa-facebook"></i></a>
                  <a className="icon-social" href={this.state.instagramLink}><i className="m-1 h4 fab fa-instagram"></i></a>
                  <a className="icon-social" href={this.state.twitterLink}><i className="m-1 h4 fab fa-twitter"></i></a>
                </Col>
                <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                  <h5 className="footer-menu-title">THE COMPANY</h5>
                  <Link to="/about" className="footer-link">About Us</Link><br/>
                  <Link to="/company" className="footer-link">Company Profile</Link><br/>
                  <Link to="/contact" className="footer-link">Contact Us</Link><br/>
                </Col>
                <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                  <h5 className="footer-menu-title">MORE INFO</h5>
                  <Link to="/purchase" className="footer-link">How To Purchase</Link><br/>
                  <Link to="/privacy" className="footer-link">Privacy Policy</Link><br/>
                  <Link to="/refund" className="footer-link">Refund Policy</Link><br/>
                </Col>
                <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                  <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                  <a href={this.state.androidAppLink} target="_blank" rel="noreferrer">
                    <img src={IconDlGoogle} alt="Google Download" />
                  </a><br/>
                  <a href={this.state.iosAppLink} target="_blank" rel="noreferrer">
                    <img className="mt-2" src={IconDlApple} alt="Apple Download" />
                  </a><br/><br/>
                  Change Your Language<br/>
                  <div id="google_translate_element"></div>
                </Col>              
              </Row>                        
            </Container>
            <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
              <Container>
                <Row>
                  <h6 className="text-white">&copy; Copyright {(new Date().getFullYear())} Prime Ventures Builder, Inc. All Rights Reserved</h6>
                </Row>
              </Container>
            </Container>
          </div>          
          <ToastContainer />
        </div>        
      </Fragment>
    )
  }
}
