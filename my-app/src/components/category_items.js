import React, { Component } from 'react';

class CategoryItems extends React.Component {
    render() {
        return (
            <li className="main-container__left-navmenu__items" key={this.props.categoryKey}><a href="#">{this.props.categoryName}</a></li>
        );
        
    }
}

export default CategoryItems;