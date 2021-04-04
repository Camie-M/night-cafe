import { render, screen } from '@testing-library/react';
import MainTitle from './index'

describe('when page is rendered', () => {
  it('main title text appears', () => {
    render(<MainTitle />);
    const mainTitleText = screen.getByText(/I have tried to express the terrible passions of humanity by means of red and purple/i);
    expect(mainTitleText).toBeInTheDocument();
  });

  it('name appears', () => {
    render(<MainTitle />);
    const name = screen.getByText(/2 - The Night Cafe/i);
    expect(name).toBeInTheDocument();
  });

  it('image appears', () => {
    render(<MainTitle />)
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("image1");
  });
});