import React, { Component } from 'react';

import ProductItems from './ProductItems';
import SearchInput from '../common/SearchInput';

class ProductContainer extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="main-container__left-product">
                <form className="main-container__left-product__form" action="#">
                    <i className="fa fa-search"></i>
                    <SearchInput type="text" placeholder="Tìm kiếm sản phẩm" />
                </form>
                {
                    data.map(item => item.ListProduct.length !== 0 ?
                        (
                            <div className="category" key={item._id} id={item._id}>
                                <p className="category-name">{item.name}</p>
                                <ProductItems products={item.ListProduct} />
                            </div>
                        ) : null)
                }
            </div>
        );

    }
}

export default ProductContainer;