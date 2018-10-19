
var words = ["halloween", "scream", "suspiria", "carrie", "hellraiser", "poltergeist", "psycho", "maniac"];
var word;
var answer;
var wins = 0;
var guessedLetters = [];
var guessesLeft;
//run this function when page start to load underscores

function newGame(event) {

//word bank

//random word from bank
word = words[Math.floor(Math.random() * words.length)];
//answer array
answer = [];

guessedLetters = [];
guessesLeft = 12;

console.log(word);
    for (var i = 0; i < word.length; i++) {
        answer.push("_");

    }
    //run this when user presses a key to log the key. 
    
    // DOM
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#currentWord").innerHTML = answer.join(" ");
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");


}

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();


    //check if userGuess is in the word.
    var letterFound = false;
    for (var i = 0; i < word.length; i++) {

        if (word[i] === userGuess) {
            answer[i] = word[i];
            letterFound = true;

        }

    }


    if (letterFound === false) {
        guessedLetters.push(userGuess);
        guessesLeft--;
    }

    if (guessesLeft < 0) {
        alert("You Lose");
        guessesLeft = 12;
        newGame();
    }

    if (answer.join('') === word) {
        wins++;
        // alert("You Win")
        setTimeout(newGame, 1000);
    }

    document.querySelector("#currentWord").innerHTML = answer.join(" ");
    document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#wins").innerHTML = wins;




    //check if userGuess is not in word. 
    //   if (word.indexOf(userGuess) < -1) {
    //        guessedLetters.push(userGuess);



}


document.addEventListener("DOMContentLoaded", newGame);