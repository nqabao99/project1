import React, { Component } from 'react';


import CategoryContainer from './category_container';
import ProductContainer from './product_container';
import CartContainer from './cart_container';



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
                        <CategoryContainer categorys={categorys} />
                        <ProductContainer categorys={categorys} />
                    </div>
                        <CartContainer />
                </div>
            </main>
        );
    
    }
}

export default Main;