import React from 'react';
import '../assets/shipnow.scss';
import Button from '../common/Button';

class ShipNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openShipBot: false,
            dateDefault: 'Hôm nay',
            timeDefault: 'Trong 15-30 phút'
        }
    }

    handleOpenShipBot = () => {
        this.setState({
            openShipBot: true
        })
    }

    handleDateTime = (e) => {

        if (e.target.value !== "15/06/2021") {
            this.setState({
                timeDefault: "20:00"
            })
        } else {
            this.setState({
                timeDefault: 'Trong 15-30 phút'
            })
        }
    }

    render() {
        const { open } = this.props;
        const { openShipBot, timeDefault, dateDefault } = this.state;
        return (
            <div className={open ? 'open ship-now' : 'ship-now'}>
                <div className="ship-now__top">
                    <div className="ship-now__top-text" onClick={this.props.handleShipNow}>
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
                        <select id="date" onChange={this.handleDateTime}>
                            <option value="15/06/2021">{dateDefault}</option>
                            <option value="16/06/2021">16/06/2021</option>
                            <option value="17/06/2021">17/06/2021</option>
                        </select>
                    </div>
                    <div className="ship-now__bot-day">
                        <label>Thời gian đặt</label>
                        <select id="time">
                            <option value={timeDefault}>{timeDefault}</option>
                            <option value="20:15">20:15</option>
                            <option value="20:30">20:30</option>
                            <option value="20:45">20:45</option>
                            <option value="21:00">21:00</option>
                        </select>
                    </div>
                    <Button onClick={this.props.onClickClose} className="btn-shipnow" text="Hẹn giờ" />
                </div>
            </div>
        )
    }
}

export default ShipNow;