import React from 'react'

import NavigationButtons from '../../components/NavigationButton';

import * as S from './styled';

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <NavigationButtons text="The Starry Night" isArrowLeft />
      <NavigationButtons text="The Red Vineyard" isArrowRight />
    </S.NavigationWrapper>
  )
}

export default Navigation
