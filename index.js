// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
let cards = []

function writeCards() {
    let event = "surprise";
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown() {
    let count = 10;
    while (count > -1) {
        console.log(count--);
    }
}
