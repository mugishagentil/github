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
