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
  }
`;

export const MainTitleName = styled.p`
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  transform: rotate(270deg);
`;