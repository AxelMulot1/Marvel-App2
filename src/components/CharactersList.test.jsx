// FILEPATH: /c:/Users/jrossi04/marvel-app/src/components/CharactersList.test.jsx

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CharactersList } from './CharactersList';

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

describe('CharactersList component', () => {
    
    test('renders the correct number of characters and a link for each character', () => {
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems).toHaveLength(characters.length);
        characters.forEach(character => {
            const linkElement = screen.getByRole('link', { name: character.name });
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', `/characters/${character.id}`);
        });
    });

    test('renders an empty list when no characters are provided', () => {
        render(<CharactersList characters={[]} />, { wrapper: BrowserRouter });
        const characterItems = screen.queryAllByRole('listitem');
        expect(characterItems).toHaveLength(0);
    });

    test('renders when nothing is provided', () => {
        render(<CharactersList />, { wrapper: BrowserRouter });
        const characterItems = screen.queryAllByRole('listitem');
        expect(characterItems).toHaveLength(0);
    });
});