import React from 'react'
import PropTypes from 'prop-types';

import * as S from './styled'

const Link = ({ href, title, text }) => {
  return (
    <S.Link
      href={href}
      title={title}
      target="_blank"
    >
      {text}
    </S.Link>
  )
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Link
