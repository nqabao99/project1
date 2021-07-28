import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import BodyLeft from "../../conponents/BodyLeft";
import BodyRight from "../../conponents/BodyRight";
import Loading from "../../conponents/Loading";
import { getListData } from "../../redux/actions/data";
import {
  makeSelectListData,
  makeSelectStatusFlags,
} from "../../redux/selectors/data";
import BodyCenter from "./BodyCenter";
import "./styleBody.scss";

function Body({ statusFlags, triggerGetListData, listData }) {
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
      <main>
        <div className="container">
          <div className="body">
            <BodyLeft listData={listData} />
            <BodyCenter listData={listData} />
            <BodyRight />
          </div>
        </div>
      </main>
    );
  }
}

Body.propTypes = {
  statusFlags: PropTypes.object,
  triggerGetListData: PropTypes.func,
  listData: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  statusFlags: makeSelectStatusFlags(),
  listData: makeSelectListData(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerGetListData: () => dispatch(getListData()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Body);
