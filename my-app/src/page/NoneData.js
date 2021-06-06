import React, { Component } from 'react';
import '../assets/style.scss';
import '../assets/loading.scss';

import Header from '../layout/Header';
import CartContainer from '../components/CartContainer';

class ProductsLoading extends React.Component {
    render() {
        return (
            <li className="category-product__items">
                <div className="category-product__items-img">
                    <div className="ploading imgloading"></div>
                </div>
                <div className="w100">
                    <div className="ploading divloading"></div>
                    <div className="ploading divloading"></div>
                    <div className="ploading divloading"></div>
                </div>
            </li>
        )
    }
}

class NoneData extends React.Component {
    render() {
        return (
            <div className="nonedata">
                <Header />
                <main className="main">
                    <div className="main-container container">
                        <div className="main-container__left">
                            <div className="main-container__left-navmenu">
                                <ul className="main-container__left-navmenu__list">
                                    <li className="ploading liloading"></li>
                                    <li className="ploading liloading"></li>
                                    <li className="ploading liloading"></li>
                                    <li className="ploading liloading"></li>
                                    <li className="ploading liloading"></li>
                                    <li className="ploading liloading"></li>
                                    <li className="ploading liloading"></li>
                                    <li className="ploading liloading"></li>
                                </ul>
                            </div>

                            <div className="main-container__left-product">
                                <div className="ploading search-loading"></div>
                                <div class="category">
                                    <ul class="category-product__list">
                                        <ProductsLoading />
                                        <ProductsLoading />
                                        <ProductsLoading />
                                        <ProductsLoading />
                                        <ProductsLoading />
                                        <ProductsLoading />
                                        <ProductsLoading />
                                        <ProductsLoading />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <CartContainer />
                    </div>
                </main>
            </div>
        )
    }
}

export default NoneData;