import React from "react";
import "./styleBodyRight.scss";
import Button from "../../conponents/common/Button";
import Currency from "../common/Currency";
import Input from "../common/Input";
function BodyRight(props) {
  return (
    <div>
      <div className="body-right">
        <div className="body-right__top">
          <Button text="Xem giỏ hàng" />
        </div>
        <div className="cart-list">
          <div className="cart-item">
            <div className="cart-item__info">
              <span>1</span>
              <div className="product-info">
                <p>Cà phê sữa đá</p>
                <p>Nhỏ</p>
                <p>Topping</p>
              </div>
            </div>
            <Currency price="10000" />
          </div>
        </div>

        <div className="payment">
          <div className="payment-item">
            <p>Cộng (2 món)</p>
            <Currency price="10000" />
          </div>
          <div className="payment-item">
            <p>Vận chuyển</p>
            <Currency price="10000" />
          </div>
          <div className="payment-from">
            <Input type="text" placeholder="Nhập mã ưu đãi" />
            <Button text="Áp dụng" />
          </div>
        </div>
        <div className="total">
          <p>Tổng cộng</p>
          <Currency price="30000" />
        </div>
      </div>
    </div>
  );
}

export default BodyRight;
