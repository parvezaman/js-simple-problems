var userName = prompt("Hello there!!! Input your name before starting the game:");

var userWon = 0;
var userLost = 0;

for (let i = 0; i<5; i++){
    var userNumber = parseInt(prompt("Guess any Number between 1-5"));

    var randomNumber = Math.floor(Math.random()*5+1);

    if (randomNumber == userNumber){
        console.log("Congratulations!!! You guessed the correct number!");
        userWon++;
    }
    else{
        console.log("Oops! Sorry champ, the correct number was ", randomNumber);
        userLost++;
    }
}
document.write('so! ', userName, ' here is your score!!! <br> <br> <br>');
document.write('you guessed right ', userWon, ' times <br>');
document.write('you guessed wrong ', userLost, ' times <br>');