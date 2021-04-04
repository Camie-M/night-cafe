import styled from 'styled-components';

export const MainTitleStyle = styled.p`
  width: 60%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 12vw;
  font-size: 4rem;
  line-height: 4.875rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  z-index: 3;

  animation: show 3s;

  @keyframes show {
    0% {
      opacity: 0.1;
      transform: translateX(15%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media(max-width: 900px) {
    font-size: 3.5rem;
    margin: 0 auto;
  }

  @media(max-width: 650px) {
    font-size: 2.175rem;
    line-height: 3.5rem;
    height: 80vh;
    width: 80%;
  }
`;