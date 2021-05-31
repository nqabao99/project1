import React, { Component } from 'react';


import CategoryContainer from './category_container';
import ProductContainer from './product_container';
import CartContainer from './cart_container';



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: []
        };
    }
    componentDidMount() {
        fetch('https://api.thecoffeehouse.com/api/v2/category/web')
        .then((response) => response.json())
        .then(result => {
            this.setState({ categories: result });
        });

        fetch('https://api.thecoffeehouse.com/api/v2/menu')
        .then((response) => response.json())
        .then(result => {
            this.setState({ products: result.data });
        });

        
    }

    render() {
        const { categories, products } = this.state;
        categories.map((category)=>{
            let arr = [];
            products.map((product)=>{
                if(product.categ_id.includes(category.id)){
                    arr.push(product);
                }
            })  
            category.ListProduct = arr; // Tạo ra key ListProduct trong category để hứng giá trị của listProduct
            
        })
        let data = categories;
         
        console.log(data);
        return(
            <main className="main">
                <div className="main-container container">
                    <div className="main-container__left">
                        <CategoryContainer data={data} />
                        <ProductContainer data={data}  />
                    </div>
                        <CartContainer/>
                </div>
            </main>
        );
    
    }
}

export default Main;