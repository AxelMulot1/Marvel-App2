// fonction getCharacters qui retourne la liste des personnages
// fonction getCharacterById qui retourne un personnage en fonction de son id en récupérant les données du fichier characters.json

import characters from '../data/characters.json';

// Fonction pour retourner la liste des personnages
export function getCharacters() {
    return characters;
}

/**
 * Get a character by id
 * @param {number} id - The id of the character
 * @returns {Object} The character with the provided id
 */

export const getCharacterById = (id) => {
    const character = characters.find((character) => character.id === id);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character;
}