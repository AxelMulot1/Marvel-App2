import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CharactersList } from './CharactersList';

test('renders an empty list when no characters are provided', () => {
    render(<CharactersList />, { wrapper: BrowserRouter });
    const listElement = screen.getByRole('list');
    expect(listElement).toBeEmptyDOMElement();
});

test('renders an empty list when characters is empty', () => {
    render(<CharactersList characters={[]} />, { wrapper: BrowserRouter });
    const listElement = screen.getByRole('list');
    expect(listElement).toBeEmptyDOMElement();
});

test('renders the correct number of list items when characters are provided', () => {
    const characters = [
        { id: '1', name: 'Thor' },
        { id: '2', name: 'Captain America' },
    ];
    render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(characters.length);

    characters.forEach(character => {
        const linkElement = screen.getByText(character.name);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.closest('a')).toHaveAttribute('href', `/characters/${character.id}`);
    });
});
