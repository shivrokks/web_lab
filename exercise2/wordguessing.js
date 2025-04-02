let wordLetters = ['F', 'O', 'X'];
let guessedLetters = ['_', '_', '_'];

function guessLetter(letter) {
    let found = false;
    for (let i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] === letter) {
            guessedLetters[i] = letter;
            found = true;
        }
    }
    console.log(guessedLetters.join(''));
    if (found) console.log(`Congratulations! You found a new letter: ${letter}`);
    if (!guessedLetters.includes('_')) console.log('You won!');
}
guessLetter('F');