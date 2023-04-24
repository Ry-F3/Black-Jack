function default_value() {
    let num1 = "";
    let num2 = "";
    let sum = "";
}

function startGame() {

    let reset = default_value();
    let num1 = Math.floor(Math.random() * 11) + 1; //number randomiser
    let num2 = Math.floor(Math.random() * 11) + 1;

    let sum = num1 + num2;

    const assignSum = (num1 = "") => { //finding odd and even numbers
        const isSumEven = num1 % 2 === 0;
        return isSumEven ? 'even' : 'odd';
    }

    console.log(assignSum(num1));

    if (assignSum(num1) === "odd") {
        sum = sum;
    } else {
        sum = sum;
    }

    console.log(sum);

    let message = "";

    let messageEl = document.getElementById("message-el");

    if (sum < 21) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
        if (sum >= 21) {
           resetGame()
        } else {
           sum = sum;
        }
    }

    let sumEl = document.getElementById("sum-el");
    console.log(sumEl);

    let cardEl = document.getElementById("card-el")

     messageEl.innerHTML = message;
     sumEl.innerHTML = "Sum: " + sum;

     cardEl.textContent = "Cards: " + num1 + " & " + num2;

}

console.log(messageEl);

function resetGame(){
    console.log("---------reset all value---------");
    reset = default_value();  
    document.getElementById('sum-el').innerHTML = "Sum: " + 0; 
    document.getElementById('card-el').innerHTML = "Cards: " + 0 + " " + "&" + " " + 0; 

}
