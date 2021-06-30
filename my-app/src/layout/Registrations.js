import React from "react";
import { Link } from "react-router-dom";
import FormPhone from "../layout/Login/formPhone";
import "./Login/login.scss";

class Registrations extends React.Component {
    render() {
        return (
            <div className="login">
                <h2 className="login-name">Chào bạn</h2>
                <p className="registrations-desc">
                    Nhập số điện thoại để tiếp tục
                </p>

                <FormPhone textSubmit="tiếp tục" />

                <Link to="/login" className="registrations registrations-cover">
                    Quay về
                </Link>
            </div>
        );
    }
}

export default Registrations;
