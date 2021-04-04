import { render, screen } from '@testing-library/react';
import Footer from './index'

describe('when page is rendered', () => {
  it('copyright appears', () => {
    render(<Footer />);
    const copyright = screen.getByText(/☻@vangogh.com/i);
    expect(copyright).toBeInTheDocument();
  });

  it('correct number of social links appear', () => {
    render(<Footer />);
    const socialLinks = document.querySelectorAll("a");
    expect(socialLinks.length).toEqual(5);
  });

  it('correct number of icons appear', () => {
    render(<Footer />);
    const icons = document.querySelectorAll("img");

    expect(icons.length).toEqual(5);
    expect(icons[0].src).toContain("arrow-external");
  });
});