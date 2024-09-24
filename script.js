/**
 * 
 *  Part 1: Thinking Functionally
 * 
 */

const testArr = [1, 2, 3, 4];
let sum = 0;
// Take an array of numbers and return the sum.
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
    let sum = 0;
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
let newArr = ['say', 'hello', 'in', 'the', 'morning']
const numberLength = 3;
let answerArr = [];
stringsLongerThan(newArr);

function stringsLongerThan(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > numberLength){
            answerArr.push(arr[i]);
        }
    }
}
console.log("The strings longer than ", numberLength , " is " , answerArr)

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
const n = 10;
//recursion(1);

// function recursion(x){
//     if (x <= n) 
//     console.log("X is : " , x);
//     x++;
//     recursion(x);
// }

/**
 * 
 *  Part 2: Thinking Methodically
 * 
 */

const info = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

sortByAge(info);

function sortByAge(arr){
    info.sort((a, b) => a.age - b.age);
    console.log(arr);
}
