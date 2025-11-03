import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header brand title', async () => {
  render(<App />);
  const title = await screen.findByText(/Recipe Explorer/i);
  expect(title).toBeInTheDocument();
});
