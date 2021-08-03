/**
 *
 * ListMovies
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';
import H2 from '../H2';
import ItemMovies from './ItemMovies';
import Button from '../Button';
import Loading from '../Loading';
const Bg = styled.div`
  background: #fff;
`;

const ListMovieStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 500px;
`;

function ListMovies({ statusFlag, searchText, listMovies, handlePageClick }) {
  return (
    <Bg>
      <Container>
        <H2 style={{ color: '#333' }}>
          {searchText.length === 0 ? 'Popular Movies' : 'Search Result'}
        </H2>
        {statusFlag.isLoading ? (
          <Loading />
        ) : (
          <ListMovieStyle>
            {listMovies !== undefined &&
              listMovies.map((item, index) => {
                const key = index;
                return <ItemMovies key={key} item={item} />;
              })}
          </ListMovieStyle>
        )}

        <Button onClick={handlePageClick}>Load More</Button>
      </Container>
    </Bg>
  );
}

ListMovies.propTypes = {
  statusFlag: PropTypes.object,
  listMovies: PropTypes.array,
  handlePageClick: PropTypes.func,
  searchText: PropTypes.string,
};

export default ListMovies;
