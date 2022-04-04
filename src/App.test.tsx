import App from './App';
import React from 'react';
import { create } from 'react-test-renderer';

import { BrowserRouter } from "react-router-dom";

it('renders correctly', () => {
  const tree = create(<BrowserRouter><App/></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
