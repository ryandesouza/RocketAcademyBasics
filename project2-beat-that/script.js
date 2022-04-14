<<<<<<< HEAD

var rollDice = function () {

  var randomDecimal = Math.random() * 6;

  var randomInteger = Math.floor(randomDecimal);

  var diceNumber = randomInteger + 1;

  return diceNumber;
};

//Game states 
var INTRODUCTION = 'INTRODUCTION'
var ROLL_DICE = 'ROLL DICE';
var CHOOSE_DICE_ORDER = 'CHOOSE DICE ORDER';
var CHANGE_TO_PLAYER_2 = 'CHANGE TO PLAYER 2';
var CHOOSE_DICE_ORDER_PLAYER_2 = 'CHOOSE DICE ORDER PLAYER 2';
var COMPARE_PLAYERS = `COMPARE PLAYERS`;
var CONTINUE_GAME = `CONTINUE GAME`; 
var LOWEST_COMBINE_NUMBDER = `LOWEST COMBINE NUMBDER`;
var AUTO_COMBINE_NUMBER = `AUTO COMBINE NUMBER`
var SCORE = `SCORE`

// init gameState 
var gameState = `INTRODUCTION`; 

var playerOne = [];
var playerTwo = [];
var playerOneCombine = []; 
var playerTwoCombine = []; 

var playerOneRollDice = function(){
  var playerNumber = `1`;
  counter = 0; 
  while (counter < 2){
    playerOne.push(rollDice());
    counter +=1; 
  }

  console.log(`Player One arrary is ${playerOne}`);
  var outputMessage = `Welcome Player ${playerNumber}. <br> 
  Your first number is: ${playerOne[0]}. <br> 
  Your second number is ${playerOne[1]}. <br> 
  Choose the order of your dice. <br>  <br>  Enter SCORE to check current leader. 
  <br>  <br> Enter LOWEST to change to lowest combined number mode. `
  return outputMessage;
}

var playerTwoRollDice = function(){
  var playerNumber = `2`;
  counter = 0; 
  while (counter < 2){
    playerTwo.push(rollDice());
    counter +=1; 
  }
 
  console.log(`Player Two arrary is ${playerTwo}`);
  var outputMessage = `Welcome Player ${playerNumber}. <br> 
  Your first number is: ${playerTwo[0]}. <br> 
  Your second number is ${playerTwo[1]}. <br> 
  Choose the order of your dice.<br>  
  `
  return outputMessage;
}

var introMessage = function(){
  console.log(`Game state = ${gameState}`);
  gameState == ROLL_DICE; 
  output = `Press submit to start game. <br> `; 
  return output; 
}



