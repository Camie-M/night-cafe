import React from 'react'
import PropTypes from 'prop-types';

import ArrowLeft from '../../assets/icons/arrow-white-left.svg'
import ArrowRight from '../../assets/icons/arrow-white-right.svg'

import * as S from './styled'

const NavigationButton = ({ text, isArrowLeft, isArrowRight }) => {
  return (
    <S.NavigationButton>
      {isArrowLeft && (
        <img src={ArrowLeft} alt="Seta para a esquerda" />
      )}
      {isArrowRight && (
        <img src={ArrowRight} alt="Seta para a direita" />
      )}
      {text}
    </S.NavigationButton>
  )
}

NavigationButton.propTypes = {
  text: PropTypes.string.isRequired,
  isArrowLeft: PropTypes.bool,
  isArrowRight: PropTypes.bool,
};

NavigationButton.defaultProps = {
  isArrowLeft: false,
  isArrowRight: false,
};

export default NavigationButton
