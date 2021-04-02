import React from 'react'
import PropTypes from 'prop-types';

import * as S from './styled';

const RegularText = ({text}) => {
  return (
    <S.RegularText>
      {text}
    </S.RegularText>
  )
}

RegularText.propTypes = {
  text: PropTypes.string.isRequired
};

export default RegularText
