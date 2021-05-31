import React, { Component } from 'react';

import { Link } from 'react-scroll';

class CategoryItems extends React.Component {
    render() {
        const { categories } = this.props;
        return (
            //<li className="main-container__left-navmenu__items"><a href="#">{categories.name}</a></li>
            <li className="main-container__left-navmenu__items">
                <Link activeClass="active"
                    to={categories._id}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-60}
                    duration={700}
                >
                    {categories.name}
                </Link>
            </li>

        );

    }
}

export default CategoryItems;