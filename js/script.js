// Stage 1

function calculateInvoice (priceA, priceB, priceC) {
    let sum = priceA + priceB + priceC;
    console.log(`The whole prices from stage 1: ${sum}$.`);
}

calculateInvoice(300,200,150);

// Stage 2

function calculateInvoice (priceA, priceB, priceC) {
    let sum = priceA + priceB + priceC;
    console.log(`The whole prices from stage 2: ${sum}$.`);
}

calculateInvoice(249,300,200);

// Stage 3

function calculateInvoice (priceA, priceB, priceC) {
    let sum = priceA + priceB + priceC;
    console.log(`The whole prices from stage 2: ${sum}$.`);
}

calculateInvoice(120,249,280);

// Customer

const customerPrice = (function calculateInvoice(band1, band2, band3) {
    return band1 + band2 + band3;
})(300, 249, 120);

console.log(`Your price to pay: ${customerPrice}$`);

// Event prices

var a = 300 + 200 + 150;
var b = 249 + 300 + 200;
var c = 120 + 249 + 280;
let sum = Math.floor(a + b + c)

console.log(`Whole prices of the event: ${sum}`);

// Student prices

//First option

const studentInvoice = (band1, band2, band3) => {
    const rabatt = 0.1;
    const sum = band1+band2+band3;
    return sum - sum*rabatt;
}
const student = studentInvoice(300,200,150);
console.log(`You have -10% price! You need to pay only: ${student}$ for tickets!`);

//Second option

const studentInvoiceB = (band1, band2, band3) => {
    const rabatt = 0.1;
    const sum = band1+band2+band3;
    return sum - sum*rabatt;
}
const studentB = studentInvoiceB(249,120,200);
console.log(`You have -10% price! You need to pay only: ${studentB}$ for tickets!`);

//Third option

const studentInvoiceC = (band1, band2, band3) => {
    const rabatt = 0.1;
    const sum = band1+band2+band3;
    return sum - sum*rabatt;
}
const studentC = studentInvoiceC(120,280,249);
console.log(`You have -10% price! You need to pay only: ${studentC}$ for tickets!`);

///






