import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  const heading = screen.getByRole('heading', { name: /breaking bad/i });
  const searchBar = await screen.findByLabelText(/search/i);
  const name = screen.getByRole('heading', { name: /jesse/i });
  const img = screen.getByAltText(/jesse/i);

  expect(heading).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
