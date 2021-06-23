import React from "react";
import PlacehoderLoading from "../common/PlacehoderLoading";
import CartContainer from "../components/CartContainer";
import CategoryContainer from "../components/CategoryContainer";
import ProductContainer from "../components/ProductContainer";
import NoneData from "../page/NoneData";

import ProductOption from "../components/ProductOption";
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newData: [],
            loading: true,
            active: null, //new
            infoOptionProduct: [],
            optionBoxClose: false,
            listProductOrder: [],
            indexProductOrder: -1,
        };
    }

    mergeData = (categories, products) => {
        categories.map((category) => {
            let arr = [];
            products.data.map((product) => {
                if (product.categ_id.includes(category.id)) {
                    arr.push(product);
                }
                return arr;
            });
            category.ListProduct = arr; // Tạo ra key ListProduct trong category để hứng giá trị của listProduct
            return category;
        });
        return categories;
    };

    componentDidMount() {
        fetch("https://api.thecoffeehouse.com/api/v2/category/web")
            .then((response) => response.json())
            .then((categories) => {
                fetch("https://api.thecoffeehouse.com/api/v2/menu")
                    .then((response) => response.json())
                    .then((products) => {
                        this.mergeData(categories, products);
                        let copyData = [];
                        categories.map(
                            (item) =>
                                item.ListProduct.length > 0 &&
                                copyData.push(item)
                        );

                        this.setState({
                            newData: copyData,
                            loading: false,
                            active: categories[0]._id,
                        });
                    });
            });
    }

    getIdActive = (id) => {
        let check = document.querySelectorAll(".active");

        if (check.length > 0) {
            document.querySelector(".active").classList.remove("active");
        }
        document.getElementById(`at${id}`).classList.add("active");
    };

    handleClickCloseOptionBox = () => {
        this.setState({
            optionBoxClose: false,
        });
        setTimeout(() => {
            this.setState({
                infoOptionProduct: [],
            });
        }, 300);
    };

    getDataOpitonProduct = (data) => {
        let { listProductOrder } = this.state;
        this.setState({
            optionBoxClose: false,
        });

        if (listProductOrder.length === 0) {
            this.setState({
                listProductOrder: [...listProductOrder, data].filter(
                    (item) => item.amount > 0
                ),
            });
        } else {
            let flag = 1;
            listProductOrder.map((item) =>
                item.product_name === data.product_name &&
                item.productSize === data.productSize &&
                item.nameTopping === data.nameTopping &&
                item.note === data.note
                    ? ((item.amount += data.amount),
                      (item.totalPrice += data.totalPrice),
                      (flag *= -1))
                    : (flag *= 1)
            );
            if (this.state.indexProductOrder !== -1) {
                let editItemProductOrder = this.state.listProductOrder.fill(
                    "",
                    this.state.indexProductOrder,
                    this.state.indexProductOrder + 1
                );
                this.setState({
                    listProductOrder: editItemProductOrder.filter(
                        (item) => item.amount > 0
                    ),
                });
            }
            if (flag === 1) {
                this.setState({
                    listProductOrder: [...listProductOrder, data].filter(
                        (item) => item.amount > 0
                    ),
                });
            }
        }

        setTimeout(() => {
            this.setState({
                infoOptionProduct: [],
                indexProductOrder: -1,
            });
        }, 300);
    };

    handleClickOpenOptionBox = (data) => {
        let products = {
            product_name: data.product_name,
            image: data.image,
            topping_list: data.topping_list,
            variants: data.variants,
        };

        this.setState({
            optionBoxClose: true,
            infoOptionProduct: products,
            indexProductOrder: -1,
        });
    };

    editOptionProduct = (data, index) => {
        this.setState({
            optionBoxClose: true,
            infoOptionProduct: data,
            indexProductOrder: index,
        });
    };

    render() {
        const {
            active,
            newData,
            loading,
            infoOptionProduct,
            listProductOrder,
            optionBoxClose,
        } = this.state;

        // console.log(listProductOrder);

        if (loading) {
            return <PlacehoderLoading />;
        } else if (newData.length === 0) {
            return <NoneData />;
        } else {
            return (
                <main className="main">
                    <div className="main-container container">
                        <div className="main-container__left">
                            <CategoryContainer active={active} data={newData} />
                            <ProductContainer
                                getIdActive={this.getIdActive}
                                data={newData}
                                handleClickOpenOptionBox={
                                    this.handleClickOpenOptionBox
                                }
                            />
                        </div>
                        <CartContainer
                            listProductOrder={listProductOrder}
                            editOptionProduct={this.editOptionProduct}
                        />
                    </div>
                    {infoOptionProduct.length !== 0 ? (
                        <ProductOption
                            infoOptionProduct={infoOptionProduct}
                            optionBoxClose={optionBoxClose}
                            onClick={this.handleClickCloseOptionBox}
                            getDataOpitonProduct={this.getDataOpitonProduct}
                        />
                    ) : null}
                </main>
            );
        }
    }
}

export default Main;
