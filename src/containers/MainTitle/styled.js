import styled from 'styled-components';

export const MainTitleWrapper = styled.section`
  position: relative;
  transform: translateY(-6rem);
  display: flex;
  align-items: center;
  z-index: -1;
  height: 100vh;

  img {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 50vw;
    object-fit: cover;
  }

  @media(max-width: 900px) {
    flex-direction: column-reverse;

    img {
      width: 100vw;
    }
  }

  @media(max-width: 650px) {
    img {
      -webkit-clip-path: polygon(0 0px,0 100vh, 50vw 85vw, 100vw 0);
      clip-path: polygon(0 0px,0 100vh, 50vw 85vw, 100vw 0);
    }
  }
`;

export const MainTitleName = styled.p`
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  transform: rotate(270deg);

  @media(max-width: 900px) {
    transform: rotate(0deg);
    padding-bottom: 2rem;
  }
`;