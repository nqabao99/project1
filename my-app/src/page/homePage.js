import React, { Component } from 'react';
import '../assets/style.scss';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';


class HomePage extends React.Component {
    render() {
        return(
            <div className="home-page">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default HomePage;