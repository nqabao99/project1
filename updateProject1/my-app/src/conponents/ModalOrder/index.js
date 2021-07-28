import React from "react";
import "./styleModalOrder.scss";
import Image from "../common/Image";
import Input from "../common/Input";
import Currency from "../common/Currency";
import cafe from "../../assets/img/cafe.jpeg";
function ModalOrder(props) {
  return (
    <div className="overlay">
      <div className="modal-order">
        <div className="product-option__top">
          <Image src={cafe} width="80" />
          <div className="product-option__top-info">
            <p>Cà phê sữa đá</p>
            <p>Vừa</p>
            <p>Topping 1</p>
          </div>
          <i className="fa fa-times"></i>
        </div>

        <div className="product-option__body">
          <div className="product-option__body-option">
            <p>Loại</p>
            <div className="checkbox-container">
              <p>Size-</p>
              <div className="checkbox-items">
                <div className="checkbox">
                  <Input type="radio" name="radio" />
                  <span>
                    <Currency price="10000" />
                  </span>
                </div>
              </div>
            </div>

            <div className="checkbox-container">
              <p>Topping-</p>
              <div className="checkbox-items">
                <div className="checkbox">
                  <Input type="checkbox" name="checkbox" />
                  <span>
                    <Currency price="10000" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Input
            className="note"
            type="text"
            placeholder="Thêm ghi chú món này"
          />
        </div>

        <div className="product-option__bot">
          <div className="product-option__bot-left">
            <i className="fa fa-minus-circle"></i>
            <span>1</span>
            <i className="fa fa-plus-circle"></i>
          </div>
          <div className="product-option__bot-right">
            <p>Thêm vào giỏ hàng</p>
            <Currency price="20000" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalOrder;
