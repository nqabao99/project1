import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import HeaderRender from "../../conponents/layout/Header";
import { getListAddress } from "../../redux/actions/address";
import { makeSelectListAddress } from "../../redux/selectors/address";
function Header({ callApiAddress, dataAddress }) {
  const refAddress = useRef();
  const [searchText, setSearchText] = useState("");
  const [closeAddress, setCloseAddress] = useState(false);
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

  return (
    <HeaderRender
      handleSearchAddressChange={handleSearchAddressChange}
      dataAddress={dataAddress}
      searchText={searchText}
      getAddressClick={getAddressClick}
      closeAddress={closeAddress}
      openAddressModal={openAddressModal}
      refAddress={refAddress}
    />
  );
}
Header.propTypes = {
  callApiAddress: PropTypes.func,
  dataAddress: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  dataAddress: makeSelectListAddress(),
});

function mapDispatchToProps(dispatch) {
  return {
    callApiAddress: (address) => dispatch(getListAddress(address)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Header);
