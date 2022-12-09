import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the landing page', () => {
  render(<App />);

  expect(screen.getByRole('h1', {className: "text-3xl font-bold underline"})).toHaveTextContent(/Hello World!/);
})