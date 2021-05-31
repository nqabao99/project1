import React, { Component } from 'react';


class Button extends React.Component {
    render(){
        return (
            <button className={`btn ${this.props.className}`}>{this.props.text}</button>
        )
    }

}

export default Button;