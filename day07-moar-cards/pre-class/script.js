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

var deck = [
  // card1,
  // card2,
  // ...
];

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(deck);

var followObjectsMain = function (input) {
  // Attempt the Follow Along exercise from the Objects module below with followObjectsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var highestCardsMain = function (input) {
  // Attempt the Highest of 2 Cards exercise from the Objects module below with highestCardsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var followCreatingMain = function (input) {
  // Attempt the Follow Along exercise from the Creating Objects with Loops module below with followCreatingMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};