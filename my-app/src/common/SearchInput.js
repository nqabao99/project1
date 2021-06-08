import React, { Component } from 'react';


class SearchInput extends React.Component {
    render() {
        return(
            <input type={this.props.type} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} onSubmit={this.props.onSubmit}/>
        )
    }
}

export default SearchInput;