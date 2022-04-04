var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};


// Track the previous dice roll value
var prevDiceRoll = 0;
// Track the user's running score
var score = 0;
// Track number of games won
var numGamesPlayed = 0;
// Track number of losses
var numGamesWon = 0;

// Track the frequency of dice rolls for each dice value
var diceVal1Freq = 0;
var diceVal2Freq = 0;
var diceVal3Freq = 0;
var diceVal4Freq = 0;
var diceVal5Freq = 0;
var diceVal6Freq = 0;

/**
 * Set a function that returns the value of a dice roll
 */
var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

/**
 * Set a function that displays info about the previous dice roll
 */
var getPrevDiceRollInfo = function () {
  // Handle the scenario where this is the first roll and hence there isn't a previous roll value.
  if (prevDiceRoll == 0) {
    return 'This was your first roll. ';
  }
  // Since this is not the first roll, display the previous roll's value to the user
  return 'Your previous roll was ' + prevDiceRoll + '.';
};

/**
 * @param {number} diceNum
 * @param {number} userGuess
 * Determine the score increment depending on how far off the guess was from the dice roll
 */
var determineScoreincrement = function (diceNum, userGuess) {
  // If the roll and the guess are the same value, set the increment at 5
  if (diceNum == userGuess) {
    return 5;
  }
  // Else set the respective increments depending on how far the guess deviates from the roll
  // Explanation of <else if> (used below): We can use the <else if> statement to specify a new condition if the first condition is false. The key difference between 1. A series of <if> blocks, and 2. A series of <if><else if> blocks, is that the computer recognises the latter as mutually exclusive blocks of code. This means that, for <if><else if> blocks, once the computer finds an if statement that evaluates to true, it will run that block of code and thereafter skip the other <else if> blocks of code (as opposed to scanning all the other <else if> statments to see if they are true.
  // See unit 8.2 for more elaboration on <Else if>.
  else if (diceNum == userGuess + 4 || diceNum == userGuess - 4) {
    return 1;
  } else if (diceNum == userGuess + 3 || diceNum == userGuess - 3) {
    return 2;
  } else if (diceNum == userGuess + 2 || diceNum == userGuess - 2) {
    return 3;
  } else if (diceNum == userGuess + 1 || diceNum == userGuess - 1) {
    return 4;
  }
};
/**
 * Calculate how many times the user wins out of the total number of games he plays
 */
var getWinRateInfo = function () {
  var winRate = Math.floor((numGamesWon / numGamesPlayed) * 100);
  return 'You win ' + winRate + '% of the time.';
};
/**
 * Increase the frequency of the relevant dice roll
 * @param {number} diceRoll
 */
var incrDiceRollFreq = function (diceRoll) {
  if (diceRoll == 1) {
    diceVal1Freq += 1;
  } else if (diceRoll == 2) {
    diceVal2Freq += 1;
  } else if (diceRoll == 3) {
    diceVal3Freq += 1;
  } else if (diceRoll == 4) {
    diceVal4Freq += 1;
  } else if (diceRoll == 5) {
    diceVal5Freq += 1;
  } else if (diceRoll == 6) {
    diceVal6Freq += 1;
  }
};

/*
 * Set a fn that returns information about the most rolled dice val
 */
