import React from 'react';

import logo from '../assets/img/logo.png';
import Button from '../common/Button';
import Image from '../common/Image';
import SearchAddress from '../components/SearchAddress';
import ShipNow from '../common/ShipNow';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textButton: 'Giao ngay',
            open: false
        }
    }

    handleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }
    handleClose = () => {
        let date = document.getElementById("date").value
        let time = document.getElementById("time").value

        let textButton
        if (time !== 'Trong 15-30 phút') {
            textButton = date.concat(`-${time}`)
        } else {
            textButton = 'Giao ngay'
        }

        this.setState({
            textButton: textButton,
            open: false
        })
    }

    handleShipNow = () => {
        this.setState({
            textButton: 'Giao ngay',
            open: false
        })
    }


    render() {
        const { open, textButton } = this.state;
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
                            <Button onClick={this.handleOpen} text={textButton} />
                            <ShipNow onClickClose={this.handleClose} open={open} handleShipNow={this.handleShipNow} />
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