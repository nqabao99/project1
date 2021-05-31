import React, { Component } from 'react';

import CategoryItems from './category_items';

class LeftContainer extends React.Component {
    render() {
        const {categorys} = this.props;
        return (
            <div className="main-container__left-navmenu">
                <ul className="main-container__left-navmenu__list">
                    {categorys.map(item => (
                        <CategoryItems categoryKey={item._id} categoryName={item.name} />
                    ))}
                </ul>
            </div>
        );
        
    }
}

export default LeftContainer;