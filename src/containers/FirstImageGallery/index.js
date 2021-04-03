import React from 'react'

import Image2 from '../../assets/images/image2.png'
import Image3 from '../../assets/images/image3.png'
import Image4 from '../../assets/images/image4.png'

import ImageDescriptionText from './../../components/ImageDescriptionText'

import * as S from './styled'

const FirstImageGallery = () => {
  return (
    <S.FirstImageGalleryWrapper>
      <img src={Image2} alt="Fundo vermelho com nuvens roxas" />
      <img className="second" src={Image3} alt="Fundo vermelho com nuvens roxas" />
      <img className="third" src={Image4} alt="Fundo vermelho com nuvens roxas" />
      <ImageDescriptionText
        text="The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists."
      />
    </S.FirstImageGalleryWrapper>
  )
}

export default FirstImageGallery
