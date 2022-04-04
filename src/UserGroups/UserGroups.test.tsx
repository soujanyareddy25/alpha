import React from 'react';
import { render, screen } from '@testing-library/react';
import UserGroups from './UserGroups';

test('renders Search', () => {
  render(<UserGroups />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
