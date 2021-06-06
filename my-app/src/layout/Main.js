import React, { Component } from 'react';


import CategoryContainer from '../components/CategoryContainer';
import ProductContainer from '../components/ProductContainer';
import CartContainer from '../components/CartContainer';



class Main extends React.Component {


    render() {

        let { data } = this.props;



        return (
            <main className="main">
                <div className="main-container container">
                    <div className="main-container__left">
                        <CategoryContainer data={data} />
                        <ProductContainer data={data} />
                    </div>
                    <CartContainer />
                </div>
            </main>
        );

    }
}

export default Main;