import React, { Component } from 'react';

class CategoryItems extends React.Component {
    render() {
        const {categories} = this.props;
        return (
            <li className="main-container__left-navmenu__items"><a href="#">{categories.name}</a></li>
        );
        
    }
}

export default CategoryItems;