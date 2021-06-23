import React from "react";
import "../assets/productoption.scss";
import Image from "../common/Image";
import Input from "../common/SearchInput";
import Currency from "../common/Currency";

class ProductOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productSize: this.props.itemProductOrder.variants[0].val,
            productPrice: this.props.itemProductOrder.variants[0].price,
            amount: 1,
            topping: 0,
            nameTopping: "",
            totalPrice: 0,
        };
    }

    handleProductSize = (item) => {
        this.setState({
            productSize: item.val,
            productPrice: item.price,
        });
    };

    handlePlusAmount = () => {
        this.setState({
            amount: this.state.amount + 1,
        });
    };

    handleMinusAmount = () => {
        if (this.state.amount > 0) {
            this.setState({
                amount: this.state.amount - 1,
            });
        }
    };

    handleProductToping = (item) => {
        let check = document.getElementById(item.code);
        if (check.checked === true) {
            this.setState({
                topping: this.state.topping + item.price,
                nameTopping: this.state.nameTopping.concat(
                    ` ${item.product_name} +`
                ),
            });
        } else {
            this.setState({
                topping: this.state.topping - item.price,
                nameTopping: this.state.nameTopping.replace(
                    ` ${item.product_name} +`,
                    ""
                ),
            });
        }
    };

    getInfoProduct = () => {
        const { itemProductOrder } = this.props;
        let product = {
            product_name: itemProductOrder.product_name,
            image: itemProductOrder.image,
            topping_list: itemProductOrder.topping_list,
            variants: itemProductOrder.variants,

            toppingPrice: this.state.topping,
            productPrice: this.state.productPrice,
            productSize: this.state.productSize,
            nameTopping: this.state.nameTopping,
            amount: this.state.amount,
            note: document.getElementById("note").value,
            totalPrice:
                this.state.amount *
                (this.state.productPrice + this.state.topping),
        };

        this.props.getDataOpitonProduct(product);
    };

    componentDidMount() {
        const { itemProductOrder } = this.props;
        if (
            itemProductOrder.productSize !== undefined &&
            itemProductOrder.amount !== undefined &&
            itemProductOrder.toppingPrice !== undefined &&
            itemProductOrder.productPrice !== undefined &&
            itemProductOrder.nameTopping !== undefined
        ) {
            this.setState({
                productSize: itemProductOrder.productSize,
                amount: itemProductOrder.amount,
                topping: itemProductOrder.toppingPrice,
                productPrice: itemProductOrder.productPrice,
                nameTopping: itemProductOrder.nameTopping,
            });
        }
    }

    render() {
        const { itemProductOrder, optionBoxClose } = this.props;
        const { productSize, productPrice, amount, topping, nameTopping } =
            this.state;

        return (
            <div className="overlay">
                <div className="overlay" onClick={this.props.onClick}></div>
                <div
                    className={
                        optionBoxClose
                            ? "product-option-open  product-option"
                            : "product-option-close product-option"
                    }
                >
                    <div className="product-option__top">
                        <Image
                            src={itemProductOrder.image}
                            alt={`ảnh ${itemProductOrder.product_name}`}
                        />
                        <div className="product-option__top-info">
                            <p>{itemProductOrder.product_name}</p>
                            <p>{productSize}</p>
                            <p>{nameTopping.slice(0, -2)}</p>
                        </div>
                        <i
                            className="fa fa-times"
                            onClick={this.props.onClick}
                        ></i>
                    </div>

                    <div className="product-option__body">
                        <div className="product-option__body-option">
                            <p>Loại</p>
                            <div className="checkbox-container">
                                <p>Size-</p>
                                <div className="checkbox-items">
                                    {itemProductOrder.variants.map((item) => (
                                        <div
                                            className="checkbox"
                                            key={item.code}
                                        >
                                            <Input
                                                checked={
                                                    item.val === productSize
                                                        ? "checked"
                                                        : null
                                                }
                                                type="radio"
                                                name="radio"
                                                onClick={() => {
                                                    this.handleProductSize(
                                                        item
                                                    );
                                                }}
                                            />
                                            <span>
                                                {item.val} (
                                                <Currency
                                                    price={
                                                        item.price -
                                                        itemProductOrder
                                                            .variants[0].price
                                                    }
                                                />
                                                )
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {itemProductOrder.topping_list.length !== 0 ? (
                                <div className="checkbox-container">
                                    <p>Topping-</p>
                                    <div className="checkbox-items">
                                        {itemProductOrder.topping_list.map(
                                            (item) => (
                                                <div
                                                    className="checkbox"
                                                    key={item.code}
                                                >
                                                    <Input
                                                        type="checkbox"
                                                        name="checkbox"
                                                        id={item.code}
                                                        onClick={() => {
                                                            this.handleProductToping(
                                                                item
                                                            );
                                                        }}
                                                        checked={
                                                            nameTopping.includes(
                                                                item.product_name
                                                            )
                                                                ? "checked"
                                                                : null
                                                        }
                                                    />
                                                    <span>
                                                        {item.product_name} (
                                                        <Currency
                                                            price={item.price}
                                                        />
                                                        )
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <form
                            className="main-container__left-product__form product-option__body-note"
                            action="#"
                        >
                            <i className="fa fa-pencil"></i>
                            <Input
                                id="note"
                                type="text"
                                placeholder="Thêm ghi chú món này"
                            />
                        </form>
                    </div>

                    <div className="product-option__bot">
                        <div className="product-option__bot-left">
                            <i
                                className="fa fa-minus-circle"
                                onClick={this.handleMinusAmount}
                            ></i>
                            <span>{amount}</span>
                            <i
                                className="fa fa-plus-circle"
                                onClick={this.handlePlusAmount}
                            ></i>
                        </div>
                        <div
                            className="product-option__bot-right"
                            onClick={this.getInfoProduct}
                        >
                            <Currency
                                className="btn addtocart"
                                price={amount * (productPrice + topping)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductOption;
