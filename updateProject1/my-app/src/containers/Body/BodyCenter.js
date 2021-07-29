import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import BodyCenterRender from "../../conponents/BodyCenter";
import { selectProduct } from "../../redux/actions/order";
import { makeSelectListData } from "../../redux/selectors/data";
import { makeSelectStatusFlags } from "../../redux/selectors/order";
import ModalOrder from "./ModalOrder";
function BodyCenter({ listData, statusFlag, OpenModalOrder }) {
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

  const handleOpenModalOrder = (product) => {
    OpenModalOrder(product);
  };

  return (
    <>
      <BodyCenterRender
        listData={listData}
        handleSearchProductChange={handleSearchProductChange}
        filterProduct={filterProduct}
        searchText={searchText}
        handleOpenModalOrder={handleOpenModalOrder}
      />
      {statusFlag.openModal && <ModalOrder />}
    </>
  );
}

BodyCenter.propTypes = {
  listData: PropTypes.array,
  statusFlag: PropTypes.object,
  OpenModalOrder: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  listData: makeSelectListData(),
  statusFlag: makeSelectStatusFlags(),
});

function mapDispatchToProps(dispatch) {
  return {
    OpenModalOrder: (product) => dispatch(selectProduct(product)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(BodyCenter);
