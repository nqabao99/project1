import React from "react";
import Input from "../common/SearchInput";
import Button from "../common/Button";
import Image from "../common/Image";
import vn from "../assets/img/vn.png";
import "./Login/login.scss";

import { Link } from "react-router-dom";

class Registrations extends React.Component {
    render() {
        return (
            <div className="login">
                <h2 className="login-name">Chào bạn</h2>
                <p className="registrations-desc">
                    Nhập số điện thoại để tiếp tục
                </p>
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
                    <Button className="login-form__btnSubmit" text="tiếp tục" />
                </form>
                <Link to="/login" className="registrations registrations-cover">
                    Quay về
                </Link>
            </div>
        );
    }
}

export default Registrations;
