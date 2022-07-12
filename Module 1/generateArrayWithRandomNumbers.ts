function generateArrayWithRandomNumbers(
    howManyNumbers: number,
    min: number,
    max: number
  ) {
    if (min <= 0 || max <= 0 || howManyNumbers <= 0) {
      throw Error('Argumenty muszą być większe od 0.');
    }
    const array = [];
    for (i = 1; i <= howManyNumbers; i++) {
      const randomNumer = Math.floor(Math.random() * (max - min)) + min;
      array.push(randomNumer);
    }
    return array;
  }
  
  function generateArrayOfArrays(
    howManyArrays: number,
    howManyNumbers: number,
    min: number,
    max: number
  ) {
    if (min <= 0 || max <= 0 || howManyArrays <= 0 || howManyNumbers <= 0) {
      throw Error('Argumenty muszą być większe od 0.');
    }
    const array = [];
    for (i = 1; i <= howManyArrays; i++) {
      const arrayNumbers = [];
      for (j = 1; j <= howManyNumbers; j++) {
        const randomNumer = Math.floor(Math.random() * (max - min)) + min;
        arrayNumbers.push(randomNumer);
      }
      array.push(arrayNumbers);
    }
    return array;
  }
  