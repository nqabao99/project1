import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Noneimg from '../../assets/img/none.png';

const ItemActorStyle = styled.div`
  width: calc(25% - 3 * 40px / 4);

  margin: 0 40px 40px 0;
  display: flex;
  background: #353535;
  color: #fff;

  transition: all 0.3s;
  &:nth-child(4n + 4) {
    margin-right: 0;
  }
  &:hover {
    opacity: 0.6;
  }
`;

const ActorInfo = styled.div`
  padding: 0 20px;
`;

function ItemActor({ item }) {
  return (
    <ItemActorStyle>
      <div>
        <img
          src={
            item.profile_path !== null
              ? `https://image.tmdb.org/t/p/w154${item.profile_path}`
              : Noneimg
          }
          alt="autor"
          width="130"
        />
      </div>
      <ActorInfo>
        <h3>{item.character}</h3>
        <p>{item.name}</p>
      </ActorInfo>
    </ItemActorStyle>
  );
}

ItemActor.propTypes = {
  item: PropTypes.object,
};

export default ItemActor;
