import React, { Component } from 'react';


import CategoryContainer from '../components/CategoryContainer';
import ProductContainer from '../components/ProductContainer';
import CartContainer from '../components/CartContainer';

import NoneData from '../page/NoneData'
import PlacehoderLoading from '../common/PlacehoderLoading'



class Main extends React.Component {
    render() {
        let {loading,  data } = this.props;
        if (loading) {
            return (
                <PlacehoderLoading />
            )
        }else if(data.length === 0){
            return (
                <NoneData />
            )
        }else{
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
}

export default Main;