import React, { Component } from 'react';

import ProductItems from './product_items';
import SearchInput from './search_input';

class LeftContainer extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div className="main-container__left-product">
                <form className="main-container__left-product__form" action="#">
                    <i className="fa fa-search"></i>
                    <SearchInput type="text"  placeholder="Tìm kiếm sản phẩm"/>
                </form>
                {
                    data.map(item => Object.keys(item.ListProduct).length !== 0 ? 
                    (
                        <div className="category" key={item._id}>
                            <p className="category-name">{item.name}</p> 
                            <ProductItems products={item.ListProduct}  />
                        </div>  
                    ) : null )
                }
            </div>
        );
        
    }
}

export default LeftContainer;