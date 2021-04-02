import React from 'react'
import PropTypes from 'prop-types';

import * as S from './styled';

const MainTitleText = ({text}) => {
  return (
    <S.MainTitleStyle>
      {text}
    </S.MainTitleStyle>
  )
}

MainTitleText.propTypes = {
  text: PropTypes.string.isRequired
};

export default MainTitleText;
