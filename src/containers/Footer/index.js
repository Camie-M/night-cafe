import React from 'react'

import Link from '../../components/Link';

import ArrowExternal from '../../assets/icons/arrow-external.svg'

import * as S from './styled'

const linksArr = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/'
  },
  {
    name: 'Dribbble',
    link: 'https://dribbble.com/'
  },
  {
    name: 'MySpace',
    link: 'https://myspace.com/'
  },
  {
    name: 'Github',
    link: 'https://github.com/'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/'
  },
]

const Footer = () => {
  return (
    <S.Footer>
      <p>☻@vangogh.com</p>
      <S.FooterLinksWrapper>
        {linksArr.map((item) => (
          <S.SocialLinks key={item.name}>
            <Link
              key={item.name}
              href={item.link}
              title={item.name}
              text={item.name}
            />
            <img src={ArrowExternal} alt="Seta de links externos" />
          </S.SocialLinks>
        ))}
      </S.FooterLinksWrapper>
    </S.Footer>
  )
}

export default Footer
