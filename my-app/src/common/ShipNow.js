import React from 'react';
import '../assets/shipnow.scss';
import Button from '../common/Button';

class ShipNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openShipBot: false
        }
    }

    handleOpenShipBot = () => {
        this.setState({
            openShipBot: true
        })
    }

    handleCloseShipBot = () => {
        this.setState({
            openShipBot: false
        })
    }


    render() {
        const { open } = this.props;
        const { openShipBot } = this.state;
        return (
            <div className={open ? 'open ship-now' : 'ship-now'}>
                <div className="ship-now__top">
                    <div className="ship-now__top-text" onClick={this.props.onClick}>
                        <i className="fa fa-search"></i>
                        <span>Giao ngay</span>
                    </div>
                    <div className="ship-now__top-text" onClick={this.handleOpenShipBot}>
                        <i className="fa fa-search"></i>
                        <span>Thời gian đặt hàng</span>
                    </div>
                </div>
                <div className={openShipBot ? 'open ship-now__bot' : 'ship-now__bot'}>
                    <div className="ship-now__bot-day">
                        <label>Ngày đặt</label>
                        <select>
                            <option>Hôm nay</option>
                            <option>16/06/2021</option>
                            <option>17/06/2021</option>
                        </select>
                    </div>
                    <div className="ship-now__bot-day">
                        <label>Thời gian đặt</label>
                        <select>
                            <option>Trong 15-30 phút</option>
                            <option>20:00</option>
                            <option>20:15</option>
                            <option>20:30</option>
                            <option>20:45</option>
                            <option>21:00</option>
                        </select>
                    </div>
                    <Button onClick={this.handleCloseShipBot} className="btn-shipnow" text="Hẹn giờ" />
                </div>
            </div>
        )
    }
}

export default ShipNow;