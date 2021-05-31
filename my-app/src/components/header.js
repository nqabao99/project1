import React, { Component } from 'react';

import logo from '../assets/img/logo.png';
import Button from './button';
import SearchInput from './search_input';
import Image from './image';

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <div className="header-container">
                    <div className="header-left">
                        <a href="#">
                            <Image className="header-left__img" src={logo} alt="logo the coffee fouse" width="200"  />
                        </a>
                    </div>
                    <div className="header-center">
                        <div className="header-center__call">
                            <Button text="Giao ngay" />
                        </div>
                        <div className="header-center__form">
                            <form action="#">
                                <i className="fa fa-map-marker"></i>
                                <SearchInput type="text"  placeholder="Nhập địa chỉ giao hàng"/>
                            </form>
                        </div>
                    </div>
                    <div className="header-right">
                        <Button text="Đăng nhập" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;