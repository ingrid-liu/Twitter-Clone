let someObject = {
    anObjectProperty: {
        anotherObjectProp: {q: 111, w: 222},
        anotherArrayProp: [321, 432, 543]
    },
    aNumberArrayProp: [1, 2, 3],
    anObjectArrayProp: [
        {a: 123, b: 234},   {a: 321, b: 432}]}

console.log(someObject.anObjectProperty
    .anotherArrayProp[2]) // ==> 543

// variable => function

const addEs6 = (a, b) => a + b;
const squareEs6 = b => b * b

// this
// this.nums.forEach((v) => {
//     if (v % 5 === 0)
//         this.fives.push(v)
// })

// Default Parameters
const f = (x, y = 7, z = 42) => {
    return x + y + z;
}
console.log(f(1) === 50);
// todo how should I implement this function by passing 1 as above

//filter
let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = all.filter((i) => { return i % 2 === 0 })
let odd  = all.filter(i => i % 2 !== 0)


let array = [ 1, 3, 4, 2, 5 ]
array.find(x => x > 3) 				// ⇒ 4
array.findIndex(x => x > 3) 		// ⇒ 2
array.filter(x => x > 3) 			// ⇒ [4, 5]


var customer = { name: "Alice" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message)


// deconstructing
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
    [ b, a ] = [ a, b ]

var { a, c } = tmp


function h (arg) {
    var name = arg.name
    var val  = arg.val
    console.log(arg.name, arg.val)
}
h({ name: "bar", val: 42 })


//Exporting and Importing
//  lib/math.js
export function sum (x, y) { return x + y }
export var pi = 3.141593
//  someApp.js
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))
// //  otherApp.js
// import { sum, pi } from "lib/math"
// // todo 2. why there is an error in the import syntax?
// console.log("2π = " + sum(pi, pi))


// Default & Wildcard
//  lib/mathplusplus.js


// export * from "lib/math"
// export var e = 2.71828182846
// export default (x) => Math.exp(x)
// //  someApp.js
// import exp, { pi, e } from "lib/mathplusplus"
// console.log("e^{π} = " + exp(pi))



// class

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)}
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)  // must be first line in constructor
        this.width  = width
        this.height = height
    }}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }}

// class Rectangle {
//     constructor (width, height) {
//         this._width  = width
//         this._height = height}
//     set width  (width)  	{ this._width = width               }
//     get width  ()       	{ return this._width                }
//     set height (height) 	{ this._height = height             }
//     get height ()       	{ return this._height               }
//     get area   ()       		{ return this._width * this._height }}
// var r = new Rectangle(50, 20);
// r.area === 1000;


//Static Members
// class Rectangle extends Shape {
//     // ...
//     static defaultRectangle () {
//         return new Rectangle("default", 0, 0, 100, 100)
//     }
// }
// var defRectangle = Rectangle.defaultRectangle()



class Shape {
    toString () {
        return `Shape(${this.id})` }}
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y) }
    toString () {
        return "Rectangle > " + super.toString()}}




