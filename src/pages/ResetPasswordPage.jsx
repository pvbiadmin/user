import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ResetPassword from "../components/common/ResetPassword";

export default class ResetPasswordPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
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

                <ResetPassword />

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
