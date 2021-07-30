import React from "react";
import "./styleCart.scss";
function Cart({ listProductOrder }) {
  const totalAmount = (data) => {
    let totalAmount = 0;
    data?.map((item) => (totalAmount += item.amount));
    return totalAmount;
  };
  return (
    <div className="cart">
      {listProductOrder.length !== 0 && (
        <span>{totalAmount(listProductOrder)}</span>
      )}

      <i className="fal fa-shopping-cart"></i>
    </div>
  );
}

export default Cart;
