var Memory = require('./../js/memory.js').memoryModule;

describe('Memory', function() {

  it('should tell us if the player hasWon', function() {
    var testGame = new Memory();
    expect(testGame.hasWon).toEqual(false)
  });

  it('should have a gameBoard with length 10', function() {
    var testGame = new Memory();
    expect(testGame.gameBoard.length).toEqual(10)
  });

  it('should assign an answer board when instantiated', function() {
    var testGame = new Memory();
    testGame.shufflePictures();
    expect(testGame.answers.length).toEqual(10)
    expect(testGame.answers).not.toEqual(testGame.pictures)
  });

  it('should let a user guess a card and show us that card', function() {
    var testGame = new Memory();
    testGame.shufflePictures();
    testGame.guess1("back0");
    expect(testGame.displayBoard[0]).not.toEqual("back0");
  })

  it('should let a user guess a second card, advance turn count and either keep revealed or hide the cards depending on match', function() {
    var testGame = new Memory();
    testGame.shufflePictures();
    testGame.guess1("back7");
    testGame.guess2("back2");
    expect(testGame.turnsUsed).toEqual(1);
    if(testGame.match === false) {
      expect(testGame.displayBoard).toEqual(testGame.gameBoard);
    } else {
      expect(testGame.displayBoard[7]).toEqual(testGame.displayBoard[2]);
    }
  })


})
