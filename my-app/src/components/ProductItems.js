import React, { Component } from 'react';
import Currency from '../common/Currency';
import Image from '../common/Image';
import ButtonAdd from '../common/ButtonAdd';


class Product extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <ul className="category-product__list">
                {
                    products.map(item =>
                    (
                        <li className="category-product__items" key={item._id}>
                            <Image className="category-product__items-img" src={item.image} alt={`ảnh ${item.product_name}`} />
                            <div className="category-product__items-info">
                                <h5 className="category-product__items-name">{item.product_name}</h5>
                                <p className="category-product__items-desc">{item.description}</p>
                                <Currency className="category-product__items-price" price={item.price} />
                            </div>
                            <ButtonAdd />
                        </li>
                    ))
                }

            </ul>
        );
    }
}

export default Product;