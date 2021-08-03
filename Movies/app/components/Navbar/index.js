/**
 *
 * Navbar
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';
import P from '../P';
const NavBar = styled.div`
  background: #353535;
  color: #fff;
  padding: 10px 0;
`;

const styleLink = {
  fontSize: '22px',
  lineHeight: '26px',
  color: '#fff',
  textDecoration: 'none',
};

function Navbar({ detailMovies }) {
  return (
    <NavBar>
      <Container>
        <P>
          <Link style={styleLink} to="/">
            Home
          </Link>
          <span style={{ margin: '0 5px' }}>/</span>
          {detailMovies.title}
        </P>
      </Container>
    </NavBar>
  );
}

Navbar.propTypes = {
  detailMovies: PropTypes.object,
};

export default Navbar;
