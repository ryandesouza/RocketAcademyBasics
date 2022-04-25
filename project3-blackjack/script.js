var makeDeck = function () {
  // create the empty deck at the beginning
  var deck = [];

  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // make a variable of the current suit
    var currentSuit = suits[suitIndex];

    // loop to create all cards in this suit
    // rank 1-13
    var counter = 1;
    while (counter <= 13) {
      var rankCounter = counter;
      var cardName = rankCounter;

      // 1, 11, 12 ,13
      // for BlackJack only, change the card rank for the face cards to 10.
      if (cardName == 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        rankCounter = 10;
        cardName = 'jack';
      } else if (cardName == 12) {
        rankCounter = 10;
        cardName = 'queen';
      } else if (cardName == 13) {
        rankCounter = 10;
        cardName = 'king';
      }

      // make a single card object variable
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      // add the card to the deck
      deck.push(card);

      counter = counter + 1;
    }
    suitIndex = suitIndex + 1;
  }

  return deck;
};

var getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

var shuffleCards = function (cards) {
  var index = 0;

  while (index < cards.length) {
    var randomIndex = getRandomIndex(cards.length);

    var currentItem = cards[index];

    var randomItem = cards[randomIndex];

    cards[index] = randomItem;
    cards[randomIndex] = currentItem;

    index = index + 1;
  }

  return cards;
};




// Full deck
var deck = shuffleCards(makeDeck());


// Game State 
var START = 'START'; 
var CHECK_BLACKJACK = `CHECK BLACKJACK`;
var CONTINUE_GAME = 'CONTINUE GAME'; 
var RESTART_GAME = `RESTART GAME`; 
var PLAYER_TURN = `PLAYER TURN`; 
var DEALER_TURN = `DEALER TURN`; 

var DEALER_HIT = `DEALER HIT`; 
var PLAYER_HIT = `PLAYER HIT`; 
var PLAYER_STAND = `PLAYER STAND`; 
var CHECK_WINNER = `CHECK WINNER`; 
var gameState = START; 

var drawCardsStart = 2; 

var playerCardName = []; 
var playerCardSuit = []; 
var playerCardRank = []; 

var computerCardName = []; 
var computerCardSuit = []; 
var computerCardRank = []; 

var computerBlackjack = false; 
var playerBlackjack = false; 
var dealerNewScore; 
var playerTotalScore = 0; 
var computerTotalScore = 0; 
var playerScore = []; 
var playerFinalScore = []; 
var dealerFinalScore = []; 

// Helper function
var startGame = function(){

  for (index = 0; index < computerCardRank.length; index +=1){
    computerCardRank.pop(); 
  }
  for (index = 0; index < playerCardRank.length; index +=1){
    playerCardRank.pop(); 
  }

  for (var i = 0; i < drawCardsStart; i += 1) {
    var currPlayerCard = deck.pop();
    playerCardName.push(currPlayerCard.name); 
    playerCardSuit.push(currPlayerCard.suit);
    playerCardRank.push(currPlayerCard.rank);
  }

  for (var i = 0; i < drawCardsStart; i += 1) {
    var currComputerCard = deck.pop();
    computerCardName.push(currComputerCard.name);
    computerCardSuit.push(currComputerCard.suit);
    computerCardRank.push(currComputerCard.rank);

  }
  console.log(`Player cards = ${playerCardRank[0]}, ${playerCardRank[1]}`);
  console.log(`Computer cards = ${computerCardRank[0]}, ${computerCardRank[1]}`);
  gameState = CHECK_BLACKJACK; 
  return `Dealer card = ${computerCardName[0]} of ${computerCardSuit[0]} and ${computerCardName[1]} of  ${computerCardSuit[1]} <br> 
  Player card = ${playerCardName[0]} of ${playerCardSuit[0]} and ${playerCardName[1]} of  ${playerCardSuit[1]} <br> 
  `; 
}

