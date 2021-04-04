import { render, screen } from '@testing-library/react';
import RegularText from './index'

describe('when page is rendered', () => {
  it('appears correct text', () => {
    render(<RegularText text="Lorem Ipsum" />);
    const text = screen.getByText(/Lorem Ipsum/i);
    expect(text).toBeInTheDocument();
  });
});