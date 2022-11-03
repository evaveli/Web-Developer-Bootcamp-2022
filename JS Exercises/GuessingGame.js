
let maxNum = parseInt(prompt("Welcome! Enter your max number"));
while (!maxNum) {
    let maxNum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maxNum) + 1;
let attemps = 1;

let guess = parseInt(prompt("Enter the first guess:"));

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        break;
    }
    attemps++;
    if (guess > targetNum) {
        guess = prompt("Too high , enter a new guess :");
    }
    else {
        guess = prompt("Too low, enter a new guess :");
    }
}
if (guess === 'q') {
    console.log("OK , YOU QUIT!");
}

console.log(`YOU GOT IT. IT TOOK YOU ${attemps} GUESSES`);


