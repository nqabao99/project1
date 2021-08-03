/**
 *
 * A
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a``;

function A({ href, ...rest }) {
  return <Link href={href} {...rest} />;
}

A.propTypes = {
  href: PropTypes.string.isRequired,
};

export default A;
