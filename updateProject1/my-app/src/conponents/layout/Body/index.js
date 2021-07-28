import React from "react";
import BodyCenter from "../../BodyCenter";
import BodyLeft from "../../BodyLeft";
import BodyRight from "../../BodyRight";
import "./styleBody.scss";

function Body(props) {
  return (
    <>
      <BodyLeft />
      <BodyCenter />
      <BodyRight />
    </>
  );
}

export default Body;
