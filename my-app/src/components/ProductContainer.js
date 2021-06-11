import React from 'react';
import SearchInput from '../common/SearchInput';
import ProductItems from './ProductItems';
import Image from '../common/Image';
import src_noneproduct from '../assets/img/noneproduct.png';



class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
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
                this.handleActive(item.id) : null
        )

    }

    handleActive = (data) => {
        this.props.getatId(data);
    }


    render() {
        const { data } = this.props;
        window.addEventListener("scroll", this.handleOnScroll)

        return (
            <div id="bao" className="main-container__left-product">
                <form className="main-container__left-product__form" action="#">
                    <i className="fa fa-search"></i>
                    <SearchInput type="text" placeholder="Tìm kiếm sản phẩm" onChange={this.handleSearch} />
                </form>
                {
                    data.map(item => item.ListProduct.length !== 0 ?
                        (
                            <ProductItems className={`bao${item.id}`} key={item._id} categories={item} search={this.state.search} />
                        ) : null)
                }
                <div className="noneProduct">
                    <div>
                        <Image src={src_noneproduct} alt="none product" />
                        <p>Rất tiếc chúng tôi không tìm thấy sản phẩm!</p>
                    </div>
                </div>
            </div>
        );

    }
}

export default ProductContainer;