import React from "react";
import "./styleBodyCenter.scss";
import Input from "../../conponents/common/Input";
import ProductItem from "./ProductItem";
import NoneProduct from "../NoneProduct";
function BodyCenter({
  listData,
  handleSearchProductChange,
  filterProduct,
  searchText,
}) {
  return (
    <div className="body-center">
      <Input
        className="search-menu"
        type="text"
        placeholder="Tìm kiếm sản phẩm"
        onChange={handleSearchProductChange}
      />
      {searchText.length === 0 ? (
        listData.map((item) => (
          <div
            className="category categoryActive"
            id={item._id}
            key={`i${item._id}`}
          >
            <h4 className="category-title">{item.description}</h4>
            <ul className="product">
              {item.ListProduct.map((i) => (
                <ProductItem product={i} key={i._id} />
              ))}
            </ul>
          </div>
        ))
      ) : filterProduct.length !== 0 ? (
        <div className="category">
          <ul className="product">
            {filterProduct.map((i) => (
              <ProductItem product={i} key={i._id} />
            ))}
          </ul>
        </div>
      ) : (
        <NoneProduct />
      )}
    </div>
  );
}

export default BodyCenter;
