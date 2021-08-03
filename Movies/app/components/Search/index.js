/**
 *
 * Search
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';
import SearchText from './SearchText';

const Bg = styled.div`
  background: #1c1c1c;
  padding: 25px 0;
`;

function Search({ handleSearchMoviesChange }) {
  return (
    <Bg>
      <Container>
        <SearchText handleSearchMoviesChange={handleSearchMoviesChange} />
      </Container>
    </Bg>
  );
}

Search.propTypes = {
  handleSearchMoviesChange: PropTypes.func,
};

export default Search;
