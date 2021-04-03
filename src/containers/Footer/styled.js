import styled from 'styled-components'

export const Footer = styled.footer`
  padding: 5rem 6.25rem;
  display: flex;
  justify-content: space-between;

  p {
    text-transform: uppercase;
    font-weight: 300;
  }
`;

export const SocialLinks = styled.div`
  display: flex;

  a {
    margin-right: 0.5rem;
  }

  &:not(:last-of-type) {
    &:after {
      content: '';
      height: 1.5rem;
      border-right: 1px solid black;
      opacity: 0.16;
      margin-left: 3rem;
    }
  }

`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 66%;
  justify-content: space-between;
`;