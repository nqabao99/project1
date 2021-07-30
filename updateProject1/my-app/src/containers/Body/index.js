import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import BodyLeft from "../../conponents/BodyLeft";
import BodyRight from "../../conponents/BodyRight";
import Loading from "../../conponents/Loading";
import { getListData } from "../../redux/actions/data";
import { selectProduct } from "../../redux/actions/order";

import {
  makeSelectListData,
  makeSelectStatusFlags,
} from "../../redux/selectors/data";
import { makeSelectListProductOrder } from "../../redux/selectors/order";
import BodyCenter from "./BodyCenter";

const style = {
  padding: "100px 0 440px",
  display: "flex",
};

function Body({
  statusFlags,
  triggerGetListData,
  listData,
  listProductOrder,
  openModalOrder,
}) {
  useEffect(() => {
    triggerGetListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getIdActive = (id) => {
    let check = document.querySelectorAll(".active");

    if (check.length > 0) {
      document.querySelector(".active").classList.remove("active");
    }
    document.getElementById(`at${id}`).classList.add("active");
  };

  const handleOnScrollMenu = () => {
    let arr = document.querySelectorAll(".categoryActive");
    let check = window.scrollY + 80;

    arr.forEach((item) =>
      document.getElementById(item.id).offsetTop <= check &&
      check <
        document.getElementById(item.id).offsetTop +
          document.getElementById(item.id).offsetHeight
        ? getIdActive(item.id)
        : null
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScrollMenu);
    return () => window.removeEventListener("scroll", handleOnScrollMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (statusFlags.isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="container">
        <div className="body" style={style}>
          <BodyLeft listData={listData} />
          <BodyCenter listData={listData} />
          <BodyRight
            listProductOrder={listProductOrder}
            openModalOrder={openModalOrder}
          />
        </div>
      </div>
    );
  }
}

Body.propTypes = {
  statusFlags: PropTypes.object,
  triggerGetListData: PropTypes.func,
  listData: PropTypes.array,
  listProductOrder: PropTypes.array,
  openModalOrder: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  statusFlags: makeSelectStatusFlags(),
  listData: makeSelectListData(),
  listProductOrder: makeSelectListProductOrder(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerGetListData: () => dispatch(getListData()),
    openModalOrder: (product, index) => dispatch(selectProduct(product, index)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Body);
