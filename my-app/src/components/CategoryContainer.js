import React from 'react';

import CategoryItems from './CategoryItems';

class CategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: ""
        };
    }

    handleOnClick = (id) => {
        this.setState({ active: id });
    };
    
    render() {        
        const { data } = this.props;    
        console.log(this.state.active);
        return (
            <div className="main-container__left-navmenu">
                <ul className="main-container__left-navmenu__list">
                    {data.map(item => item.ListProduct.length !== 0 ? (
                        <CategoryItems onClick={() => this.handleOnClick(item._id)} className={this.state.active === item._id ? 'active' : ''} categories={item} key={item._id} />
                    ) : null)}
                </ul>
            </div>
        );

    }
}

export default CategoryContainer;