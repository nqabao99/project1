import React, { Component } from 'react';

import CategoryItems from './category_items';

class LeftContainer extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div className="main-container__left-navmenu">
                <ul className="main-container__left-navmenu__list">
                    {data.map(item => Object.keys(item.ListProduct).length !== 0 ? (
                        <CategoryItems categoryKey={item._id} categoryName={item.name} />
                    ) : null)}
                </ul>
            </div>
        );
        
    }
}

export default LeftContainer;