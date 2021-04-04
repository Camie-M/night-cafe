import { render, screen } from '@testing-library/react';
import MainTitleText from './index'

describe('when page is rendered', () => {
  it('main title text appears', () => {
    render(<MainTitleText text="Lorem ipsum" />);
    const mainTitleText = screen.getByText(/Lorem ipsum/i);
    expect(mainTitleText).toBeInTheDocument();
  });
});