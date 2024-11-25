export function NumberOfCharacters({ characters = [] }) {
    if (characters.length === 0) {
      return <p>There is no character</p>;
    } else if (characters.length === 1) {
      return <p>There is 1 character</p>;
    }

    return <p>There are {characters.length} characters</p>;
}