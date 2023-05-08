import axios from "axios";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppUrl";

export default class Categories extends Component {
  constructor() {
    super();

    this.state = {
      MenuData: []
    }
  }

  componentDidMount() {
    axios.get(AppURL.AllCategoryDetails).then(response => { 
      this.setState({
        MenuData: response.data
      });
    }).catch();
  }

  render() {
    const CatList = this.state.MenuData;

    const MyView = CatList.map((CatList, i) => {
      return (
        <Col className="p-0" key={i.toString()} xl={2} lg={2} md={2} sm={6} xs={6}>
          <Link to={"/productcategory/" + CatList.category_name}>
            <Card className="h-100 w-100 text-center">          
              <Card.Body> 
              <img className="center" src={CatList.category_image} alt="" />  
              <h5 className="category-name">{CatList.category_name}</h5>  
              </Card.Body>
            </Card>
          </Link>           
        </Col>
      ) 
    })

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>CATEGORIES</h2>
            <p>Select From One of Our Product Categories </p>
          </div>
          <Row> 
            {MyView}
          </Row>
        </Container>
      </Fragment>
    )
  }
}
