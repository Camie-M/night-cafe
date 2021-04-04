import { render, screen } from '@testing-library/react';
import DescriptionTable from './index'

describe('when page is rendered', () => {
  it('table and description appears', () => {
    render(<DescriptionTable />);

    const table = document.querySelector("table")
    const description = document.querySelector("p")

    expect(table).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('table headers appear', () => {
    render(<DescriptionTable />);
    const headerYear = screen.getByText('Year');
    const headerMedium = screen.getByText('Medium');
    const headerLocation = screen.getByText('Location');
    const headerSize= screen.getByText('Size');

    expect(headerYear).toBeInTheDocument();
    expect(headerMedium).toBeInTheDocument();
    expect(headerLocation).toBeInTheDocument();
    expect(headerSize).toBeInTheDocument();
  });

  it('table data appear', () => {
    render(<DescriptionTable />);
    const dataYear = screen.getByText('1888');
    const dataMedium = screen.getByText('Oil on canvas');
    const dataLocation = screen.getByText('Ayale University Gallery');
    const dataSize= screen.getByText('28.5IN x 36.3IN');

    expect(dataYear).toBeInTheDocument();
    expect(dataMedium).toBeInTheDocument();
    expect(dataLocation).toBeInTheDocument();
    expect(dataSize).toBeInTheDocument();
  });
});