var Letter = require('./letter.js');
{
    var Word = function (word) {
        var letters = []
        for (var i = 0; i < word.length; i++) {
            var letterOfWord = word.charAt(i);
            letters.push(new Letter(letterOfWord));           
        }
            this.letters = letters,
            this.renderWord = function () {
                var renderedWord = "";
                for (var i = 0; i < letters.length; i++) {
                    renderedWord += letters[i].renderLetter();
                }
                return renderedWord;
            },
            this.checkGuess = function(guess) {
                for (var i = 0; i < letters.length; i++) {
                    letters[i].guessLetter(guess);
                }               
            }
        }
    }
module.exports = Word;