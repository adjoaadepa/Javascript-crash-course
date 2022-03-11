/**
 * storing of data
 * declaring variables
 * let -> let
 * const -> constant
 * var ** -> variable
 * data types
 * String " " ' '
 * Number
 * Boolean
 * Undefined / null
 * Array
 * Object
 */

//storing of data
let studentOne = "Shirley";

//declaring variables
/**
 * firstName, multiTierNo
 * LastName -> classes
 */
let days = 21;
    days = 80;
const me = "nice";

//Data Types
//Strings
let myFruits = "Mango and Banana";

//Number
let num = 97;

//Boolean true/false
/**
 * + , -, *, / , >, <
 * 
 * ! - not
 * === - equal
 * !== - not equal
 * +=, -= , *=, /=, 
 * || - OR
 * && - and
 */

let a= 1
let b=2
let c = a !== b;
console.log(c);

let exp = (22 < 10) && ("food" === "food");
console.log(exp);

let n = (35 >= 34) || ("rice" === "is a food");

//Array
let sets = [];
sets[0] = "car"; //adding an item 
sets[1]="big";
sets[2]="hen";
sets [2] = "cow"; //update an item
console.log(sets);

let arr = ["apple","strawberry","pear","guava" ];
console.log(arr);

//push
arr.push("orange");
console.log(arr);
//pop
arr.pop();
console.log(arr);

//unshift
arr.unshift("grapes");
console.log(arr);

//shift
arr.shift()
console.log(arr);

//includes
console.log(arr.includes("pear"));

//splice
arr.splice(0, 2, "banana", "mango");
console.log(arr);

arr.splice(0, 0, "rice", "maize")
console.log(arr);

//slice
let newArr = arr.slice(0, 4);
console.log(newArr);

//udefined
// console.log(read);

//Object key:value
let objt = {name: "Shirley", age: 12, gender: "female"};
console.log(objt);

//accessing object properties
console.log(objt.name);
console.log(objt.age);
console.log(objt.gender);

objt.age = 16; //update properties
console.log(objt);

objt.location = "UCC, Ayensu"; //adding 
console.log(objt);

