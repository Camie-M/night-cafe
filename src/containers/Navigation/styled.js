import styled from 'styled-components';

export const NavigationWrapper = styled.section`
  display: flex;
  width: 50%;
  margin: 10rem auto;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 900px) {
    margin: 5rem auto;
    width: 70%;
  }
`;