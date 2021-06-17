import React from 'react';
import '../assets/shipnow.scss';
import Button from '../common/Button';

class ShipNow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            date1: '',
            date2: '',
            date3: '',
            bao: false
        }
    }

    formatDate = (d) => {
        let today = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
        return today;
    }

    componentDidMount() {
        let day = new Date();
        let nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 1);
        let nextTwoDay = new Date(day);
        nextTwoDay.setDate(day.getDate() + 2);
        this.setState({
            date1: this.formatDate(day),
            date2: this.formatDate(nextDay),
            date3: this.formatDate(nextTwoDay)
        })
    }
    hanldeChange = (e) => {
        if (e.target.value !== this.state.date1) {
            this.setState({
                bao: true
            })
        } else {
            this.setState({
                bao: false
            })
        }

    }
    render() {
        const { open, timeOrder } = this.props;
        const { date, date1, date2, date3, bao } = this.state;
        console.log(bao);
        return (
            <div className={open ? 'open ship-now' : 'ship-now'}>
                <div className="ship-now__top">
                    <div className="ship-now__top-text" onClick={this.props.handleShipNow}>
                        <i className="fa fa-search"></i>
                        <span>Giao ngay</span>
                    </div>
                    <div className="ship-now__top-text" onClick={this.props.handleTimeOrder}>
                        <i className="fa fa-search"></i>
                        <span>Thời gian đặt hàng</span>
                    </div>
                </div>
                <div className={timeOrder ? 'open ship-now__bot' : 'ship-now__bot'}>
                    <div className="ship-now__bot-day">
                        <label>Ngày đặt</label>
                        <select id="date" onChange={this.hanldeChange}>
                            <option value={date1}>Hôm nay</option>
                            <option value={date2}>{date2}</option>
                            <option value={date3}>{date3}</option>
                        </select>
                    </div>
                    <div className="ship-now__bot-day">
                        <label>Thời gian đặt</label>
                        <select id="time">
                            {bao ? '' :
                                <option selected value="default">Trong 15-30 phút</option>
                            }
                            <option value="20:15">20:15</option>
                            <option value="20:30">20:30</option>
                            <option value="20:45">20:45</option>
                            <option value="21:00">21:00</option>
                        </select>
                    </div>
                    <Button onClick={this.props.handleTimer} className="btn-shipnow" text="Hẹn giờ" />
                </div>
            </div>
        )
    }
}

export default ShipNow;