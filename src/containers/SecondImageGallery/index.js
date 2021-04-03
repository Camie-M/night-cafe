import React from 'react'

import Image5 from '../../assets/images/image5.png'
import Image6 from '../../assets/images/image6.png'

import ImageDescriptionText from './../../components/ImageDescriptionText'

import * as S from './styled'

const SecondImageGallery = () => {
  return (
    <S.SecondImageGalleryWrapper>
      <img src={Image6} alt="Fundo vermelho com nuvens roxas" />
      <ImageDescriptionText
        text="The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut."
      />
      <img src={Image5} alt="Nuvens roxas" />
    </S.SecondImageGalleryWrapper>
  )
}

export default SecondImageGallery
