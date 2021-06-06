import React, { Component } from 'react';
import '../assets/style.scss';

import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import NoneData from './NoneData';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newData: [],
            loading: true
        };
    }
    componentDidMount() {

        fetch('https://api.thecoffeehouse.com/api/v2/category/web')
            .then((response) => response.json())
            .then(categories => {
                fetch('https://api.thecoffeehouse.com/api/v2/menu')
                    .then((response) => response.json())
                    .then(products => {
                        categories.map((category) => {
                            let arr = [];
                            products.data.map((product) => {
                                if (product.categ_id.includes(category.id)) {
                                    arr.push(product);
                                }
                            })
                            category.ListProduct = arr; // Tạo ra key ListProduct trong category để hứng giá trị của listProduct
                        })

                        this.setState({
                            newData: categories,
                            loading: false
                        })
                    });
            });

    }


    render() {
        const { newData, loading } = this.state;
        if (loading) {
            return (
                <NoneData />
            )
        } else {
            return (
                <div className="home-page">
                    <Header />
                    <Main data={newData} />
                    <Footer />
                </div>
            )
        }
    }
}

export default HomePage;