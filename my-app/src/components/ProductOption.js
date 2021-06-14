import React from 'react';
import '../assets/productoption.scss';
import Image from '../common/Image';
import Input from '../common/SearchInput';
import Currency from '../common/Currency';
// import cafe from '../assets/img/d.jpg';

class ProductOption extends React.Component {
    render() {
        const { products, optionClose } = this.props;
        console.log(products);
        return (
            <div className={optionClose ? 'overlay-open  overlay' : 'overlay'} onClick={this.props.onClick}>
                <div className={optionClose ? 'product-option-open  product-option' : 'product-option-close product-option'}>
                    <div className="product-option__top">
                        <Image src={products.image} alt={`ảnh ${products.product_name}`} />
                        <div className="product-option__top-info">
                            <p>{products.product_name}</p>
                            <p>Nhỏ</p>
                        </div>
                        <i className="fa fa-times" onClick={this.props.onClick}></i>
                    </div>

                    <div className="product-option__body">
                        <div className="product-option__body-option">
                            <p>Loại</p>
                            <p>Size-</p>
                            <div className="checkbox-list">
                                {/* {
                                    products.variants.map(item =>
                                    (
                                        <div className="checkbox">
                                            <Input type="radio" name="radio" />
                                            <span>{item.val} (+3.000 ₫)</span>
                                        </div>
                                    ))
                                } */}
                                {/* <div className="checkbox">
                                    <Input type="radio" name="radio" />
                                    <span>Nhỏ</span>
                                </div>
                                <div className="checkbox">
                                    <Input type="radio" name="radio" />
                                    <span>Vừa (+3.000 ₫)</span>
                                </div>
                                <div className="checkbox">
                                    <Input type="radio" name="radio" />
                                    <span>Lớn (+6.000 ₫)</span>
                                </div> */}
                            </div>
                        </div>
                        <form className="main-container__left-product__form product-option__body-note" action="#">
                            <i className="fa fa-pencil"></i>
                            <Input type="text" placeholder="Thêm ghi chú món này" />
                        </form>
                    </div>

                    <div className="product-option__bot">
                        <div className="product-option__bot-left">
                            <i className="fa fa-minus-circle"></i>
                            <span>1</span>
                            <i className="fa fa-plus-circle"></i>
                        </div>
                        <div className="product-option__bot-right">
                            <Currency className="btn addtocart" price="32000" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductOption;