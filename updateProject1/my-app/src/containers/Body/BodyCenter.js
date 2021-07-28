import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import BodyCenterRender from "../../conponents/BodyCenter";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { makeSelectListData } from "../../redux/selectors/data";
function BodyCenter({ listData }) {
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleSearchProductChange = (e) => {
    let filterProduct = [];
    listData.map((item) =>
      item.ListProduct.filter(
        (i) =>
          i.product_name.toLowerCase().includes(e.target.value.toLowerCase()) &&
          filterProduct.push(i)
      )
    );

    //xoá phần từ trùng lặp
    let newFilterProduct = filterProduct.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });
    setSearchText(e.target.value);
    setFilterProduct(newFilterProduct);
  };

  return (
    <BodyCenterRender
      listData={listData}
      handleSearchProductChange={handleSearchProductChange}
      filterProduct={filterProduct}
      searchText={searchText}
    />
  );
}

BodyCenter.propTypes = {
  listData: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  listData: makeSelectListData(),
});

function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(BodyCenter);
