import React from 'react';
import SearchInput from '../common/SearchInput';
import ProductItems from './ProductItems';
import Image from '../common/Image';
import src_noneproduct from '../assets/img/noneproduct.png';

import ProductOption from '../components/ProductOption';

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            optionClose: false,
            infoProduct: null
        };
    }





    handleSearch = e => {
        this.setState({ search: e.target.value })
    }

    handleOnScroll = (data) => {
        let arr = document.querySelectorAll(".category");
        let check = window.scrollY - 35;

        arr.forEach(item =>
            document.getElementById(item.id).offsetTop <= check && check < document.getElementById(item.id).offsetTop + document.getElementById(item.id).offsetHeight ?
                this.getId(item.id) : null
        )
    }

    getId = (id) => {
        this.props.getatId(id);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleOnScroll)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleOnScroll)
    }

    handleClickOpen = (product) => {
        this.setState({
            optionClose: true,
            infoProduct: product
        })
    }

    handleClickClose = () => {
        this.setState({
            optionClose: false
        })
    }


    render() {
        const { data } = this.props;
        const { infoProduct } = this.state;
        // console.log(data);
        return (
            <div className="main-container__left-product">
                <form className="main-container__left-product__form" action="#">
                    <i className="fa fa-search"></i>
                    <SearchInput type="text" placeholder="Tìm kiếm sản phẩm" onChange={this.handleSearch} />
                </form>
                {
                    data.map(item => item.ListProduct.length !== 0 ?
                        (
                            <ProductItems key={item._id} categories={item} search={this.state.search} handleClickOpen={this.handleClickOpen} />
                        ) : null)
                }

                <div className="noneProduct">
                    <div>
                        <Image src={src_noneproduct} alt="none product" />
                        <p>Rất tiếc chúng tôi không tìm thấy sản phẩm!</p>
                    </div>
                </div>
                {infoProduct !== null ? <ProductOption infoProduct={infoProduct} optionClose={this.state.optionClose} onClick={this.handleClickClose} /> : null}

            </div>
        );

    }
}

export default ProductContainer;