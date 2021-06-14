import React from 'react';
import '../assets/productoption.scss';
import Image from '../common/Image';
import Input from '../common/SearchInput';
import cafe from '../assets/img/d.jpg';

class ProductOption extends React.Component {
    render() {
        return (
            <div className="overlay">
                <div className="product-option">
                    <div className="product-option__top">
                        <Image src={cafe} />
                        <div className="product-option__top-info">
                            <p>Cà Phê Sữa Đá</p>
                            <p>Nhỏ</p>
                        </div>
                    </div>

                    <div className="product-option__body">
                        <div className="product-option__body-option">
                            <p>Loại</p>
                            <p>Size-</p>
                            <div className="checkbox-list">
                                <div className="checkbox">
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
                                </div>
                            </div>
                        </div>
                        <form className="main-container__left-product__form product-option__body-note" action="#">
                            <i class="fa fa-pencil"></i>
                            <Input type="text" placeholder="Thêm ghi chú món này" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductOption;