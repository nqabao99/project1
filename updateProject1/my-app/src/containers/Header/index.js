import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import HeaderRender from "../../conponents/layout/Header";
import { getListAddress } from "../../redux/actions/address";
import { makeSelectListAddress } from "../../redux/selectors/address";
import { makeSelectListProductOrder } from "../../redux/selectors/order";
function Header({ callApiAddress, dataAddress, listProductOrder }) {
  const refAddress = useRef();

  const [searchText, setSearchText] = useState("");
  const [closeAddress, setCloseAddress] = useState(false);
  const [openShipNow, setOpenShipNow] = useState(false);
  const handleSearchAddressChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 3) {
      callApiAddress(e.target.value);
    }
  };

  const getAddressClick = (data) => {
    setSearchText(data);
    setCloseAddress(true);
  };

  const openAddressModal = () => {
    setCloseAddress(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeAddressModal);
    return () => document.removeEventListener("mousedown", closeAddressModal);
  }, []);

  const closeAddressModal = (event) => {
    if (!refAddress.current?.contains(event.target)) {
      setCloseAddress(true);
    }
  };

  const handleCloseShipNow = () => {
    setOpenShipNow(false);
  };

  const handleOpenShipNow = () => {
    setOpenShipNow(!openShipNow);
  };

  return (
    <HeaderRender
      handleSearchAddressChange={handleSearchAddressChange}
      dataAddress={dataAddress}
      searchText={searchText}
      getAddressClick={getAddressClick}
      closeAddress={closeAddress}
      openAddressModal={openAddressModal}
      refAddress={refAddress}
      listProductOrder={listProductOrder}
      openShipNow={openShipNow}
      handleOpenShipNow={handleOpenShipNow}
      handleCloseShipNow={handleCloseShipNow}
    />
  );
}
Header.propTypes = {
  callApiAddress: PropTypes.func,
  dataAddress: PropTypes.array,
  listProductOrder: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  dataAddress: makeSelectListAddress(),
  listProductOrder: makeSelectListProductOrder(),
});

function mapDispatchToProps(dispatch) {
  return {
    callApiAddress: (address) => dispatch(getListAddress(address)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Header);
