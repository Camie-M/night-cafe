import React, { useState } from 'react'

import ArrowUp from '../../assets/icons/arrow-up.svg'

import useResponsive from '../../hooks/useResponsive'

import * as S from './styled'

const ScrollToTop = () => {
  const { width } = useResponsive();
  const mobileBreakpoint = 650;

  const [scroll, setScroll] = useState(false)

  const checkScrollTop = () => {
    if ((!scroll && window.pageYOffset > 400) && !(width < mobileBreakpoint)){
      setScroll(true)
    } else if (scroll && window.pageYOffset <= 400){
      setScroll(false)
    }

    /* Only show scroll button at bottom of mobile page */
    if (width < mobileBreakpoint) {
      window.onscroll = function(ev) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
    }
  };

  const goToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <S.ScrollTopWrapper>
      {scroll && (
        <img src={ArrowUp} onClick={goToTop} alt="Seta para voltar para o topo da página" />
      )}
    </S.ScrollTopWrapper>
  )
}

export default ScrollToTop
