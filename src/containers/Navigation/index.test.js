import { render, screen } from '@testing-library/react';
import Navigation from './index'

describe('when page is rendered', () => {
  it('appears correct number of buttons', () => {
    render(<Navigation />);
    const buttonQuantity = document.querySelectorAll("button");
    expect(buttonQuantity.length).toEqual(2);
  });

  it('appears correct text', () => {
    render(<Navigation />);
    const firstButtonText = screen.getByText(/The Starry Night/i);
    const secondButtonText = screen.getByText(/The Red Vineyard/i);

    expect(firstButtonText).toBeInTheDocument();
    expect(secondButtonText).toBeInTheDocument();
  });
});