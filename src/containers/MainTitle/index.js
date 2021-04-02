import React from 'react'

import MainTitleText from './../../components/MainTitleText'

import Image1 from '../../assets/images/image1.png'

import * as S from './styled';

const MainTitle = () => {
  return (
    <S.MainTitleWrapper>
      <img src={Image1} alt="Imagem de fundo vermelho com nuvens roxas" />
      <S.MainTitleName>2 - The Night Cafe</S.MainTitleName>
      <MainTitleText
        text="I have tried to express the terrible passions of humanity by means 
        of red and purple"
      />
    </S.MainTitleWrapper>
  )
}

export default MainTitle;
