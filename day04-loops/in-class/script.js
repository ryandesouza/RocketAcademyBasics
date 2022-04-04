var emojiNumberCharactersMain = function (input) {
  var counter = 0; 
  var myOutputValue = '';
  while (counter < input){
    myOutputValue = myOutputValue + '👍🏻';
    counter=counter+1;
  }
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = '';
  
  // Initialise the outer counter, rowCounter
  var rowCounter = 0;
  
  while (rowCounter < input) {
  
      // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;
    
    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
    
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + '👍🏻';
      columnCounter = columnCounter + 1;
    }
    
    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + '<br>';
    rowCounter = rowCounter + 1;
  }
  
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};




var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = '';
  
  // Initialise the outer counter, rowCounter
  var rowCounter = 0;
  
  while (rowCounter < input) {
  console.log(`Row counter = ${rowCounter}`);
      // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;
    
    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter <= rowCounter) {
      console.log(`Column counter = ${columnCounter}`);
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + '👍🏻';
      columnCounter = columnCounter + 1;
    }
    
    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + '<br>';
    rowCounter = rowCounter + 1;
  }
  
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = '';
  
  // Initialise the outer counter, rowCounter
  var rowCounter = 0;
  
  while (rowCounter < input) {
  
      // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;
    
    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
    
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + '👍🏻';
      columnCounter = columnCounter + 1;
    }
    
    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + '<br>';
    rowCounter = rowCounter + 1;
  }
  
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};