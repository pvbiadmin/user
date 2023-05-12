import axios from "axios";
import React, { Component } from "react";
import AppUrl from "../../api/AppUrl";

export default class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      ReviewData: []
    }
  }

  componentDidMount() {
    const code = this.props.code;
    axios.get(AppUrl.ReviewList(code)).then(response => {
      this.setState({
        ReviewData: response.data
      });
    }).catch();
  }

  render() {
    const myList = this.state.ReviewData;

    if (myList.length > 0) {
      const myView = myList.map((review, i) => {
        let star = (<span className="text-success"><i className="fa fa-star"></i></span>);
        //

        if (review.reviewer_rating > 0 && review.reviewer_rating <= 1) {
          star = (<span className="text-success"><i className="fa fa-star"></i></span>);
        } else if (review.reviewer_rating > 1 && review.reviewer_rating <= 2) {
          star = (<span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i></span>);
        } else if (review.reviewer_rating > 2 && review.reviewer_rating <= 3) {
          star = (<span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></span>);
        } else if (review.reviewer_rating > 3 && review.reviewer_rating <= 4) {
          star = (<span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></span>);
        }

        return (
          <div>
            <p className=" p-0 m-0"><span className="Review-Title">{review.reviewer_name}</span> {star} </p>
            <p>{review.reviewer_comments}</p>
          </div>
        )
      })

      return (
        <div>
          <h6 className="mt-2">REVIEWS</h6>
          {myView}
        </div >
      )
    } else {
      return (
        <div>
          <h6 className="mt-2">REVIEWS</h6>
          <p>No User reviews yet.</p>
        </div >
      )
    }
  }
}
