import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NumberOfCharacters } from './NumberOfCharacters';
test('renders "There is no character" when characters array is empty', () => {
    render(<NumberOfCharacters characters={[]} />);
    expect(screen.getByText('There is no character')).toBeInTheDocument();
});

test('renders the correct number of characters when characters array is not empty', () => {
    const characters = ['Character 1','Character 2','Character 3'];
    render(<NumberOfCharacters characters={characters} />);
    expect(screen.getByText('There is 3 characters')).toBeInTheDocument();
});

test('renders "There is no character" when no characters are provided', () => {
    render(<NumberOfCharacters />);
    // screen.debug();
    expect(screen.getByText('There is no character')).toBeInTheDocument();
});
