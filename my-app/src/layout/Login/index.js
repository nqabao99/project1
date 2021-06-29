import React from "react";
import Input from "../../common/SearchInput";
import Button from "../../common/Button";
import Image from "../../common/Image";
import vn from "../../assets/img/vn.png";
import "./login.scss";

import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <h2 className="login-name">Đăng nhập</h2>
                <form className="login-form">
                    <div className="login-form__phone">
                        <Image src={vn} />
                        <select>
                            <option value="84">+84</option>
                        </select>
                        <Input
                            type="number"
                            placeholder="Nhập sô điện thoại của bạn"
                        />
                    </div>
                    {/* <p className="error">Không được để trống trường này</p> */}
                    <Button
                        className="login-form__btnSubmit"
                        text="đăng nhập"
                    />
                </form>

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
