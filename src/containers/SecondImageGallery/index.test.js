import { render, screen } from '@testing-library/react';
import SecondImageGallery from './index'

describe('when page is rendered', () => {
  it('appears correct number of images', () => {
    render(<SecondImageGallery />);
    const imageQuantity = document.querySelectorAll("img");
    expect(imageQuantity.length).toEqual(2);
  });

  it('appears correct images', () => {
    render(<SecondImageGallery />);
    const allImages = document.querySelectorAll("img");

    /* Checks first image displayed src */
    expect(allImages[0].src).toContain("image6");

    /* Checks second image displayed src */
    expect(allImages[1].src).toContain("image5");
  });

  it('appears correct text', () => {
    render(<SecondImageGallery />);
    const text = screen.getByText('The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.');
    expect(text).toBeInTheDocument();
  });
});