import { render, screen } from '@testing-library/react';
import Header from './index'

describe('when page is rendered', () => {
  it('home cta appears', () => {
    render(<Header />);
    const homeText = screen.getByText(/Home/i);
    const arrowBack = document.querySelector("img");

    expect(arrowBack.src).toContain("arrow-black-left");
    expect(homeText).toBeInTheDocument();
  });

  it('dark light and menu icon appears', () => {
    render(<Header />);
    const menuIcon = screen.getByAltText(/Abrir menu do site/i);
    const darkLightIcon = screen.getByAltText(/Ajustar cor do site para claro ou escuro/i);

    expect(menuIcon).toBeInTheDocument();
    expect(darkLightIcon).toBeInTheDocument();
  });
});