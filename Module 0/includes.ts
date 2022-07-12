export function includes(
  array: string[] | number[],
  elementToFind: string | number,
  fromIndex: number
) {
  if (!Array.isArray(array))
    throw new Error('Pierwszy argument musi być tablicą');
  if (array.length === 0) throw new Error('Tablica musi coś zawierać');
  if (typeof fromIndex !== 'number')
    throw new Error('Trzeci parametr musi być liczbą');

  const fromIndexArray = array.slice(fromIndex, array.length);
  const foundElement = fromIndexArray.find(
    (el: string | number) => el === elementToFind
  );
  const result = foundElement ? true : false;

  return result;
}
