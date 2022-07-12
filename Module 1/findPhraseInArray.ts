export const findPhraseInArray = (array: Array<string>, name: string) => {
  if (!Array.isArray(array))
    throw new Error('Pierwszy argument musi być tablicą');
  if (array.length === 0)
    throw new Error('Pierwszy argument nie ma zawartości');
  if (typeof name !== 'string')
    throw new Error('Drugi argument musi być stringiem');

  const found = [];
  for (let i = 0; i <= array.length; i++) {
    array[i] === name ? found.push(array[i], i) : ['Nie znaleziono'];
  }
  return found;
};
