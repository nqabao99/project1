import React from "react";

import Button from "../common/Button";
import SearchInput from "../common/SearchInput";
import Currency from "../common/Currency";
import ItemProductOrder from "../common/ItemProductOrder";

class Cart extends React.Component {
    render() {
        const { listProductOrder, listOrderClickOpenOptionBox } = this.props;
        let totalPrice = 0;
        let totalAmount = 0;
        if (listProductOrder !== undefined) {
            listProductOrder.map(item => totalAmount += item.amount);
            listProductOrder.map(item => totalPrice += item.totalPrice)
        }

        return (
            <div className="main-container__right">
                <div className="main-cart">
                    <div className="main-cart__top">
                        <Button text="Xem giỏ hàng" />
                    </div>
                    {listProductOrder !== undefined &&
                        listProductOrder.length !== 0 && (
                            <div className="main-cart__listOrder">
                                {listProductOrder.map((item, index) => (
                                    <ItemProductOrder
                                        key={index}
                                        index={index}
                                        infoProduct={item}
                                        listOrderClickOpenOptionBox={
                                            listOrderClickOpenOptionBox
                                        }
                                    />
                                ))}
                            </div>
                        )}

                    <div className="main-cart__mid">
                        <div className="total">
                            <p className="color-33">Cộng món({`${totalAmount} món`})</p>
                            <Currency className="color-33" price={totalPrice} />
                        </div>
                        <div className="total">
                            <p className="color-33">Vận chuyển</p>
                            <Currency className="color-33" price="10000" />
                        </div>
                        <form className="main-cart__mid-form" action="#">
                            <SearchInput
                                type="text"
                                placeholder="Nhập mã ưu đãi tại đây"
                            />
                            <Button className="btn-apply" text="Áp dụng" />
                        </form>
                    </div>
                    <div className="main-cart__bot">
                        <div className="total">
                            <p>Tổng cộng</p>
                            <Currency className="totalPrice" price={totalPrice + 10000} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
