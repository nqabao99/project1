import React, { Component } from 'react';

import logo from '../assets/img/logo.png';

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <div className="header-container">
                    <div className="header-left">
                        <a href="#"><img className="header-left__img" src={logo} alt="logo the coffee fouse"
                                width="200" /></a>
                    </div>
                    <div className="header-center">
                        <div className="header-center__call">
                            <button className="btn">Giao ngay</button>
                        </div>
                        <div className="header-center__form">
                            <form action="#">
                                <i className="fas fa-map-marker-alt"></i>
                                <input type="text" placeholder="Nhập địa chỉ giao hàng" />
                            </form>
                        </div>
                    </div>
                    <div className="header-right">
                        <button className="btn">Đăng nhập</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;