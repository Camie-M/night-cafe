import React from 'react'
import PropTypes from 'prop-types';

import * as S from './styled'

const ImageDescriptionText = ({ text }) => {
  return (
    <S.ImageText>
      {text}
    </S.ImageText>
  )
}

ImageDescriptionText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ImageDescriptionText
