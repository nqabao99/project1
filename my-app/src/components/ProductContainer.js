import React from 'react';

import ProductItems from './ProductItems';
import SearchInput from '../common/SearchInput';



class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            bao: false
        };
    }


    handleSearch = e => {
        this.setState({ search: e.target.value })
    }

    

    render() {
        const { data } = this.props;


        return (
            <div className="main-container__left-product">
                <form className="main-container__left-product__form" action="#">
                    <i className="fa fa-search"></i>
                    <SearchInput type="text" placeholder="Tìm kiếm sản phẩm" onChange={this.handleSearch} />
                </form>
                {
                    data.map(item =>
                    (
                        <ProductItems key={item._id} categories={item} search={this.state.search} />
                    ))
                }
            </div>
        );

    }
}

export default ProductContainer;