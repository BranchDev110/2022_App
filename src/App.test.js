import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the landing page', () => {
  render(<App />);

  expect(screen.getByRole('heading')).toHaveTextContent(/Hello World!/);
})