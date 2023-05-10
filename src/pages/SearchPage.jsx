import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterMobile from "../components/common/FooterMobile";
import axios from "axios";
import AppUrl from "../api/AppUrl";
import SearchList from "../components/productDetails/SearchList";

export default class SearchPage extends Component {
    constructor({ match }) {
        super();

        this.state = {
            SearchKey: match.params.searchkey,
            ProductData: []
        }
    }

    componentDidMount() {
        window.scroll(0, 0);

        axios.get(AppUrl.ProductBySearch(this.state.SearchKey)).then(response => {
            this.setState({
                ProductData: response.data
            });
        }).catch();
    }

    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop />
                </div>
                <div className="Mobile">
                    <NavMenuMobile />
                </div>

                <SearchList
                    SearchKey={this.state.SearchKey}
                    ProductData={this.state.ProductData}
                />

                <div className="Desktop">
                    <FooterDesktop />
                </div>
                <div className="Mobile">
                    <FooterMobile />
                </div>
            </Fragment>
        )
    }
}
