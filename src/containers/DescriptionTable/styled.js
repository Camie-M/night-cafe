import styled from 'styled-components';

export const DescriptionTableWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: 0 0 5rem 5rem;

  @media(max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 3rem auto;
  }
`;