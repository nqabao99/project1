import React, { Component } from 'react';


class Currency extends React.Component {
    render() {
        return(
            <p className={this.props.className}>{this.props.price} <span>đ</span></p>
        )
    }
}

export default Currency;