const mapFn = (
    array: Array<any>,
    callback: { value: any; index: number; array: Array<string | number> }
  ) => {
    if (!Array.isArray(array))
      throw new Error('Pierwszy argument musi być tablicą');
    if (typeof callback !== 'function')
      throw new Error('Drugi argument musi być funkcją');

    array.reduce((total, value, index, array) => {
      total.push(callback(value, index, array));
      return total;
    }, []);
  };
  
  const filterFn = (
    array: Array<any>,
    callback: { value: any; index: number; array: Array<string | number> }
  ) => {
    if (!Array.isArray(array))
      throw new Error('Pierwszy argument musi być tablicą');
    if (typeof callback !== 'function')
      throw new Error('Drugi argument musi być funkcją');
  
    return array.reduce(function (total, value, index, array) {
      if (callback(value, index, array)) {
        total.push(value);
      }
      return total;
    }, []);
  };
  
  const everyFn = (
    array: Array<any>,
    callback: { value: any; index: number; array: Array<string | number> }
  ) => {
    if (!Array.isArray(array))
      throw new Error('Pierwszy argument musi być tablicą');
    if (typeof callback !== 'function')
      throw new Error('Drugi argument musi być funkcją');
  
    return array.reduce(function (total, value, index, array) {
      if (!callback(value, index, array)) {
        total = false;
      }
      return total;
    }, true);
  };
  
  const someFn = (
    array: Array<any>,
    callback: { value: any; index: number; array: Array<string | number> }
  ) => {
    if (!Array.isArray(array))
      throw new Error('Pierwszy argument musi być tablicą');
    if (typeof callback !== 'function')
      throw new Error('Drugi argument musi być funkcją');
  
    return array.reduce(function (total, value, index, array) {
      if (!callback(value, index, array)) {
        total = true;
      }
      return total;
    }, true);
  };
  
 