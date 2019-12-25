import React from 'react';
import { render } from '@testing-library/react';
import Home from 'pages/home';

test('render home component', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
