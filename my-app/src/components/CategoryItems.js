import React from 'react';


class CategoryItems extends React.Component {
    render() {
        const { data, categories } = this.props;
        console.log(data);
        return (
            <li id={`at${categories._id}`} className={data._id === categories._id ? 'active main-container__left-navmenu__items' : 'main-container__left-navmenu__items'}><a href={`#${categories._id}`}>{categories.name}</a></li>
        );
    }
}

export default CategoryItems;