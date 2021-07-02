import React from "react";
import { Link } from "react-router-dom";
import FormPhone from "./Registrations/formPhone";
import Button from "../common/Button";
import "./Registrations/login.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <h2 className="login-name">Đăng nhập</h2>

        <FormPhone textSubmit="Đăng nhập" />

        <Link to="/registrations" className="registrations">
          Đăng kí thành viên mới ?
        </Link>

        <p className="or">hoặc đăng nhập bằng</p>
        <div className="login-fb">
          <Button text="facebook" />
          <Button text="email" />
        </div>
      </div>
    );
  }
}

export default Login;
