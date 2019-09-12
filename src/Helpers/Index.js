export function getLetterMatchCount(guessedWord, secretWord){
  const secretLetterSet = new Set(secretWord.split(''))
  const guessedLetterSet = new Set(guessedWord.split(''))

  // loop over each letter in the secret word, if the letter exists in the guess word add it to a new array
  // finally, count the number of letters in the new array
  return [...secretLetterSet].filter(letter=>guessedLetterSet.has(letter)).length
}