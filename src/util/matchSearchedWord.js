const matchSearchedWord = (searchText, wordsArray) => wordsArray
  .find((word) => word.toLowerCase().includes(searchText.toLowerCase()));

export default matchSearchedWord;
