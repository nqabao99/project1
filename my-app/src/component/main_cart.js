import React, { Component } from 'react';


class Cart extends React.Component {
    render() {
        return(
            <div className="main-container__right">
                <div className="main-cart">
                    <div className="main-cart__top">
                        <p>Xem giỏ hàng</p>
                    </div>
                    <div className="main-cart__mid">
                        <p className="color-33">Cộng món</p>
                        <div className="total">
                            <p className="color-33">Vận chuyển</p>
                            <p className="color-33">0 <span>đ</span></p>
                        </div>
                        <form className="main-cart__mid-form" action="#">
                            <input type="text" placeholder="Nhập mã ưu đãi tại đây" />
                            <button className="btn btn-apply">Áp dụng</button>
                        </form>
                    </div>
                    <div className="main-cart__bot">
                        <div className="total">
                            <p>Tổng cộng</p>
                            <p>0 <span>đ</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;