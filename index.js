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
// To UpperCase
const names = ["gentil", 'urban', 'gedeon'];
const result = names.map(name => name.toUpperCase());
console.log(result)

// toString second methodes
let newString = [];
function stringNum(arr){
  for(let i = 0; i < arr.length; i++){
    newString = arr.toString();
  }return newString 
}
const stringNumbers = stringNum([1,2,3,4,5]);
console.log(stringNumbers)

// Define a curried function named multiply that takes two arguments, a and b, but does so in two separate function calls
function multiply(a) {
  return function(b) {
      return a * b;
  }
}

// Example usage:
const multiplyByTwo = multiply(2);
const second = multiplyByTwo(5); 
console.log(second)

// find sum of even number in array
let sum = 0;
function SumNumber(number){
    for(let i = 0; i <= number.length; i++){
        if(number[i] % 2 === 0){
            sum += number[i];
        }
    }return sum
}
console.log(SumNumber([1,2,3,4,5,6]))

// find if number you enter found in array
function findNumbers(arr, number){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === number){
      return true;
    }
  }
  return false;
}
const numbers = findNumbers([1, 2, 3, 4,5, 6, 7, 8, 9, 10], );
console.log(numbers)

// find even number in array and return booleans

let answer = 0;
let number = [1,2,3,4,5,6,7,8,9,10];
let numbers = number.map(num => {
    if(num % 2 === 0){
        return true
    }
    return false
})

// find even numbers found in one number
function isEvenNum(num){
  let even = []
  for (let i = 0; i <= num; i++){
      if(i % 2 === 0){
          even.push(i);
      }
  }
  return even
}
console.log(isEvenNum(20))

// How to join a separated in put arrays
function smash (words) {
  let name;
  name = words.join();
   return name
};
console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// Complete the function to return his total number of goals in all three leagues.
function findTotalGoal(laLigaGoals, copaDelReyGoals, championsLeagueGoals){
  let sum;
  sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return "Tatal Goals of Messi = " + sum;
 }
 console.log(findTotalGoal(10, 10, 50))

//  Eazy way to do it
const goals = (a,b,c) => a + b + c;
console.log(goals(10, 10 ,10))

// Find sum of array by using Reduce methods

let numbers = [10, 10 ,10, 10, 10, 50];
function mySum(total, num){
  return total + num;
}
function myRessult(item){
  console.log(numbers.reduce(mySum));
}
myRessult()
// eazy way to find sum using Reduce method
const items = [10, 10, 10 ,10 ,10,  50];
const totalSum = items.reduce((total, sum)=>{
  return total + sum;
})
console.log(totalSum)

// find same number in array
function findNumber(array, num){
  let answer;
  for(let i = 0; i < array.length; i++){
    if(num === array[i]){
     return "Good work" ;
    }else "Not Match";
    
  }
}
console.log(findNumber([1,2,3,4,5,6,7,8,9,10], 13))
// check if number palindrome
let name = "Gentilsee";
function checkPalindrome(){
let answer = name.length;
if(answer % 2 === 0){
    console.log("Yes Is palindrome");
}
else if(answer % 2 !== 0){
    console.log("No Is palindrome");
}
}
checkPalindrome();

