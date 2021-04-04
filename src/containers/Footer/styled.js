import styled from 'styled-components'

export const Footer = styled.footer`
  padding: 5rem 6.25rem;
  display: flex;
  justify-content: space-around;

  p {
    text-transform: uppercase;
    font-weight: 300;
  }

  @media(max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;

    p {
      margin-top: 2rem;
    }
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 66%;
  justify-content: space-between;

  @media(max-width: 900px) {
    width: 90%;
  }

  @media(max-width: 650px) {
    flex-wrap: wrap;
    width: 50%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;

  a {
    margin-right: 0.5rem;
  }

  @media(min-width: 650px) {
    &:not(:last-of-type) {
      &:after {
        content: '';
        height: 1.5rem;
        border-right: 1px solid black;
        opacity: 0.16;
        margin-left: 3rem;
      }
    }
  }
`;