var getMostFreqRolled = function () {
  if (
    diceVal1Freq > diceVal2Freq &&
    diceVal1Freq > diceVal3Freq &&
    diceVal1Freq > diceVal4Freq &&
    diceVal1Freq > diceVal5Freq &&
    diceVal1Freq > diceVal6Freq
  ) {
    return 'You roll 1 most often';
  } else if (
    diceVal2Freq > diceVal1Freq &&
    diceVal2Freq > diceVal3Freq &&
    diceVal2Freq > diceVal4Freq &&
    diceVal2Freq > diceVal5Freq &&
    diceVal2Freq > diceVal6Freq
  ) {
    return 'You roll 2 most often';
  } else if (
    diceVal3Freq > diceVal1Freq &&
    diceVal3Freq > diceVal2Freq &&
    diceVal3Freq > diceVal4Freq &&
    diceVal3Freq > diceVal5Freq &&
    diceVal3Freq > diceVal6Freq
  ) {
    return 'You roll 3 most often';
  } else if (
    diceVal4Freq > diceVal1Freq &&
    diceVal4Freq > diceVal2Freq &&
    diceVal4Freq > diceVal3Freq &&
    diceVal4Freq > diceVal5Freq &&
    diceVal4Freq > diceVal6Freq
  ) {
    return 'You roll 4 most often';
  } else if (
    diceVal5Freq > diceVal1Freq &&
    diceVal5Freq > diceVal2Freq &&
    diceVal5Freq > diceVal3Freq &&
    diceVal5Freq > diceVal4Freq &&
    diceVal5Freq > diceVal6Freq
  ) {
    return 'You roll 5 most often';
  } else if (
    diceVal6Freq > diceVal1Freq &&
    diceVal6Freq > diceVal2Freq &&
    diceVal6Freq > diceVal3Freq &&
    diceVal6Freq > diceVal4Freq &&
    diceVal6Freq > diceVal5Freq
  ) {
    return 'You roll 6 most often';
  }
  // else handle scenario where there isn't a most frequently rolled dice num
  return "You don't have a most-rolled dice";
};

/**
 * @param {string} input
 * Determine the score increment depending on how far off the guess was from the dice roll
 */
var main = function (input) {
  // Change user input from a string to a number; then, assign it to a variable so it's more intuitive to reference.
  var userGuess = Number(input);

  // Validate input: if user input was larger than 6, instruct user to put in numbers from 1-6
  if (userGuess > 6 || userGuess < 1) {
    return 'Please enter a number from 1 to 6';
  }

  // increase the number of games played
  numGamesPlayed += 1;

  // roll the dice to get a value
  var randomDiceNumber = rollDice();

  // increase the frequency of the roll, depending on what randomDiceNumber is
  incrDiceRollFreq(randomDiceNumber);

  // Set the display message for the most frequently rolled dice
  var mostFreqRolledDiceInfo = getMostFreqRolled();

  // Set a fn that returns a string containing information about the previous dice roll
  var prevDiceRollInfo = getPrevDiceRollInfo();

  // update prevDiceRoll with the current dice roll
  prevDiceRoll = randomDiceNumber;

  // Get display message about the win rate
  var winRateInfo = getWinRateInfo();

  // Set the display message for the scenario where the user doesnt't win
  var myOutputValue =
    winRateInfo +
    mostFreqRolledDiceInfo +
    '<br><br>' +
    prevDiceRollInfo +
    'You just rolled a ' +
    randomDiceNumber +
    '. You guessed ' +
    input +
    ". You didn't win any points. <br><br> Your score: " +
    score;

  // Check if the user won; Consider it a win if the difference btw userGuess and the rolled num is at most 4
  if (
    (userGuess >= randomDiceNumber && userGuess <= randomDiceNumber + 4) ||
    (userGuess <= randomDiceNumber && userGuess >= randomDiceNumber - 4)
  ) {
    // Increase the number of games won
    numGamesWon += 1;
    // Recalculate the win rate and get a new display message about the win rate
    winRateInfo = getWinRateInfo();

    // determine the increment amt and update the score accordingly
    var increment = determineScoreincrement(randomDiceNumber, userGuess);
    score += increment;

    // Set the display message for the scenario where the user doesnt't win
    //Notice that we are re-assigning myOutputValue with a new value (i.e. a win msg) that replaces the old value (i.e. a lose msg). This is because line 73 alr assigns a value to myOutputValue, but now we want to replace that value since it is a win instead of a loss.
    myOutputValue =
      winRateInfo +
      mostFreqRolledDiceInfo +
      '<br><br>' +
      prevDiceRollInfo +
      ' You just rolled a ' +
      randomDiceNumber +
      '. You guessed ' +
      input +
      '. You win ' +
      increment +
      ' points! <br><br> Your score: ' +
      score;
  }

  return myOutputValue;
};