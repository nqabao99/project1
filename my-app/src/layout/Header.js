import React from 'react';

import logo from '../assets/img/logo.png';
import Button from '../common/Button';
import Image from '../common/Image';
import SearchAddress from '../components/SearchAddress';
import ShipNow from '../common/ShipNow';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-container">
                    <div className="header-left">
                        <a href="/#">
                            <Image className="header-left__img" src={logo} alt="logo the coffee fouse" width="200" />
                        </a>
                    </div>
                    <div className="header-center">
                        <div className="header-center__call">
                            <Button text="Giao ngay" />
                            <ShipNow />
                        </div>

                        <div className="header-center__form">
                            <SearchAddress />
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