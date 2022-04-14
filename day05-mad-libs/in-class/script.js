var userInput = [];

var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};


var madLibsAdjectivesMain = function (input) {
  var randomAdj;
  var madLib =
'"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
randomAdj +
' wife.';
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
    if (input == `create`){

      randomAdj = getRandomIndex(userInput.length);
      console.log(`User input is ${userInput}`); 
      output = randomAdj;
    }
    else{
      output = userInput.push(input); 
    }
    return output;
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
 if (input ==`normal`){
   mode = normal;
 }
 else if (input == `create`){
   mode = create;
 }

 

};

var adj = [];
var exclaim = [];
var noun = [];
var adverb = [];
var mode = `adj`

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
 if (input == 'adj'){
   mode = 'adj';
 }
 else if (input == 'exclaim'){
   mode = 'exclaim'
 }
 else if (input == 'noun'){
  mode = 'noun'
}
else if (input == 'adverb'){
  mode = 'adverb'
}

if (mode == 'adj'){
  var randomAdj = input[getRandomIndex(adj.length)];
}
else if (mode == 'exclaim'){
  var randomAdj = input[getRandomIndex(adj.length)];
}

};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};