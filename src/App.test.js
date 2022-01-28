import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockResponse from './Data/Data';
import App from './App';

// import these
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// mock Response here

// setting up a mock fetch here
const server = setupServer(
  rest.get(`https://www.breakingbadapi.com/api/characters`, (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

// runs before all tests
beforeAll(() => server.listen());

// runs after all tests
afterAll(() => server.close());

test('app renders components on page', async () => {
  render(<App />);

  const loading = await screen.findByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const heading = screen.getByRole('heading', { name: /breaking bad/i });
  expect(heading).toBeInTheDocument();

  const searchBar = await screen.findByRole('textbox', { name: /search/i });
  expect(searchBar).toBeInTheDocument();

  const name = await screen.findByRole('heading', { name: /jesse pinkman/i });
  expect(name).toBeInTheDocument();

  const img = screen.getByAltText(/jesse/i);
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

test('Dropdown works as expected', async () => {
  render(<App />);

  // grab dropdown
  const dropDown = await screen.findByRole('combobox', { name: /dropdown/i });

  // fake selection of 'Alive'
  userEvent.selectOptions(dropDown, 'Alive');

  // grab characters that are 'Alive' and map
  const characters = await screen.findAllByText('Alive', { exact: false });
  const result = characters.map((character) => character.textContent);

  // check that characters details include 'Alive'
  const handleCheck = (name) => name.includes('Alive');
  const isAlive = result.every(handleCheck);
  expect(isAlive).toBe(true);
});
