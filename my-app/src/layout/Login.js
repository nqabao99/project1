import React from "react";
import { Link } from "react-router-dom";
import FormPhone from "./Registrations/FormPhone";
import Button from "../common/Button";
import "./Registrations/login.scss";

import firebase from "./Registrations/FireBase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      phone: null,
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("User")
      .get()
      .then((result) => {
        const users = [];
        result.forEach((item) => {
          const data = item.data();
          users.push(data);
        });
        this.setState({
          user: users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPhoneLogin = (e) => {
    console.log(e);
  };

  render() {
    // console.log(this.state.phone);
    return (
      <div className="login">
        <h2 className="login-name">Đăng nhập</h2>

        <FormPhone textSubmit="Đăng nhập" getPhoneLogin={this.getPhoneLogin} />

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
