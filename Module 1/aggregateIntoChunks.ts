export function aggregateIntoChunks(array: Array<string>) {
  if (array.length < 4)
    throw new Error('Tablica musi zawierać co najmniej 4 elementy');

  const arrayCopy = array;

  let sumIndex = 0;
  let index = 0;
  let arraysLenghts = [];
  const chunks: Array<string> = [];

  while (sumIndex < arrayCopy.length) {
    index = Math.floor(Math.random() * (7 - 4)) + 4;
    sumIndex += index;

    if (sumIndex > array.length) {
      arraysLenghts = [];
      sumIndex = 0;
      continue;
    }
    arraysLenghts.push(index);
  }

  arraysLenghts.map((number) => {
    const arraysArray: string[] = arrayCopy.splice(0, number);
    if (Array.isArray(arraysArray)) {
      chunks.push(arraysArray);
    }
  });

  return chunks;
}
