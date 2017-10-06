 

var computerChoice = ["Harry", "Hermione", "Ron", "Lucius", "Bellatrix",
 "Albus", "George", "Seamus", "Sybill", "Ginny",
  "Draco", "Minerva", "Lily", "James", "Hewhomustnotbenamed",
   "Luna", "Neville", "Nagini", "Arthur", "Fred"]

var wins = 0;

var losses = 0;

var guessesLeft = 7;

var underLines = 0;

var allGuesses = "";

var chosenName = computerChoice[Math.floor(Math.random() * computerChoice.length)];

	chosenName = chosenName.toUpperCase();
	console.log("computer chooses: " + chosenName);

	//input some code from other game online, with changes to my var names
	chosenName = chosenName.replace(/""/g, " _ ");
    console.log(chosenName);

// the computer has a name, so there should be number of underscores in the div 
//equal to characters in the name

	//aside: see what .split does.
	 var chosenArray = chosenName.split("");
	 var text = "";
	 var i;
	 for (i = 0; i < chosenArray.length; i++) {
	 	text = text + chosenArray[i] + " " + " "
	 }
	 console.log(text);



document.onkeyup = function(event) {

	var userGuess = event.key;
	userGuess = userGuess.toUpperCase();


	
	console.log("userGuess: " + userGuess);

	
	





}