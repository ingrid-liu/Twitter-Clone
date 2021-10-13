// alert('Hello World!');

// console.log('Hello World!');

global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;


console.log('Variables and constants');
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

console.log('\t');

console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);


console.log('Boolean');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;

console.log('\t');
console.log('If else');
if(true1) {
    console.log(true);
}
if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log('\t');
console.log('Ternary');
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);

console.log('\n');
console.log('Functions');
console.log('Legacy ES5 function');
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log('a + b = ' + twoPlusFour);

console.log('\t');
console.log('New ES6 functions');
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log('a - b = ' + threeMinusOne);

console.log('\t');
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
// console.log(fourTimesFive);
console.log('a * b = ' + fourTimesFive);



console.log('\n');

console.log('write a function by myself to practice');
let division = (a , b) => {
    return a/b;
}

let ceil = (a, b) => {
    return Math.ceil(a/b)
}
let floor = (a, b) => {
    return Math.floor(a/b)
}
let fiveDividesTwo = division(5, 2);
let ceilNum = ceil(5, 2);
let floorNum = floor(5, 2);
console.log(fiveDividesTwo);
console.log(ceilNum);
console.log(floorNum);

console.log('\t');

const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log('\t');

let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];

// var functionScoped = 2;
//let blockScoped = 5;
//const constant1 = global1 + functionScoped - blockScoped;      -------7


console.log('Arrays');
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);
// console.log(variableArray1[0]);
// console.log(variableArray1[1]);
// console.log(variableArray1[2]);
// console.log(variableArray1[3]);
// console.log(variableArray1[4]);


console.log('\t');
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log('Array index and length');
console.log(length1);
console.log(index1);

console.log('\nAdd and remove data to arrays');
console.log('original arrays');
console.log(numberArray1);
console.log(stringArray1);
console.log('after adding');
// adding new items
numberArray1.push(6);
stringArray1.push('string3');
console.log(numberArray1);
console.log(stringArray1);

console.log('after removing');
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);


console.log('\t');
console.log('For loops');
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}


console.log('\t');
console.log('Map');
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log(squares);
console.log(cubes);
console.log('👍 Wow-oh! Javascript is sooooo amazing!!');

console.log('\t')
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log(four)
console.log(string3)







