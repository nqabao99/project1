import React, { Component } from 'react';

import ProductItems from './product_items';
import SearchInput from './search_input';

class LeftContainer extends React.Component {
    render() {
        const {categorys} = this.props;
        return (
            <div className="main-container__left-product">
                <form className="main-container__left-product__form" action="#">
                    <i className="fa fa-search"></i>
                    <SearchInput type="text"  placeholder="Tìm kiếm sản phẩm"/>
                </form>
                {
                    categorys.map(item => (
                        <div className="category" key={item._id}>
                            <p className="category-name">{item.name}</p> 
                            <ProductItems categoryID={item.id} />
                        </div>  
                    ))
                }
            </div>
        );
        
    }
}

export default LeftContainer;