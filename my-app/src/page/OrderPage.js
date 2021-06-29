import React from "react";
import "../assets/style.scss";

import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

import Login from "../layout/Login/index";
import Registrations from "../layout/Registrations";

import { BrowserRouter as Router, Route } from "react-router-dom";

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

    componentDidMount() {
        let listOrder = JSON.parse(localStorage.getItem("listOrder"));
        let totalAmount = 0;
        if (listOrder && listOrder.length > 0) {
            listOrder.map((item) => (totalAmount += item.amount));
        }
        this.setState({
            amount: totalAmount,
        });
    }

    render() {
        return (
            <Router>
                <div className="home-page">
                    <Header amount={this.state.amount} />

                    <Route
                        path="/"
                        exact
                        render={(props) => <Main getAmount={this.getAmount} />}
                    />

                    <Route path="/login" component={Login} />
                    <Route path="/registrations" component={Registrations} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default HomePage;
