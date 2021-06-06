import React, { Component } from 'react';


class Image extends React.Component {
    render() {
        return(
            <img className={this.props.className} src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height}/>
        )
    }
}

export default Image;