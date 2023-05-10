import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";

export default class Notification extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      notificationData: [],
      isLoading: "",
      mainDiv: "d-none",
      modalNotificationMessage: "",
      modalNotificationTitle: "",
      modalNotificationDate: "",
    }
  }

  componentDidMount() {
    axios.get(AppUrl.NotificationHistory).then(response => {
      this.setState({
        notificationData: response.data,
        isLoading: "d-none",
        mainDiv: ""
      });
    }).catch();
  }

  handleClose = () => {
    this.setState({ show: false })
  };

  handleShow = (event) => {
    this.setState({
      show: true
    })

    let nMessage = event.target.getAttribute("data-message");
    let nTitle = event.target.getAttribute("data-title");
    let nDate = event.target.getAttribute("data-date");

    this.setState({
      modalNotificationMessage: nMessage,
      modalNotificationTitle: nTitle,
      modalNotificationDate: nDate,
    })
  };

  render() {
    const notificationList = this.state.notificationData;

    const myView = notificationList.map((notification, index) => {
      return (
        <Col className=" p-1 " key={index.toString()} md={6} lg={6} sm={12} xs={12}>
          <Card onClick={this.handleShow} className="notification-card">
            <Card.Body>
              <h6>{notification.title}</h6>
              <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>  Date: {notification.date} | Status: Unread</p>
              <Button
                data-title={notification.title}
                data-date={notification.date}
                data-message={notification.message}
                className="btn btn-danger"
              >Details</Button>
            </Card.Body>
          </Card>
        </Col >
      )
    })

    return (
      <Fragment>
        <Container className="TopSection">
          <Row>
            {myView}
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6><i className="fa fa-bell"></i> Date: {this.state.modalNotificationDate}</h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.modalNotificationTitle}</h6>
            <p>{this.state.modalNotificationMessage}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}
