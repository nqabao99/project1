/**
 *
 * Banner
 *
 */

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import Container from '../Container';
import H2 from '../H2';
import P from '../P';

const BgImg = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url(http://image.tmdb.org/t/p/w1280/8s4h9friP6Ci3adRGahHARVd76E.jpg), rgb(28, 28, 28);
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}`;

const ContainerText = styled.div`
  max-width: 700px;
  position: absolute;
  bottom: 60px;
`;

function Banner() {
  return (
    <BgImg>
      <Container style={{ position: 'relative' }}>
        <ContainerText>
          <H2 style={{ marginBottom: 50 }}>Space Jam: A New Legacy</H2>
          <P>
            When LeBron and his young son Dom are trapped in a digital space by
            a rogue A.I., LeBron must get them home safe by leading Bugs, Lola
            Bunny and the whole gang of notoriously undisciplined Looney Tunes
            to victory over the A.I.s digitized champions on the court. It is
            Tunes versus Goons in the highest-stakes challenge of his life.
          </P>
        </ContainerText>
      </Container>
    </BgImg>
  );
}

Banner.propTypes = {};

export default Banner;