var blackjackChecker = function (){
  if (computerBlackjack == true && playerBlackjack == true){
    

    if (playerCardRank[1] == '1' && playerCardRank[0] == `10` || playerCardRank[0] == '1' && playerCardRank[1] == `10`
    || playerCardRank[1] == '1' && playerCardRank[0] == `11` || playerCardRank[0] == '1' && playerCardRank[1] == `11`
    || playerCardRank[0] == '1' && playerCardRank[1] == `12` || playerCardRank[1] == '1' && playerCardRank[0] == '12'
    ||playerCardRank[0] == '1' && playerCardRank[1] == '13' || playerCardRank[1] == '1' && playerCardRank[0] == '13' ){
      playerBlackjack = true; 
      winner = `player`;   
      gameState = RESTART_GAME; 
      return `Player won blackjack <br> Press submit to play again`; 
    }

    else if (computerCardRank[0] == '1' && computerCardRank[1] == `12` || computerCardRank[1] == '1' && computerCardRank[0] == '12' 
    || computerCardRank[0] == '1' && computerCardRank[1] == '13' || computerCardRank[1] == '1' && computerCardRank[0] == '13'
    || computerCardRank[1] == '1' && computerCardRank[0] == `11` || computerCardRank[0] == '1' && computerCardRank[1] == `11`
    || computerCardRank[1] == '1' && computerCardRank[0] == `10` || computerCardRank[0] == '1' && computerCardRank[1] == `10`) {
      computerBlackjack = true; 
      winner = `dealer`; 
      gameState = RESTART_GAME; 
      return `Dealer won blackjack  <br> Press submit to play again`; 

    }

  return `It's a tie`;
  }
  if (computerBlackjack == false && playerBlackjack == false){
    gameState = CONTINUE_GAME; 
    return `No one won blackjack! Enter submit to continue playing`;
  } 
};

var continueGame = function(){
  var index = 0; 
  for (index = 0; index < playerCardRank.length; index +=1){
    playerTotalScore = playerTotalScore + Number(playerCardRank[index]); 
  }
  for (index = 0; index < computerCardRank.length; index +=1){  
    computerTotalScore = computerTotalScore + Number(computerCardRank[index]); 
  }
  console.log(`Player card rank: ${playerCardRank}`); 
  console.log(`Computer card rank: ${computerCardRank}`); 
  return `Computer total score = ${computerTotalScore} <br> 
  Player total score = ${playerTotalScore} <br> Player's turn: Enter HIT OR STAND`; 
}

var playerTurn = function(input){

  var playerNewScore = 0; 
  if (input == `HIT`){
    gameState = PLAYER_TURN; 
    var currPlayerCard = deck.pop();
    playerCardName.push(currPlayerCard.name); 
    playerCardSuit.push(currPlayerCard.suit);
    playerCardRank.push(currPlayerCard.rank);

    console.log(`0. Player card rank: ${playerCardRank}`);
    console.log(`Player card rank: ${playerCardRank}`); 

    for (index = 0; index < playerCardRank.length; index +=1){
      playerNewScore = playerNewScore + Number(playerCardRank[index]); 
      if (playerNewScore > '21'){
        gameState = DEALER_TURN; 
        return `TOO MUCH! Player total score is ${playerNewScore}. Dealer's turn.`; 
      }
    }
    return `Player total score is ${playerNewScore} <br> Enter HIT or STAND`;
  } 
  if (input == `STAND`){
    for (index = 0; index < playerCardRank.length; index +=1){
      playerNewScore = playerNewScore + Number(playerCardRank[index]); 
    }
    gameState = DEALER_TURN; 
  return `PLAYER STANDS ${Number(playerNewScore)}. <br> Press submit to view Dealer's score. `; 
  }


  else{
    return `Enter HIT or STAND.`;
  }
}

var dealerTurn = function(){
  var dealerNewScore = 0; 
  if (computerTotalScore < `17`){
    gameState = DEALER_HIT; 
    console.log(`${computerTotalScore}`); 
    return ` Dealer current score is ${computerTotalScore} and will proceed to HIT.`
  } 

  else if (computerTotalScore > `21`){
    gameState = CHECK_WINNER; 
    for (index = 0; index < computerCardRank.length; index +=1){
      dealerNewScore = dealerNewScore + Number(computerCardRank[index]); 
    }
    return `Dealer TOTAL SCORE IS ${dealerNewScore} <br>`;
  }
  else if (computerTotalScore >= `17` && computerTotalScore <= `21`){
    gameState = CHECK_WINNER; 
    for (index = 0; index < computerCardRank.length; index +=1){
      dealerNewScore = dealerNewScore + Number(computerCardRank[index]); 
    }
    return `Dealer STAND AT ${dealerNewScore} <br>`; 
  }

}

