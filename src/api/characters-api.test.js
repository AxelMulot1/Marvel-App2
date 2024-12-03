import { getCharacters, getCharacterById } from "./characters-api";

// FILE: src/api/characters-api.test.js


const character1 = { id: 1, name: "Character One", "modified": "2014-01-13T14:48:32-0500"};
const character2 = { id: 2, name: "Character Two", "modified": "2014-01-14T14:48:32-0500"};
const character3 = { id: 3, name: "Character Three", "modified": "2014-01-13T14:47:32-0500"};
const character4 = { id: 4, name: "Character Four", "modified": "2014-01-13T14:47:32-0500"};

jest.mock("../data/characters.json", () => [
  character1,
  character2,
  character3,
  character4,
]);

describe("characters-api", () => {
  describe("getCharacters", () => {
    it("should return the list of characters with default order", () => {
      const result = getCharacters();

      expect(result[0]).toEqual(character4);
      expect(result[1]).toEqual(character1);
      expect(result[2]).toEqual(character3);
      expect(result[3]).toEqual(character2);
    });

    it("should return the list of characters ordered by name ascending", () => {
        const result = getCharacters("name", "asc");

        expect(result[0]).toEqual(character4);
        expect(result[1]).toEqual(character1);
        expect(result[2]).toEqual(character3);
        expect(result[3]).toEqual(character2);
      });

    it("should return the list of characters ordered by name descending", () => {
      const result = getCharacters("name", "desc");
      expect(result[0]).toEqual(character2);
      expect(result[1]).toEqual(character3);
      expect(result[2]).toEqual(character1);
    });

    it("should return the list of characters ordered by modified field ascending", () => {
      const result = getCharacters("modified", "asc");

      expect(result[0]).toEqual(character3);
      expect(result[1]).toEqual(character4);
      expect(result[2]).toEqual(character1);
      expect(result[3]).toEqual(character2);
    });

    it("should return the list of characters ordered by modified field descending", () => {
      const result = getCharacters("modified", "desc");

      expect(result[0]).toEqual(character2);
      expect(result[1]).toEqual(character1);
      expect(result[2]).toEqual(character3);
    });
  });

  describe("getCharacterById", () => {
    it("should return the character with the given id", () => {
      const result = getCharacterById(1);
      expect(result).toEqual(character1);
    });

    it("should throw an error if the character with the given id is not found", () => {
      expect(() => getCharacterById(999)).toThrow(
        "Character with id 999 not found"
      );
    });


  });
});
