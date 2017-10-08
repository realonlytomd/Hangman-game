 

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

	//tried .replace to change name to underscores - not working
	//chosenName = chosenName.replace(/" "/g, " _ ");
    //console.log(chosenName);

// the computer has a name, so there should be number of underscores in the div 
//equal to characters in the name

	//aside: see what .split does. I can change the chosenName to an array, here spaced out by 2.
	 var chosenArray = chosenName.split("");
	 	console.log(chosenArray);
	 
	 var chosenNameUnderlines = chosenArray.fill(" _ ");

		console.log(chosenNameUnderlines);

		var underLinesText = "";
		var i;
		for(i = 0; i< chosenNameUnderlines.length; i++) {
			underLinesText += chosenNameUnderlines[i] + "    " + "    " 
		}

		document.getElementById("underlines").innerHTML = underLinesText;

// use onkeyup function for user to select a letter - works.

document.onkeyup = function(event) {

	var userGuess = event.key;
	userGuess = userGuess.toUpperCase();
	
	console.log("userGuess: " + userGuess);


	 // Create allGuesses ul - from online example, with my variables, of course
   result = function () {
    wordHolder = document.getElementById('underlines');
    correct = document.createElement('ul');

    for (var i = 0; i < chosenName.length; i++) {
      correct.setAttribute('id', 'my-word');
      userGuess = document.createElement('li');
      userGuess.setAttribute('class', 'userGuess');
      if (chosenName[i] === "-") {
        userGuess.innerHTML = "-";
        space = 1;
      } else {
        userGuess.innerHTML = "_";
      }

      allGuesses.push(userGuess);
      wordHolder.appendChild(correct);
      correct.appendChild(userGuess);
    }
  }
// But this is pretty pointless because I don't really understand all their code.
// What I want is: 
//at this point, computer has chosen a name
//I get the div - underlines
// make a ul, with inline li,  of a row of underlines equal to the number of characters in the chosen name.
//as the user pics a letter, compare it to each character - if get a -1, and count down a chance.
//if they get a letter, rewrite the li so that the underlines are still there, except for when
// that user choice letter shows up.
// if they get all the letters, increase win by one.
//game resets
// if they never get the all the letters in 7 tries:
//losses increase by one, and game resets.


// same if user loses code as in psychic game, in this game - guessesLeft set to 7
// and a new name is chosen.

if (guessesLeft === 0) {
		losses++;
		console.log("User losses: " + losses);
		guessesLeft = 7;
		allGuesses = "";
		chosenName = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	}
	
	

}