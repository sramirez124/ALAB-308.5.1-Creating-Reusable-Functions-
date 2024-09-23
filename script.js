const testArr = [1, 2, 3, 4];

// Take an array of numbers and return the sum.
let sum = 0;
sumArray(testArr);

function sumArray(arr){
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i]; 
    }
    return sum;
}
console.log("The sum is: " , sum);

// Take an array of numbers and return the average.
let average = 0;

averageCalc(testArr);

function averageCalc(arr){
    sum = 0;
    let length = arr.length;
    sum = sumArray(arr);  
    average += sum / length;
}
console.log("The average is:" , average);

// Take an array of strings and return the longest string.
const longerArray = ["Hello", "World", "Hello World"];
let longestString = "";
longestArray(longerArray);

function longestArray(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
           longestString = arr[i];
        }
    }
    return longestString;
}

console.log("The longest string is: ",longestString);
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.