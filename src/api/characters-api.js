import characters from '../data/characters.json'

export const DEFAULT_ORDER_BY = 'name';
export const DEFAULT_ORDER = 'asc';

/**
 * List of characters
 * @returns {Array} characters
 */
export const getCharacters = (orderBy = DEFAULT_ORDER_BY, order = DEFAULT_ORDER) => {
    const sortedCharacters =  [...characters].sort((a, b) => 
        order === 'asc' ? a[orderBy].localeCompare(b[orderBy]) : b[orderBy].localeCompare(a[orderBy])
    );

    return sortedCharacters;
}

/**
 * Get a character by id
 * @param {number} id
 * @returns {Object} character
 */
export const getCharacterById = (id) => {
    const character = characters.find(character => character.id === id);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character;
}