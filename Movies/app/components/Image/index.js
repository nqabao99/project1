/**
 *
 * Image
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
const Img = styled.img`
  max-width: 100%;
`;
function Image({ className, src, alt, ...rest }) {
  return <Img className={className} src={src} alt={alt} {...rest} />;
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
