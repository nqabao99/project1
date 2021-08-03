/**
 *
 * Button
 *
 */

// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: #16d47b;
  width: 100%;
  min-height: 50px;
  margin: 40px 0 80px;
  padding: 15px 0;
  text-align: center;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
