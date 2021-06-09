import React from 'react';


class CategoryItems extends React.Component {
    render() {
        const { categories } = this.props;
        console.log(this.props.categories.ListProduct.length);
        return (
            <li className="main-container__left-navmenu__items" onClick={this.props.onClick} ><a href="/#">{categories.name}</a></li>
        );
    }
}

export default CategoryItems;