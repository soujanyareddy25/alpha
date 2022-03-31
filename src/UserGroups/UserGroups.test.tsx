import React from 'react';
import { render, screen } from '@testing-library/react';
import UserGroups from './UserGroups';

test('renders learn react link', () => {
  render(<UserGroups />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
