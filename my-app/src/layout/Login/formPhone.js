import React from "react";
import Button from "../../common/Button";
import Input from "../../common/SearchInput";

import firebase from "./firebase";

class FormPhone extends React.Component {
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

    bao = () => {
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
        let number = "+84967844573";
        firebase
            .auth()
            .signInWithPhoneNumber(number, recaptcha)
            .then((e) => {
                let code = prompt("nhap ma otp", "");
                if (code === null) return;
                e.confirm(code)
                    .then((result) => {
                        console.log(result.user, "user");
                        document.querySelector("label").textContent =
                            result.user.phoneNumber + "hop le";
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
    };

    render() {
        const { textError, checkDisabled } = this.state;
        return (
            <form className="login-form" onSubmit={this.handlePhoneClick}>
                <label></label>
                <div className="login-form__phone">
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
                    text={this.props.textSubmit}
                    disabled={checkDisabled}
                />
                <Button text="bao" onClick={this.bao} />
            </form>
        );
    }
}

export default FormPhone;
