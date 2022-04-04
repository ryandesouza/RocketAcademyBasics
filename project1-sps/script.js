var win = 0;
var draw = 0;
var lose = 0;
var numberOfGames = 0;

var main = function (input) {
  var computerGuess = rollDice();

  if (computerGuess != 0) {
    numberOfGames += 1;
    var winPercent = Math.floor((win / numberOfGames) * 100);
    var drawPercent = Math.floor((draw / numberOfGames) * 100);
    var LosePercent = Math.floor((lose / numberOfGames) * 100);
    console.log(`The number of games played is ${numberOfGames}`);
  }

  if (computerGuess == 1) {
    output = `scissors`;

    if (input == output) {
      draw += 1;
      result = `The computer chose ${output}. You chose ${input}. The result is: Draw. The draw percentage is ${drawPercent} %`;
    } else if (input == "paper") {
      lose += 1;
      result = ` The computer chose ${output}. You chose ${input}. The result is: Lose. The lose percentage is ${LosePercent} %`;
    } else {
      win += 1;
      result = ` The computer chose ${output}. You chose ${input}. The result is: Win. The win percentage is ${winPercent} %`;
    }
  } else if (computerGuess == 2) {
    output = `paper`;
    if (input == output) {
      draw += 1;
      result = `The computer chose ${output}. You chose ${input}. The result is: Draw. The draw percentage is ${drawPercent} %`;
    } else if (input == "scissors") {
      win += 1;
      result = `The computer chose ${output}. You chose ${input}. The result is: Win. The win percentage is ${winPercent} %`;
    } else {
      lose += 1;
      result = `The computer chose ${output}. You chose ${input}. The result is: Lose. The lose percentage is ${LosePercent} %`;
    }
  } else {
    output = `stone`;
    if (input == output) {
      draw += 1;
      result = `The computer chose ${output}. You chose ${input}. The result is: Draw. The draw percentage is ${drawPercent} % `;
    } else if (input == "paper") {
      win = win + 1;
      result = `The computer chose ${output}. You chose ${input}. The result is: Win. The win percentage is ${winPercent} %`;
    } else {
      lose += 1;
      result = `The computer chose ${output}. You chose ${input}. The result is: Lose. The lose percentage is ${LosePercent} %`;
    }
  }

  // Track number of wins, draws, loss
  console.log(`The number of wins is ${win}`);
  console.log(`The number of draws is ${draw}`);
  console.log(`The number of losses is ${lose}`);

  return result;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// user inputs one of "scissors", "paper", or "stone"
// the program internally randomly chooses scissors, paper, or stone
//  the program outputs whether the user won, the program won, or it's a draw.
