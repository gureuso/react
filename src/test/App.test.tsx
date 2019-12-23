import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/pages/app';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
