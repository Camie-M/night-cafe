import styled from 'styled-components';

export const ScrollTopWrapper = styled.span`
  position: fixed;
  bottom: 5rem;
  right: 3rem;
  cursor: pointer;

  @media(max-width: 900px) {
    bottom: 3rem;
  }
`;