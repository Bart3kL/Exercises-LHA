export function getMyAge(input: string | Date | number) {
    const currentYear = new Date().getFullYear();
    let birthDate;
  
    switch (true) {
      // Type guard -> Date
      case Object.prototype.toString.call(input) === '[object Date]':
        birthDate = input.getFullYear();
        break;
      case typeof input === 'string':
        birthDate = Number(input);
        break;
      case typeof input === 'number':
        birthDate = input;
        break;
      default:
        throw new Error('Podaj pawidłowy rok urodzenia');
    }
  
    if (birthDate < 1910) throw new Error('Podaj pawidłowy rok urodzenia');
    if (birthDate > currentYear) throw new Error('Podaj pawidłowy rok urodzenia');
  
    return currentYear - birthDate;
  }
  