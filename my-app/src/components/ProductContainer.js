import React, { Component } from 'react';

import ProductItems from './ProductItems';
import SearchInput from '../common/SearchInput';



class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }



    Search = e =>{
        this.setState({search: e.target.value})
    }

    render() {
        const { data } = this.props;
        return (
            <div className="main-container__left-product">
                <form className="main-container__left-product__form" action="#">
                    <i className="fa fa-search"></i>
                    <SearchInput type="text" placeholder="Tìm kiếm sản phẩm" onChange={this.Search} />
                </form>
                {
                    data.map(item => item.ListProduct.length !== 0 ?
                        (
                            <ProductItems key={item._id} categories={item} search={this.state.search} />
                        ) : null)
                }
            </div>
        );

    }
}

export default ProductContainer;