import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

const character = {
    name: "Thor",
    description: "God of Thunder",
    thumbnail: {
        path: "https://example.com/thor",
        extension: "jpg"
    },
    modified: "2021-09-01"
};

describe('CharacterDetail component', () => {
    test('renders character image, description and modification date', () => {
        render(<CharacterDetail character={character} />);
        const imageElement = screen.getByAltText(character.name);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', `${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`);
        const descriptionElement = screen.getByText(character.description);
        expect(descriptionElement).toBeInTheDocument();
        const modifiedElement = screen.getByText(character.modified);
        expect(modifiedElement).toBeInTheDocument();
    });

    test('renders default description when no description is available', () => {
        const characterWithoutDescription = { ...character, description: null };
        render(<CharacterDetail character={characterWithoutDescription} />);
        const defaultDescriptionElement = screen.getByText("No description available.");
        expect(defaultDescriptionElement).toBeInTheDocument();
    });

    test('renders default modification date when no modification date is available', () => {
        const characterWithoutModified = { ...character, modified: null };
        render(<CharacterDetail character={characterWithoutModified} />);
        const defaultModifiedElement = screen.getByText("No modification date available.");
        expect(defaultModifiedElement).toBeInTheDocument();
    });
});