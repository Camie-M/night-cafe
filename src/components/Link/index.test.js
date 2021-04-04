import { render, screen } from '@testing-library/react';
import Link from './index'

describe('when page is rendered', () => {
  it('appears correct text, title and href', () => {
    render(<Link text="Lorem Ipsum" title="Test" href="/" />);
    const text = screen.getByText(/Lorem Ipsum/i);
    expect(text).toBeInTheDocument();
  });
}); 