/**
 *
 * Input
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const InPut = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 38px;
  background: #353535;
  height: 40px;
  color: #fff;
  border-radius: 25px;
  padding-left: 20px;
`;

function Input(props) {
  return <InPut {...props} />;
}

Input.propTypes = {};

export default Input;
