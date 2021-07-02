import React from "react";

import Button from "../../common/Button";
import Input from "../../common/SearchInput";

import "./login.scss";

class FormOTP extends React.Component {
  render() {
    const { handleFormOtp, hendleOtp, phone } = this.props;
    return (
      <form className="form-otp" onSubmit={handleFormOtp}>
        <p>
          {` Nhập mã xác thực gồm 6 số đã được gửi đến số điện thoại ${phone} để tiếp tục`}
        </p>
        <Input
          type="number"
          onChange={hendleOtp}
          name="otp"
          placeholder="Nhập mã OPT"
        />
        <Button text="Gửi" />
      </form>
    );
  }
}

export default FormOTP;
