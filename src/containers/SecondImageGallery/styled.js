import styled from 'styled-components'

export const SecondImageGalleryWrapper = styled.section`
  margin: 0 auto;
  padding-top: 3rem;
  width: 50%;

  img {
    border-radius: 1rem;
    margin-bottom: 4.25rem;
  }

  p {
    padding: 1rem 0 5rem 6px;
    width: 86%;
    transform: translateX(12.125rem);
  }

  @media(max-width: 650px) {
    display: flex;
    flex-direction: column-reverse;
    width: 80%;

    p {
      text-align: center;
      margin: 0 auto;
      width: 70%;
      transform: translateX(0);
    }
  }
`;