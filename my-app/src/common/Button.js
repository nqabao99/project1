import React from 'react';


class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className={`btn ${this.props.className}`}>{this.props.text}</button>
        )
    }

}

export default Button;