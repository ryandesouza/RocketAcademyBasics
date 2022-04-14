
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Loop over the suits array
  for ( var i = 0; i < suits.length; i += 1){
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for ( var rankCounter = 1; rankCounter <= 13 ; rankCounter += 1){
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        cardName = 'jack';
      } else if (cardName == 12) {
        cardName = 'queen';
      } else if (cardName == 13) {
        cardName = 'king';
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

var START = 'START';
gameState = START;

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
if (gameState == START){
  var shuffledDeck = shuffleCards(makeDeck()); 
  console.log(`${shuffledDeck}`); 
  return shuffledDeck[getRandomIndex]; 

}
};

// Initialise the card deck representation as an array of objects
var deck = [
  // card1,
  // card2,
  // ...
];

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(deck);

var moarCardsLowCardMain = function (input) {
  // Draw 2 cards from the top of the deck
  var computerCard = shuffledDeck.pop();
  var playerCard = shuffledDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var myOutputValue =
    "Computer had " +
    computerCard.name +
    " of " +
    computerCard.suit +
    ". Player had " +
    playerCard.name +
    " of " +
    playerCard.suit +
    ". ";

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  if (computerCard.rank < playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.";
    // Else if computer card rank is less than player card rank, player wins
  } else if (computerCard.rank > playerCard.rank) {
    myOutputValue = myOutputValue + "Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }

  // Return the fully-constructed output string
  return myOutputValue;
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};
