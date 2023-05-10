import React, { Component, Fragment } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import NewArrivalLoading from "../PlaceHolder/NewArrivalLoading";
import { Link } from "react-router-dom";

export default class NewArrival extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none"
    }

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    axios.get(AppUrl.ProductListByRemarks("new")).then(response => {
      this.setState({
        productData: response.data,
        isLoading: "d-none",
        mainDiv: ""
      });
    }).catch();
  }


  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const newList = this.state.productData;

    const myView = newList.map((newList, i) => {
      if (newList.special_price === "na") {
        return (
          <div key={i.toString()}>
            <Link className="text-link" to={"/productdetails/" + newList.id} >
              <Card className="image-box card">
                <img
                  className="center"
                  src={newList.image}
                  alt=""
                />
                <Card.Body>
                  <p className="product-name-on-card">{newList.title}</p>
                  <p className="product-price-on-card">Price: ${newList.price}</p>
                </Card.Body>
              </Card>
            </Link>
          </div >
        )
      } else {
        return (
          <div key={i.toString()}>
            <Link className="text-link" to={"/productdetails/" + newList.id} >
              <Card className="image-box card">
                <img
                  className="center"
                  src={newList.image}
                  alt=""
                />
                <Card.Body>
                  <p className="product-name-on-card">{newList.title}</p>
                  <p className="product-price-on-card">Price: <strike className="text-secondary">${newList.price}</strike>{" "}${newList.special_price}</p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        )
      }
    });

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Fragment>
        <NewArrivalLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>
                NEW ARRIVAL
                <button className="btn btn-sm ml-2 site-btn" onClick={this.previous}><i className="fa fa-angle-left"></i></button>
                <button className="btn btn-sm ml-2 site-btn" onClick={this.next}><i className="fa fa-angle-right"></i></button>
              </h2>
              <p>Some Of Our Newest Arrivals</p>
            </div>
            <Row>
              <Slider ref={c => (this.slider = c)} {...settings}>
                {myView}
              </Slider>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}
