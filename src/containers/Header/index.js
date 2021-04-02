import React from 'react'

import ArrowLeft from './../../assets/icons/arrow-black-left.svg';
import DarkLight from './../../assets/icons/dark-light.svg';
import Menu from './../../assets/icons/menu.svg';

import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <img src={ArrowLeft} alt="Voltar para Home" />
        <p>Home</p>
      </S.HeaderContainer>
      <S.HeaderContainer>
        <img src={DarkLight} alt="Ajustar cor do site para claro ou escuro" />
        <img className="menu" src={Menu} alt="Abrir menu do site" />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header;
