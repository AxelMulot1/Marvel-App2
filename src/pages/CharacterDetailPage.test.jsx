// src/pages/CharacterDetailPage.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetailPage from './CharacterDetailPage';
import { useLoaderData } from 'react-router-dom';

// Mock the useLoaderData hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLoaderData: jest.fn(),
}));

describe('CharacterDetailPage', () => {
    it('renders character details correctly', () => {
        const mockCharacter = {
            name: 'Spider-Man',
            description: 'Friendly neighborhood Spider-Man',
        };

        useLoaderData.mockReturnValue(mockCharacter);

        const { getByText } = render(
            <MemoryRouter>
                <CharacterDetailPage />
            </MemoryRouter>
        );

        expect(getByText('Spider-Man')).toBeInTheDocument();
        expect(getByText('Friendly neighborhood Spider-Man')).toBeInTheDocument();
    });
});