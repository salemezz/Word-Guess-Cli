{
    var Letter = function (letter) {
            this.letter = letter,
            this.guessed = false,
            this.renderLetter = function () {
                if (this.guessed) {
                    return letter;
                }
                else {
                    return "_ ";
                }
            },
            this.guessLetter = function (guess) {
                if (letter === guess) {
                    this.guessed = true;
                }
            }
        }
    }
module.exports = Letter;