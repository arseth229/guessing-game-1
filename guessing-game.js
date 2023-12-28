const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askRange();

let secretNumber = 1;

function checkGuess (guess) {
    if (guess > secretNumber) {
        console.log('Too high.');
        return false;
    }
    if (guess < secretNumber) {
        console.log('Too low.');
        return false;
    }
    if (guess == secretNumber) {
        console.log('Correct!');
        return true;
    }
}

function askGuess () {
    rl.question('Enter a guess:', (answer) => {
        if (checkGuess(Number(answer))) {
            return console.log('You Win!');
        } else {
            return askGuess();
        }
    });
}

function askRange() {
    rl.question('Enter a min number:', (getMin) => {
        rl.question('Enter a max number:', (getMax) => {
            console.log(`I'm thinking of a number between ${getMin} and ${getMax}`);
            randomInRange(Number(getMin), Number(getMax));
        })
    })
}


function randomInRange (min, max) {
    secretNumber =  Math.floor(Math.random() * (max - min + 1)) + min; 
    return askGuess();
}












