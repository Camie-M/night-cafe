import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;

  p {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-left: 0.5rem;
  }

  .menu {
    margin-left: 1.75rem;
  }
`;