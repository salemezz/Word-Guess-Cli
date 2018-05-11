var inquirer = require("inquirer");
var possibleWords = ["tetris", "pong", "space invaders", "zelda", "donkey kong"];
var Word = require('./word.js');
var letter = require('./letter.js');

var guesses = 16;
var word = new Word(possibleWords[Math.floor(Math.random() * possibleWords.length + 1)]);

enterLetter();

function printWord() {
  console.log(word.renderWord());
}
function enterLetter() {
  printWord();
  inquirer
    .prompt([
      {
        type: "input",
        message: "pick a letter.",
        name: "guess"
      }
    ])
    .then(function (input) {
      word.checkGuess(input.guess);
      if (word.guessed) {
        printWord();
        console.log("You win");
      } else if (guesses === 0) {
        console.log("You Lose.");
      }
      else {
        guesses--;
        // console.log(word.letters[i].guessed);
        console.log(guesses + " guesses left.");
        enterLetter();
      }
    });
}






