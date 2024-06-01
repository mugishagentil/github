// 1.// Find if number in array is even number
let numbers = [1,2,3,4,5,6,7,8,10,12];
function evenNum(number){
  if(number % 2 == 0){
    return true
  }
}
let result = numbers.filter(evenNum)
console.log(result)

// 2.// check a length of one string in array
let Names = ["Urban","Gentil", "Muhoza", "Gedeon", "Jerome", "bae"];
function checkString(name){
    if(name.length < 4){
        return true
    }
}
let checkedName = Names.filter(checkString);
console.log(checkedName);

// 3.// a question to find if number is >< by using filter string method
const age = [12,13,14,16,18,10,25,27,28,29,30,40];
let filteredNumber = age.filter(function Myfilter(number){
    return number > 18;
})
console.log(filteredNumber);
// 4.// eazy way
const age = [1,2,3,4,5,6,7,8,9,10];
const result = age.filter(value => value % 2 == 0)
console.log(result)

// 5.// question to find a Sum of array 
const numbers = [10, 10, 10, 10, 10];
let num = 0;
for(let i = 0; i < numbers.length; i++){
    num += numbers[i];
}
console.log(num)

// 6.Implement a function which convert the given boolean value into its string representation.
function booleanToString(value) {
  // Check if the value is true or false
  if (value === true) {
      return "true";
  } else if (value === false) {
      return "false";
  } else {
      return "Invalid input"; // If input is not a boolean
  }
}
console.log(booleanToString(true));

// 7.Make a function that will return a greeting statement that uses an input; your program should return,
function greet(name){
  return "Hello, " + name + " how are you doing today?";
}
console.log(greet("Gentil"))

// 8.Write a JavaScript program to extract the first half of a even string.
function sliceString(arr){
  if(arr.length % 2 === 0){
    return arr.slice(0, arr.length /2)
  }return arr;
}
console.log(0, sliceString("Gentil"))


function greaterThan4(x){
  return x > 4
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(greaterThan4(number))
// square of all elements in a given array

const array = [2, 5, 9];
let squares = array.map((num) => num * num);

console.log(squares); // [4, 25, 81]
console.log(array); // [2, 5, 9]

// Extracting values from an array of objects

const girls = [
  {name: 'Sarah', age: 19},
  {name: 'Laura', age: 10},
  {name: 'Jessy', age: 29},
  {name: 'Amy', age: 23}];

let girlsAges = girls.map((girl) => girl.age);

console.log(girlsAges);  //[19, 10, 29, 23]

//  Apply the Callback on only certain elements

const numbers = [4, 9, 36, 49];
const numfunction = numbers.map(num => {
  if(num % 2 !=0){
    return Math.sqrt(num)
  }
  return num
})
console.log(numfunction);

// The callback can have side effects.

const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45

// Find evenNumber and multply it by2

let mult = 0;
const numbers = [4,6,10,];
const EvenNum = numbers.map(num => {
  if(num % 2 === 0){
    mult = num
  }return mult * 2
})
console.log(EvenNum)
