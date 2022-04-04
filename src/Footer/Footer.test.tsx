import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

test('renders CRDA © 2012 - 2022', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/CRDA © 2012 - 2022/i);
  expect(linkElement).toBeInTheDocument();
});
