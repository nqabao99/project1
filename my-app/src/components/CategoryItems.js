import React from 'react';


class CategoryItems extends React.Component {
    render() {
        const { categories, bao } = this.props;
        return (
            <li className={`main-container__left-navmenu__items ${this.props.className}`}><a  onClick={this.props.onClick} href={`#${categories._id}`}>{categories.name}</a></li>
        );
    }
}

export default CategoryItems;