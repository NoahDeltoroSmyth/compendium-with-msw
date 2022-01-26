import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('app renders components on page', async () => {
  render(<App />);

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  const heading = screen.getByRole('heading', { name: /breaking bad/i });
  const searchBar = await screen.findByRole('textbox', { name: /search/i });
  const name = screen.getByRole('heading', { name: /jesse/i });
  const img = screen.getByAltText(/jesse/i);

  expect(heading).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});

test('searchbar works correctly', async () => {
  render(<App />);

  // grab searchbar
  const searchBar = await screen.findByRole('textbox', { name: /search/i });

  // fake name in searchbar
  const characterName = 'jesse';
  userEvent.type(searchBar, characterName);

  // grab character results and map
  const characters = await screen.findAllByText(characterName, { exact: false });
  const result = characters.map((character) => character.textContent);

  // check that name is equal to all name results
  const handleCheck = (name) => name.toLowerCase().includes(characterName);
  const hasSameName = result.every(handleCheck);
  expect(hasSameName).toBe(true);
});
