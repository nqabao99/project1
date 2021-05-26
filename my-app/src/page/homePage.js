import React, { Component } from 'react';
import '../assets/style.scss';

import Header from '../component/header';
import Main from '../component/main';
import Footer from '../component/footer';


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