/**
 *
 * BannerMovies
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Image from '../Image';

const Bg = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0;
`;

const DL = styled.div`
  display: flex;
`;
const InfoMovie = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 50px;
  color: #fff;
`;

function BannerMovies({ detailMovies }) {
  const bis = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${
      detailMovies.backdrop_path
    })`,
  };
  return (
    <Bg style={bis}>
      <Container>
        <DL>
          <div>
            <Image
              width="400"
              src={`https://image.tmdb.org/t/p/w500${detailMovies.poster_path}`}
              alt="movies img"
            />
          </div>
          <InfoMovie>
            <h1>{detailMovies.title}</h1>
            <h3>PLOT</h3>
            <p>{detailMovies.overview}</p>
            <h3>IMDB RATING</h3>
            <div>
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={String(detailMovies.vote_average).replace('.', '')}
              />
              <span style={{ marginLeft: 20 }}>
                {detailMovies.vote_average}
              </span>
            </div>
            <h3>DIRECTOR</h3>
            <p>Justin Lin</p>
          </InfoMovie>
        </DL>
      </Container>
    </Bg>
  );
}

BannerMovies.propTypes = {
  detailMovies: PropTypes.object,
};

export default BannerMovies;
