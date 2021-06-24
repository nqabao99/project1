import React from "react";
import "../assets/style.scss";

import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        };
    }
    getAmount = (data) => {
        let totalAmount = 0;
        if (data !== undefined) {
            data.map((item) => (totalAmount += item.amount));
        }
        this.setState({
            amount: totalAmount,
        });
    };

    render() {
        return (
            <div className="home-page">
                <Header amount={this.state.amount} />
                <Main getAmount={this.getAmount} />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
