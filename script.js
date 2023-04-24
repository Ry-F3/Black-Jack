let firstCard = Math.floor(Math.random() * 11) - 1;
let secondCard = Math.floor(Math.random() * 11) + 2;

let sum = (firstCard + secondCard);
console.log(sum);

let hasBlackJack = false;

let isAlive = true;



const assignSum = (firstCard= "") => {
   const isSumEven = firstCard % 2 === 0;
   return isSumEven ? 'even' : 'odd';
}

console.log(assignSum(firstCard));

if (assignSum(firstCard) === "odd"){
  sum = sum + 2;
} else {
  sum = sum + 5;
}

console.log(sum)

let message = "";

if (sum < 21) {
    let message = "Do you want to draw another card?";
} else if (sum === 21) {
    let message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
} else {
    let message = "You're out of the game!";
    isAlive = false;
}

console.log(isAlive);

//cash out

console.log(hasBlackJack);