var main = function (input) { 
  if (gameState == INTRODUCTION){
    if (input == `SCORE`){
      gameState = SCORE;
      console.log(`Game state = ${gameState}`);
    }
    // else if (input == `LOWEST`){
    //   gameState = LOWEST_COMBINE_NUMBDER;
    //   console.log(`Game state = ${gameState}`);
    
    // }
    else {
      gameState = ROLL_DICE; 
    }
    return introMessage(); 
  }
  
  // PLAYER 1 STARTS
  if (gameState == ROLL_DICE){
    if (input == `SCORE`){
      gameState = SCORE;
      console.log(`Game state = ${gameState}`);
    }
    // else if (input == `LOWEST`){
    //   gameState = LOWEST_COMBINE_NUMBDER;
    //   console.log(`Game state = ${gameState}`);
    // }
    else{
      gameState = CHOOSE_DICE_ORDER;
    }
    
    
    return playerOneRollDice(); 
  }
  
  // Player 1 chooses dice order 
  if (gameState == CHOOSE_DICE_ORDER){
    console.log(`New game state: ${gameState}`);
    if (input == '1'){
      playerOneNumber = String(playerOne[0]) + String(playerOne[1]);
      playerOneCombine.push(playerOneNumber);
      gameState = CHANGE_TO_PLAYER_2;
      output = `Player 1 number is ${playerOneNumber}. <br> 
      Player 2 please press submit to generate your numbers `
      return output;
    }
    else if (input == '2'){
      playerOneNumber = String(playerOne[1]) + String(playerOne[0]);
      playerOneCombine.push(playerOneNumber);
      gameState = CHANGE_TO_PLAYER_2;
      output = `Player 1 number is ${playerOneNumber}. <br> 
      Player 2 please press submit to generate your numbers `
      return output;
    }
    else if (input == `SCORE`){
      gameState = SCORE;
    }
    else if (input == `LOWEST`){
      gameState = LOWEST_COMBINE_NUMBDER;
    }
    else{
      return `Invalid response, key in "1" or "2"`;
    }
  }

  // PLAYER 2 STARTS 
  if (gameState == CHANGE_TO_PLAYER_2){
    console.log(`Player 2 mode`);
    gameState = CHOOSE_DICE_ORDER_PLAYER_2;
    return playerTwoRollDice();
  }

// player 2 selects order 
  if (gameState == CHOOSE_DICE_ORDER_PLAYER_2){
    console.log(`New game state: ${gameState}`);
    if (input == '1'){
      gameState = COMPARE_PLAYERS;
      playerTwoNumber = String(playerTwo[0]) + String(playerTwo[1]);
      playerTwoCombine.push(playerTwoNumber);
      output = `Player 1 number is ${playerOneNumber}. <br>
      Player 2 number is ${playerTwoNumber}. <br>
      Press submit to find out who wins!`
      return output;
    }
    else if (input == '2'){
      gameState = COMPARE_PLAYERS;
      playerTwoNumber = String(playerTwo[1]) + String(playerTwo[0]);
      playerTwoCombine.push(playerTwoNumber);
      output = `Player 1 number is ${playerOneNumber}. <br>
      Player 2 number is ${playerTwoNumber}. <br>
      Press submit to find out who wins! `
      return output;
    }
    else if (input == `SCORE`){
      gameState = SCORE;
    }
   
    else{
      return `Invalid response, key in "1" or "2"`;
    }
  }

  // COMPARE WINNER
  if ( gameState == COMPARE_PLAYERS){
    if (Number(playerTwoNumber) < Number(playerOneNumber)){
      winner = `Player One`
      output = `The winner is ${winner}. <br> Player 1 number is ${playerOneNumber}. <br>
      Player 2 number is ${playerTwoNumber}. <br> `
      if (input == `SCORE`){
        gameState = SCORE;
      }
      else {
        gameState = CONTINUE_GAME; 
      }
      
      gameState = CONTINUE_GAME; 
      return output;
    }
    else if (Number(playerTwoNumber) > Number(playerOneNumber)){
      winner = `Player Two`
      output = `The winner is ${winner}. <br> Player 1 number is ${playerOneNumber}. <br>
      Player 2 number is ${playerTwoNumber}. <br> `
      
      gameState = CONTINUE_GAME; 
      return output;
    }
    else if (Number(playerTwoNumber) == Number(playerOneNumber)){
      winner = `Draw`
      output = `The result is a ${winner}. <br> Player 1 number is ${playerOneNumber}. <br>
      Player 2 number is ${playerTwoNumber}. <br> `
      
      gameState = CONTINUE_GAME; 
      return output;
    }
   
  }

  // CONTINUE GAME
  if (gameState == CONTINUE_GAME){
  counter = 0; 
  while (counter < 2){
    playerOne.pop();
    playerTwo.pop();
    counter +=1; 
  }
  gameState = ROLL_DICE;
    output = `Press submit to continue playing! <br> `; 
    return output; 
  }

// CHECK SCORE 
  if (gameState == SCORE){
    console.log(`Player 1 combined arrary is ${playerOneCombine}`)
    var index = 0; 
    let player1TotalScore = 0; 
    let player2TotalScore = 0; 
    for (index = 0; index < playerOneCombine.length; index +=1){
      player1TotalScore = player1TotalScore + Number(playerOneCombine[index]); 
      // console.log(`Player 1 total score = ${player1TotalScore}`);   
  }
  console.log(`Player 2 combined arrary is ${playerTwoCombine}`)
  for (index = 0; index < playerTwoCombine.length; index +=1){  
    player2TotalScore = player2TotalScore + Number(playerTwoCombine[index]); 
    // console.log(`Player 2 total score = ${player2TotalScore}`); 
  }
  if (player1TotalScore == 0 ||player2TotalScore == 0 ){
    gameState = CONTINUE_GAME; 

    return `KEEP ON PLAYING`;
  }
  else if (player1TotalScore < player2TotalScore){
    winner = `Player 2`; 
  }
  else if (player1TotalScore > player2TotalScore){
    winner = `Player 1`; 
  }
  
  output = `===   LEADERBOARD   === <br>
  The current leader is ${winner}. <br> Player 1 has a score of ${player1TotalScore} <br> Player 2 has a score of ${player2TotalScore} <br> 
  Press submit to continue playing`;
  gameState = CONTINUE_GAME; 
  return output; 

  }

  // Lowest Combined Number Mode
  if (gameState = LOWEST_COMBINE_NUMBDER) {
  
    var index = 0; 
    let player1TotalScore = 0; 
    let player2TotalScore = 0; 
    for (index = 0; index < playerOneCombine.length; index +=1){
      player1TotalScore = player1TotalScore + Number(playerOneCombine[index]); 
    
    for (index = 0; index < playerTwoCombine.length; index +=1){  
      player2TotalScore = player2TotalScore + Number(playerTwoCombine[index]); 
    }

    if (player1TotalScore == 0 ||player2TotalScore == 0 ){
      gameState = CONTINUE_GAME; 
  
      return `KEEP ON PLAYING`;
    }
    else if (player1TotalScore < player2TotalScore){
      winner = `Player 1`; 
    }
    else if (player1TotalScore > player2TotalScore){
      winner = `Player 2`; 
    }
    output = `===   LEADERBOARD (Reversed)   === <br>
    The current leader is ${winner}. <br> Player 1 has a score of ${player1TotalScore} <br> Player 2 has a score of ${player2TotalScore} <br> Press submit to continue playing`;
  gameState = CONTINUE_GAME; 
  return output; 
}
  
}  
  
// Auto-Generate Combined Number
if (gameState == AUTO_COMBINE_NUMBER){
  
}



};
>>>>>>> 57d1c1b1392abbf5cd79550c6129b7c7cb2c3399
