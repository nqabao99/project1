import React, { Component } from 'react';


class SearchInput extends React.Component {
    render() {
        return(
            <input type={this.props.type} placeholder={this.props.placeholder} />
        )
    }
}

export default SearchInput;