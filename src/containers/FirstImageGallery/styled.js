import styled from 'styled-components'

export const FirstImageGalleryWrapper = styled.section`
  margin: 0 auto 28rem auto;
  width: 50%;
  position: relative;

  img {
    border-radius: 1rem;
    margin-bottom: 4.25rem;
  }

  .third {
    position: absolute;
    right: 0;
    top: 42rem;
  }

  p {
    position: absolute;
    left: -6rem;
    width: 50%;
  }

  @media(max-width: 900px) {
    margin: 0 auto 36rem auto;

    .third {
      right: -6rem;
    }
  }

  @media(max-width: 650px) {
    margin: 0 auto 20rem auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;

    .second {
      width: 40%;
    }

    p {
      left: 1rem;
      top: 3rem;
      margin: 0 auto;
      width: 80%;
    }

    .third {
      width: 50%;
      position: absolute;
      right: 0;
      top: 35rem;
  }
  }
`;