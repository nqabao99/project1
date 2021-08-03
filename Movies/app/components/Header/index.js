/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainLogo from '../../assets/img/reactMovie_logo.png';
import SubLogo from '../../assets/img/tmdb_logo.png';
import Container from '../Container';
import Image from '../Image';
import A from '../A';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 35px 0;
`;

const Bg = styled.div`
  background-color: #000;
`;

function Header() {
  return (
    <Bg>
      <Container>
        <NavBar>
          <A href="#/">
            <Image src={MainLogo} alt="main logo" width="300" />
          </A>

          <Image src={SubLogo} alt="sub logo" width="122" />
        </NavBar>
      </Container>
    </Bg>
  );
}

Header.propTypes = {};

export default Header;
