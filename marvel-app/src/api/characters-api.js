import characters from '../data/characters.json';

export const getCharacters = () => {
    return characters;
}

export const getCharactersById = (id) => {
    return characters.find(character => character.id == id);

}

export const getCharactersByName = (name) => {
    return characters.filter(character => character.name === name);
}