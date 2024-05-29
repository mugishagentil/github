// Find if number in array is even number
let numbers = [1,2,3,4,5,6,7,8,10,12];
function evenNum(number){
  if(number % 2 == 0){
    return true
  }
}
let result = numbers.filter(evenNum)
console.log(result)

// check a length of one string in array
let Names = ["Urban","Gentil", "Muhoza", "Gedeon", "Jerome", "bae"];
function checkString(name){
    if(name.length < 4){
        return true
    }
}
let checkedName = Names.filter(checkString);
console.log(checkedName);

// a question to find if number is >< by using filter string method
const age = [12,13,14,16,18,10,25,27,28,29,30,40];
let filteredNumber = age.filter(function Myfilter(number){
    return number > 18;
})
console.log(filteredNumber);
// eazy way
const age = [1,2,3,4,5,6,7,8,9,10];
const result = age.filter(value => value % 2 == 0)
console.log(result)

// question to find a Sum of array 
const numbers = [10, 10, 10, 10, 10];
let num = 0;
for(let i = 0; i < numbers.length; i++){
    num += numbers[i];
}
console.log(num)
