/**
 *
 * ListMovies
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../Image';
import NoImg from '../../assets/img/none.png';

const ItemMovieStyle = styled.div`
  width: calc(25% - 3 * 40px / 4);
  margin: 0 40px 40px 0;
  transition: all 0.3s;
  &:nth-child(4n + 4) {
    margin-right: 0;
  }
  &:hover {
    opacity: 0.6;
  }
`;

function ItemMovies({ item }) {
  return (
    <ItemMovieStyle>
      <Link to={`/${item.id}`}>
        <Image
          src={
            item.poster_path !== null
              ? `http://image.tmdb.org/t/p/w500${item.poster_path}`
              : NoImg
          }
          alt="movies img"
        />
      </Link>
    </ItemMovieStyle>
  );
}

ItemMovies.propTypes = {
  item: PropTypes.object,
};

export default ItemMovies;
