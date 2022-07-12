const data = [1, 2, 3, 4, 5, 6, 7, 8];
const settings = { actualPageIdx: 1, entriesOnPage: 4 };
const paginateArray = (
  dataEntries: Array<number>,
  settings: { actualPageIdx: number; entriesOnPage: number }
) => {
  if (!Array.isArray(dataEntries))
    throw new Error('Pierwszy argument musi być tablicą');
  if (dataEntries.length === 0)
    throw new Error('Pierwszy argument nie ma zawartości');
  if (typeof settings !== 'object')
    throw new Error('Drugi argument musi być obiektem');
  if (!Number.isInteger(settings.actualPageIdx) || settings.actualPageIdx >= 0)
    throw new Error(
      'W drugim argumencie - pierwsza właściwość jest niepoprawna.'
    );
  if (!Number.isInteger(settings.entriesOnPage) || settings.entriesOnPage > 0)
    throw new Error('W drugim argumencie - druga właściwość jest niepoprawna.');

  const { actualPageIdx, entriesOnPage } = settings;

  const startIndex = entriesOnPage * actualPageIdx;

  return dataEntries.slice(startIndex, entriesOnPage + startIndex);
};