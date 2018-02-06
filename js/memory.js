


function Memory() {
  this.hasWon = false;
  this.gameBoard = ["back0", "back1", "back2", "back3", "back4", "back5", "back6", "back7", "back8", "back9"];
  this.pictures = ["star", "star", "spiral", "spiral", "pentagram", "pentagram", "goat head", "goat head", "druid", "druid"];
  this.displayBoard = ["back0", "back1", "back2", "back3", "back4", "back5", "back6", "back7", "back8", "back9"];
  this.answers = [];
  this.turnsUsed = 0;
  this.firstGuess = null;
  this.firstGuessIndex = null;
  this.secondGuess = null;
  this.secondGuessIndex = null;
  this.match = false;
}

Memory.prototype.shufflePictures = function() {
  var usedNumbers = [];
  console.log("shufflePictures begun");
  if (usedNumbers.length < 10){
    var randomPicture = Math.floor(Math.random() * this.pictures.length);
    for(var i = 0; i < this.pictures.length; i++) {
      while ((usedNumbers.length < 10) && usedNumbers.includes(randomPicture)) {
        randomPicture = Math.floor(Math.random() * this.pictures.length);
      }
      this.answers[i] = this.pictures[randomPicture];
      usedNumbers.push(randomPicture);
    }
  }
  console.log(this.pictures);
  console.log(this.answers);
  console.log(usedNumbers.sort());
};

Memory.prototype.guess1 = function(card) {
  this.firstGuessIndex = this.displayBoard.indexOf(card);
  this.displayBoard[this.firstGuessIndex] = this.answers[this.firstGuessIndex];
  console.log(this.displayBoard);
  this.firstGuess = this.answers[this.firstGuessIndex];
}

Memory.prototype.guess2 = function(card) {
  this.secondGuessIndex = this.displayBoard.indexOf(card);
  if (this.secondGuessIndex === this.firstGuessIndex) {
    console.log("pick a different card");
  } else {
    this.displayBoard[this.secondGuessIndex] = this.answers[this.secondGuessIndex];
    console.log(this.displayBoard);
    this.secondGuess = this.answers[this.secondGuessIndex];
    if (this.firstGuess === this.secondGuess) {
      console.log("MATCH!");
      this.match = true;
      this.turnsUsed++;
    } else {
      console.log("no match");
      this.displayBoard[this.firstGuessIndex] = this.gameBoard[this.firstGuessIndex];
      this.displayBoard[this.secondGuessIndex]= this.gameBoard[this.secondGuessIndex];
      this.turnsUsed++;
      console.log(this.displayBoard);
      this.match = false;
    }
  }
}


exports.memoryModule = Memory;
