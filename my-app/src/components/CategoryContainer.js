import React from 'react';

import CategoryItems from './CategoryItems';

class CategoryContainer extends React.Component {
    handleClick = (e, index) =>{
        if(index === 0){
            window.scrollTo(0, 60 );
        }else{
            // window.scrollTo(0, 102 * 20 );

        }
        
    }
    render() {
        const { data } = this.props;
        return (
            <div className="main-container__left-navmenu">
                <ul className="main-container__left-navmenu__list">
                    {data.map((item, index) => item.ListProduct.length !== 0 ? (
                        <CategoryItems onClick={()=>{this.handleClick(item, index)}} categories={item} key={item._id} />
                    ) : null)}
                </ul>
            </div>
        );

    }
}

export default CategoryContainer;