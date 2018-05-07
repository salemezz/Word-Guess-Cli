var inquirer = require("inquirer");
var possibleWords = ["chinchilla", "doom", "ffdf"];
var Word = require('./word.js');
var letter = require('./letter.js');

var guesses = 12;
var word = new Word(possibleWords[Math.floor(Math.random() * possibleWords.length + 1)]);

enterLetter();

function printWord() {
  console.log(word.renderWord());
}

function checkWord(guess) {
  if (!this.guessed) {
    guesses--;
    console.log("Nope, you have " + guesses + " left.");
  }
  word.checkGuess(guess);
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
      checkWord(input.guess);
      if(guesses === 0) {
        console.log("You lose");
      } else if(word.guessed) {
        console.log("You win");
      } else{
        enterLetter();
      }      
    });
}






