import React from "react";
import Currency from "../../conponents/common/Currency";
import Image from "../../conponents/common/Image";
import cafe from "../../assets/img/cafe.jpeg";
function ProductItem({ product, handleOpenModalOrder }) {
  return (
    <li onClick={() => handleOpenModalOrder(product)}>
      <div className="product-img">
        <Image
          src={product.image}
          alt={product.product_name}
          width="80"
          height="80"
        />
      </div>
      <div className="product-info">
        <h5 className="product-info__title">{product.product_name}</h5>
        <p className="product-info__desc">{product.description}</p>
        <Currency className="product-info__currencys" price={product.price} />
      </div>
      <i className="fal fa-plus-circle"></i>
    </li>
  );
}

export default ProductItem;
