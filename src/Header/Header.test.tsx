import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('68248240', () => {
  it('should pass', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/portals', search: '?value=teresa_teng' }]}>
        <Header />
      </MemoryRouter>
    );
  });
});