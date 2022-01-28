import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
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

  // const loading = screen.getByText(/loading/i);
  // expect(loading).toBeInTheDocument();
  const heading = screen.getByRole('heading', { name: /breaking bad/i });
  const searchBar = await screen.findByRole('textbox', { name: /search/i });
  const name = await screen.findByRole('heading', { name: /jesse pinkman/i });
  const img = screen.getByAltText(/jesse/i);

  expect(heading).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  // await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
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
