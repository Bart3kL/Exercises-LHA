export const filterWith = (array: any[], phrase: string | number) => {
  if (Object.prototype.toString.call(array) !== '[object Array]')
    throw new Error('Pierwszy argument musi być arrayem');
  if (array.length === 0) throw new Error('Tablica jest pusta');
  if (typeof phrase === 'string') {
    if (phrase.length <= 2)
      throw new Error('Szukana rzecz musi miec min 2 znaki');
  }

  return array.filter((ob) => {
    const valuesEl = Object.values(ob);
    const resultSearch = searchFunction(valuesEl, String(phrase));
    if (resultSearch.length > 0) {
      return true;
    }
    return false;
  });
};

function searchFunction(array: any, phrase: string) {
  const phraseRegexp = new RegExp(phrase);

  return array.filter((el: any) => {
    if (typeof el === 'string') {
      return el.match(phraseRegexp);
    }
    if (typeof el === 'number') {
      const numberToString = String(el);
      return numberToString.match(phraseRegexp);
    }
    if (Array.isArray(el)) {
      const result = searchFunction(el, phrase);
      return result.length > 0;
    }
    if (Object.prototype.toString.call(array) === '[object Object]') {
      const result = searchFunction(Object.values(el), phrase);
      return result.length > 0;
    }

    return false;
  });
}
