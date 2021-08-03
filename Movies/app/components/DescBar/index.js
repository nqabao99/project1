/**
 *
 * DescBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';
import P from '../P';
const BescBarStyle = styled.div`
  background: #1c1c1c;
`;
const DL = styled.div`
  background: #1c1c1c;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;

function DescBar() {
  return (
    <BescBarStyle>
      <Container>
        <DL>
          <P>Running time: 2h 25m</P>
          <P>Budget: $200,000,000</P>
          <P>Revenue: $624,455,615</P>
        </DL>
      </Container>
    </BescBarStyle>
  );
}

DescBar.propTypes = {};

export default DescBar;
