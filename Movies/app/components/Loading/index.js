/**
 *
 * Loading
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`;
const DashedLoading = styled.div`
  position: relative;
  height: 50px;
  @keyframes dashed {
    to {
      transform: rotate(360deg);
    }
  }
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  &:before {
    z-index: 5;
    border: 3px dashed #ff6bcb;
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s linear infinite;
    animation: dashed 1s linear infinite;
  }
  &:after {
    z-index: 10;
    border: 3px solid #ff6bcb;
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s ease infinite;
    animation: dashed 1s ease infinite;
  }
`;
function Loading() {
  return (
    <Spinner>
      <DashedLoading />
    </Spinner>
  );
}

Loading.propTypes = {};

export default Loading;
