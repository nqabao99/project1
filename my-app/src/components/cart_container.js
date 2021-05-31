import React, { Component } from 'react';

import Button from './button';
import SearchInput from './search_input';
import Currency from './currency'


class Cart extends React.Component {
    render() {
        return(
            <div className="main-container__right">
                <div className="main-cart">
                    <div className="main-cart__top">
                        <Button text="Xem giỏ hàng" />
                    </div>
                    <div className="main-cart__mid">
                        <p className="color-33">Cộng món</p>
                        <div className="total">
                            <p className="color-33">Vận chuyển</p>
                            <Currency className="color-33" price="0" />
                        </div>
                        <form className="main-cart__mid-form" action="#">
                            <SearchInput type="text"  placeholder="Nhập mã ưu đãi tại đây"/>
                            <Button className="btn-apply" text="Áp dụng" />
                        </form>
                    </div>
                    <div className="main-cart__bot">
                        <div className="total">
                            <p>Tổng cộng</p>
                            <Currency price="0" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;