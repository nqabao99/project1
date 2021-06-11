import React from 'react';

import CategoryItems from './CategoryItems';

class CategoryContainer extends React.Component {



    render() {
        const { data } = this.props;

        return (
            <div className="main-container__left-navmenu">
                <ul className="main-container__left-navmenu__list">
                    {data.map(item => item.ListProduct.length !== 0 ? (
                        <CategoryItems data={this.props.data[0]} categories={item} key={item._id} />
                    ) : null)}
                </ul>
            </div>
        );

    }
}

export default CategoryContainer;