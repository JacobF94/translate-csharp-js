// Put your code here

console.log("Let's roll some dice!")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let index = 0; index < 10; index++) {
    const diceOne = getRandomInt(1, 6);
    const diceTwo = getRandomInt(1, 6);

    if (diceOne === diceTwo) {
        console.log(`Wow you got doubles! ${diceOne} plus ${diceTwo} = ${diceOne + diceTwo}`)
    } else {
        console.log(`${diceOne} plus ${diceTwo} = ${diceOne + diceTwo}`)
    }
}