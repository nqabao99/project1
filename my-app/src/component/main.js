import React, { Component } from 'react';

import Cart from './main_cart';
import CategoryItems from './main_categoryItems';
import Product from './main_product';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categorys: []
        };
    }
    componentDidMount() {
        fetch('https://api.thecoffeehouse.com/api/v2/category/web')
        .then((response) => response.json())
        .then(result => {
            this.setState({ categorys: result });
        });
    }

    render() {
        const { categorys } = this.state;
        
        return(
            <main className="main">
                <div className="main-container container">
                    <div className="main-container__left">
                        <div className="main-container__left-navmenu">
                            <ul className="main-container__left-navmenu__list">
                                {categorys.map(item => (
                                    <CategoryItems categoryKey={item._id} categoryName={item.name} />
                                ))}
                            </ul>
                        </div>
                        <div className="main-container__left-product">
                            <form className="main-container__left-product__form" action="#">
                                <i className="fa fa-search"></i>
                                <input type="text" placeholder="Tìm kiếm sản phẩm" />
                            </form>
                            {
                                categorys.map(item => (
                                    <div className="category" key={item._id}>
                                        <p className="category-name">{item.name}</p> 
                                        <Product categoryID={item.id} />
                                    </div>  
                                ))
                            }
                        </div>
                    </div>
                    <Cart />
                </div>
            </main>
        );
    
    }
}

export default Main;