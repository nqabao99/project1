import React from 'react';
import '../assets/style.scss';

import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';



class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newData: [],
            loading: true
        };
    }

    mergeData = (categories, products) => {
        categories.map((category) => {
            let arr = [];
            products.data.map((product) => {
                if (product.categ_id.includes(category.id)) {
                    arr.push(product);
                }
            })
            category.ListProduct = arr; // Tạo ra key ListProduct trong category để hứng giá trị của listProduct
        })
        return categories;
    }


    componentDidMount() {
        fetch('https://api.thecoffeehouse.com/api/v2/category/web')
            .then((response) => response.json())
            .then(categories => {
                fetch('https://api.thecoffeehouse.com/api/v2/menu')
                    .then((response) => response.json())
                    .then(products => {
                        this.mergeData(categories, products);

                        this.setState({
                            newData: categories,
                            loading: false
                        })
                    });
            });
    }



    render() {
        const { newData, loading } = this.state;
        return (
            <div className="home-page">
                <Header />
                <Main loading={loading} data={newData} />
                <Footer />
            </div>
        )
    }
}

export default HomePage;