import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders news app header', () => {
  const { getByText } = render(<App />);
  const element = getByText(/news app/i);
  expect(element).toBeInTheDocument();
});
