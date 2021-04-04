import { render, screen } from '@testing-library/react';
import FirstImageGallery from './index'

describe('when page is rendered', () => {
  it('appears correct number of images', () => {
    render(<FirstImageGallery />);
    const imageQuantity = document.querySelectorAll("img");
    expect(imageQuantity.length).toEqual(3);
  });

  it('appears correct images', () => {
    render(<FirstImageGallery />);
    const allImages = document.querySelectorAll("img");

    /* Checks first image displayed src */
    expect(allImages[0].src).toContain("image2");

    /* Checks second image displayed src */
    expect(allImages[1].src).toContain("image3");

    /* Checks third image displayed src */
    expect(allImages[2].src).toContain("image4");
  });

  it('appears correct text', () => {
    render(<FirstImageGallery />);
    const text = screen.getByText(/The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists./i);
    expect(text).toBeInTheDocument();
  });
});