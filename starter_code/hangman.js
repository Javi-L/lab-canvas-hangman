let hangman;

class Hangman {
  constructor() {
    this.words = ["HANGMAN", "GAME", "IRONHACK"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      this.checkClickedLetters(keyCode);
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      return false;
    } else {
      this.letters.push(key);
      let idx = this.secretWord.indexOf(String.fromCharCode(key));
      // this.addCorrectLetter(idx)
      return true;
    }
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.checkGameOver;
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
      return true;
    } else {
      return false;
    }
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {
  hangman.checkIfLetter(e.keyCode);
};
