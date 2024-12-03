import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useLoaderData } from 'react-router';
import CharacterDetailPage from './CharacterDetailPage';

// Mock the useLoaderData hook
jest.mock('react-router', () => ({
    useLoaderData: jest.fn(),
}));
 
describe('CharacterDetailPage', () => {
    const character = {
        name: 'Thor',
        description: 'God of Thunder',
        modified: '2023-10-01',
        thumbnail: { path: 'path/to/image', extension: 'jpg' },
        capacities: {
            force: 5,
            intelligence: 8,
            durability: 6,
            energy: 6,
            speed: 1,
            fighting: 3
        }
    };

    beforeEach(() => {
        useLoaderData.mockReturnValue(character);
    });

    test('render CharacterDetailPage component', () => {
        render(<CharacterDetailPage />);
        expect(document.title).toBe('Thor | Marvel App');

        const nameElement = screen.getByText(character.name);
        expect(nameElement).toBeInTheDocument();

        const descriptionElement = screen.getByText(character.description);
        expect(descriptionElement).toBeInTheDocument();

        const modifiedElement = screen.getByText(character.modified);
        expect(modifiedElement).toBeInTheDocument();

        const imageElement = screen.getByAltText(character.name);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'path/to/image/standard_large.jpg');

        // expect to have a heading with the text "Capacities"
        const h2CapacitiesElement = screen.getByRole('heading', { level: 2, name: 'Capacities' });
        expect(h2CapacitiesElement).toBeInTheDocument();

        // expect to have a heading with the text "Using D3"
        const h3D3Element = screen.getByRole('heading', { level: 3, name: 'Using D3' });
        expect(h3D3Element).toBeInTheDocument();

        // expect to have a heading with the text "Using Recharts"
        const h3RechartsElement = screen.getByRole('heading', { level: 3, name: 'Using Recharts' });
        expect(h3RechartsElement).toBeInTheDocument();

        // expect to have a div with the id "pie-container"
        expect(document.getElementById('pie-container')).toBeInTheDocument();

        // expect to a an div with class "recharts-wrapper"
        expect(document.querySelector('.recharts-wrapper')).toBeInTheDocument();
    });
});