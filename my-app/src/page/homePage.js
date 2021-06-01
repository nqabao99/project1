import React, { Component } from 'react';
import '../assets/style.scss';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
            loadCatrgory: false,
            loadProduct: false
        };
    }
    componentDidMount() {
        fetch('https://api.thecoffeehouse.com/api/v2/category/web')
            .then((response) => response.json())
            .then(result => {
                this.setState({ categories: result,  loadCatrgory: true});
            });

        fetch('https://api.thecoffeehouse.com/api/v2/menu')
            .then((response) => response.json())
            .then(result => {
                this.setState({ products: result.data, loadProduct: true });
            });
    }


    render() {
        const {loadCatrgory, loadProduct, categories, products } = this.state;

        categories.map((category) => {
            let arr = [];
            products.map((product) => {
                if (product.categ_id.includes(category.id)) {
                    arr.push(product);
                }
            })

            category.ListProduct = arr; // Tạo ra key ListProduct trong category để hứng giá trị của listProduct

        })
        let data = categories;

        console.log(data);
       

        if (!loadCatrgory && !loadProduct) {
            return (
                <div className="loading">
                    <img  src="https://dalatfairytaleland.com/wp-content/themes/123website/images/loading.gif"/>
                </div>
                )
        } else {
            return(   
                <div className="home-page">
                    <Header />
                    <Main data={data} />
                    <Footer />
                </div>
            )
        }
    }
}

export default HomePage;