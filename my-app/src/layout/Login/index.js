import React from "react";
import Input from "../../common/SearchInput";
import Button from "../../common/Button";
import Image from "../../common/Image";
import vn from "../../assets/img/vn.png";
import "./login.scss";

import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneText: "",
            textError: "",
            checkDisabled: true,
        };
    }
    blockInvalidChar = (e) =>
        ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
    handlePhone = (e) => {
        if (e.target.value.length < 9 || e.target.value.length > 11) {
            this.setState({
                textError: "Giá trị nằm trong khoảng 9-11 số!",
                checkDisabled: true,
            });
        } else {
            this.setState({
                phoneText: e.target.value,
                textError: "",
                checkDisabled: false,
            });
        }
        if (e.target.value.length === 0) {
            this.setState({
                textError: "Không được để trống trường này",
                checkDisabled: true,
            });
        }
    };

    handlePhoneClick = (e) => {
        e.preventDefault();
        if (this.state.phoneText.length === 0) {
            this.setState({
                textError: "Không được để trống trường này",
            });
        }
    };

    render() {
        const { textError, checkDisabled } = this.state;

        return (
            <div className="login">
                <h2 className="login-name">Đăng nhập</h2>
                <form className="login-form" onSubmit={this.handlePhoneClick}>
                    <div className="login-form__phone">
                        <Image src={vn} />
                        <select>
                            <option value="84">+84</option>
                        </select>
                        <Input
                            type="number"
                            placeholder="Nhập sô điện thoại của bạn"
                            onChange={this.handlePhone}
                            onKeyDown={this.blockInvalidChar}
                            min="0"
                        />
                    </div>
                    <p className="error">{textError}</p>

                    <Button
                        className="login-form__btnSubmit"
                        text="đăng nhập"
                        disabled={checkDisabled}
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