const reducer = (accumulator, curr) => accumulator + curr;

var dealerHit = function(){
  var dealerNewScore = computerCardRank.reduce(reducer); 

    console.log(computerCardRank.reduce(reducer)); 
    if (dealerNewScore < `17`){
      gameState == DEALER_HIT;
      var currDealerrCard = deck.pop();
      computerCardName.push(currDealerrCard.name); 
      computerCardSuit.push(currDealerrCard.suit);
      computerCardRank.push(currDealerrCard.rank);
      console.log(`Computer cards: ${computerCardRank}`)
      for (index = 2; index < computerCardRank.length; index +=1){
        dealerNewScore = dealerNewScore + Number(computerCardRank[index]); 
      }
      return `Dealer total score is ${Number(computerCardRank.reduce(reducer))} <br> Dealer needs to stand at 17. Press submit to view next card. `; 

    }
    else if (dealerNewScore >= '17' && dealerNewScore <= '21'){
      gameState = CHECK_WINNER;
      return `Dealer stands at ${dealerNewScore}`; 
    }

    else if (dealerNewScore >= '21'){
      gameState = CHECK_WINNER;
      return `Too much! Dealer score is ${dealerNewScore}`; 
    }
    
}

var dealerStand = function(){
  if (dealerNewScore > `21`){
    var dealerNewScore = 0; 
    gameState = CHECK_WINNER; 
  for (index = 0; index < computerCardRank.length; index +=1){
    dealerNewScore = dealerNewScore + Number(computerCardRank[index]); 
  }
  return `Dealer TOTAL SCORE IS ${dealerNewScore} <br>`;
  }
}

var checkWinner = function(){
// gameState = RESTART_GAME; 
  var playerNewScore = playerCardRank.reduce(reducer); 
  var dealerNewScore = computerCardRank.reduce(reducer); 
  if (dealerNewScore > playerNewScore && dealerNewScore < 21){
  
    return `Player's score = ${playerNewScore} <br> 
    Dealer score = ${dealerNewScore}
    <br> Result: Dealer wins.`; 
  }
  else if  (playerNewScore > dealerNewScore && playerNewScore < 21){

    return `Player's score = ${playerNewScore} <br> 
    Dealer score = ${dealerNewScore}
    <br> Player wins`; 
  }
  else if (playerNewScore == dealerNewScore){

    return `Player's score = ${playerNewScore} <br> 
    Dealer score = ${dealerNewScore}
    <br> It's a draw`; 
  }
  else if (playerNewScore > 21 && dealerNewScore >21){

    return `Player's score = ${playerNewScore} <br> 
    Dealer score = ${dealerNewScore}
    <br> It's a draw`; 
  }
}

var restartGame = function(){
  // console.log(`1. gameState = ${gameState}`); 
  deck = shuffleCards(deck);
  gameState = START; 
  return `Press submit to play new game`; 
}



var main = function (input) {
  
  if (gameState == START){
    gameState = CHECK_BLACKJACK; 
    return startGame(); 
  }

  if (gameState == CHECK_BLACKJACK){
    return blackjackChecker();
  }

  if (gameState == CONTINUE_GAME){
    gameState = PLAYER_TURN;  
   return continueGame(); 
  }

  if (gameState == PLAYER_TURN){
    return playerTurn(input); 
  } 

  if (gameState == DEALER_TURN){
    return dealerTurn(); 
  }

  if (gameState == DEALER_HIT){
    return dealerHit();
  }

  if (gameState == CHECK_WINNER){
    return checkWinner(); 
  }

  if (gameState == RESTART_GAME){
    console.log(`3. gameState = ${gameState}`); 
    return restartGame();
  }

};





