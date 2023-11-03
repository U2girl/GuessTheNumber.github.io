/* 
Can you guess the number
Guess Numbers between 1 and 20
User types in a number and presses Guess
The User gets 5 chances and given hints
*/

function startGame() {
let userAgree = confirm("Welcome to Guess My Secret Number!  Click ok to start guessing!")
if(userAgree) {
    let computerNumber = Math.ceil(Math.random()*10)
    console.log(computerNumber)
    let counter = 0
    while(counter < 3) {
        let userGuess = prompt("You have 3 chances to guess My Secret Number.  If you guess correctly, I will grant you one wish!  Enter a number between 1 and 10.")
        if(userGuess == computerNumber) {
            alert("You guessed My Secret Number!  Close your eyes and whisper your desire 3 times. Your wish is my command.")
            break
        }

else if 
    (userGuess > computerNumber){
    alert("My Secret Number is LOWER.")
}

else  {
(userGuess < computerNumber)
    alert("My Secret Number is HIGHER.")
}

        // else {
        //     alert("Sorry! Wrong Number")
        // }
        counter += 1
          }

if(counter == 3) {
    alert("Only 3 Guesses Allowed.  My Secret Number was " + computerNumber +".  I am unable to grant you a wish.")
}
let playAgain = confirm("Play Again? Press Open Sesame.")
if(playAgain) {
    location.reload();
}
else {
    alert("Ok! Come back and play another time.")

}
}
else {
    alert("Ok! Come back and try to guess My Secret Number another time.")
}
}