import { render, screen } from '@testing-library/react';
import CompareCharactersPage from './CompareCharactersPage';

test('renders comparison page', () => {
    render(<CompareCharactersPage />);
    expect(screen.getByText(/Compare Characters/i)).toBeInTheDocument();
});
