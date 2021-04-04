import { render, screen } from '@testing-library/react';
import NavigationButtons from './index'

describe('when page is rendered', () => {
  it('appears arrow left when given isArrowLeft prop', () => {
    render(<NavigationButtons text="test" isArrowLeft />);
    const arrowIcon = document.querySelector("img");
    expect(arrowIcon.src).toContain("arrow-white-left");
  });

  it('appears arrow right when given isArrowRight prop', () => {
    render(<NavigationButtons text="test" isArrowRight />);
    const arrowIcon = document.querySelector("img");
    expect(arrowIcon.src).toContain("arrow-white-right");
  });

  it('appears correct text', () => {
    render(<NavigationButtons text="Lorem Ipsum" />);
    const buttonText = screen.getByText(/Lorem Ipsum/i);
    expect(buttonText).toBeInTheDocument();
  });
});