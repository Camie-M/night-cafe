import styled from 'styled-components'

export const ImageText = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;

  @media(max-width: 900px) {
    font-size: 1.175rem;
    line-height: 1.75rem;
  }

  @media(max-width: 650px) {
    font-size: 0.875rem;
  }
`;