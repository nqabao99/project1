/**
 *
 * Actors
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comtainer from '../Container';
import ItemActor from './ItemActor';

const ListActor = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Actors({ listActor }) {
  return (
    <Comtainer>
      <h1>Actors</h1>
      <ListActor>
        {listActor.map((item, index) => {
          const key = index;
          return <ItemActor key={key} item={item} />;
        })}
      </ListActor>
    </Comtainer>
  );
}

Actors.propTypes = {
  listActor: PropTypes.array,
};

export default Actors;
