import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

// src/api/characters-api.test.js

jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Character One' },
    { id: 2, name: 'Character Two' },
]);
describe('getCharacters', () => {
    test('should return the list of characters', () => {
        const result = getCharacters();
        expect(result).toEqual(characters);
    });
});
describe('getCharacterById', () => {
    test('should return the correct character when a valid ID is provided', () => {
        const result = getCharacterById(1);
        expect(result).toEqual({ id: 1, name: 'Character One' });
    });
    test('should throw an error when an invalid ID is provided', () => {
        expect(() => getCharacterById(999)).toThrow('Character with id 999 not found');
    });
});
