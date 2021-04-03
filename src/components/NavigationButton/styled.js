import styled from 'styled-components';
import BgImage from './../../assets/images/night-cafe-button.png'

export const NavigationButton = styled.button`
  background: black;
  height: 16rem;
  width: 16rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 50%;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 2rem;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background: url(${BgImage});
  }

  @media(max-width: 650px) {
    height: 8rem;
    width: 8rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;