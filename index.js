
var inquirer = require("inquirer");
var possibleWords = ["Chinchilla", "Doom", "ffdf"];
var Word = require('./word.js');
var letter = require('./letter.js');
var guesses = 12;
inquirer
  .prompt([
    {
      type: "input",
      message: "pick a username.",
      name: "name"
    }
  ])
  .then(function (user) {
    console.log(user.name);
    game.init();
    game.printWord();
    enterLetter();
  });

function enterLetter() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "pick a letter.",
        name: "guess"
      }
    ])
    .then(function (input) {
      var guess = input.guess;
      game.checkWord(guess);
    });
}
var word = new Word(possibleWords[Math.floor(Math.random() * possibleWords.length + 1)]);
var game = {
  init:function() {
    guesses = 12;
  },
  printWord:function() {
      console.log(word.renderWord());

  },
  checkWord:function(guess) {

    if (!this.guessed) {
      guesses--;
      console.log("Nope, you have " + guesses + " left.");
    }
    word.checkGuess(guess);
    game.printWord();
    enterLetter();
  }
}





