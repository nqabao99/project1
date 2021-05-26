import React, { Component } from 'react';


class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    
    componentDidMount() {
        fetch('https://api.thecoffeehouse.com/api/v2/menu')
        .then((response) => response.json())
        .then(result => {
            this.setState({ products: result.data });
        });
    }

    render() {
        const {products } = this.state;
        return(
            <ul className="category-product__list">
                {
                    products.map(item =>  item.categ_id.includes(this.props.categoryID) ? 
                    (
                        <li className="category-product__items" key={item._id}>
                            <img className="category-product__items-img" src={item.image} alt={ 'ảnh ' + item.product_name} />
                            <div className="category-product__items-info">
                                <h5 className="category-product__items-name">{item.product_name}</h5>
                                <p className="category-product__items-desc">{item.description}</p>
                                <p className="category-product__items-price">{item.price} <span>đ</span></p>
                            </div>
                            <i className="fa fa-plus-circle"></i>
                        </li>
                    ) : null )                        
                }
                
            </ul>
        );
    }
}

export default Product;