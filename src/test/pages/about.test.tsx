import React from 'react';
import { render } from '@testing-library/react';
import About from 'pages/about';

test('render home component', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
