export function NumberOfCharacters({ characters =[]}) {
  const count = characters.length;

  return (
    <div>
      {count > 0 ? `There is ${count} character${count > 1 ? 's' : ''}` : 'There is no character'}
    </div>
  );
}
