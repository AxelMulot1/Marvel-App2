import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import CharactersPage from './CharactersPage';
import { BrowserRouter } from 'react-router-dom';

const characters = [
    {
        id: "1",
        name: "Thor"
    },
    {
        id: "2",
        name: "Captain America"
    }
];

// mock the useLoaderData hook, so that we can test the CharactersPage component
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // use actual for all non-hook parts
    useLoaderData: () => {
        return characters;
    },
}));

test('render CharactersPage component', () => {
    // when

    // then
    render(<CharactersPage />, { wrapper: BrowserRouter });

    // expect the document title to be "Marvel App"
    expect(document.title).toBe('Marvel App');

    // expect the heading 'Marvel Characters' to be in the document
    const h2Element = screen.getByRole('heading', { level: 2, name: "Marvel Characters" });
    expect(h2Element).toBeInTheDocument();

    // expect the character Thor to be in the document
    const thorElement = screen.getByText(characters[0].name);
    expect(thorElement).toBeInTheDocument();

    // expect the charater Captain America to be in the document
    const captainAmericaElement = screen.getByText(characters[1].name);
    expect(captainAmericaElement).toBeInTheDocument();
    
    // expect the number of characters to be in the document
    const numberOfCharactersElement = screen.getByText(`There is ${characters.length} characters`);
    expect(numberOfCharactersElement).toBeInTheDocument();
});
