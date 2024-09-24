/**
 * 
 *  Part 1: Thinking Functionally
 * 
 */

// 1. Take an array of numbers and return the sum.
const testArr = [1, 2, 3, 4];




function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i]; 
    }
    return sum;
}

console.log("The sum is: " , sumArray(testArr));


// 2. Take an array of numbers and return the average.
let average = 0;

averageCalc(testArr);

function averageCalc(arr){
    let sum = 0;
    let length = arr.length;
    sum = sumArray(arr);  
    average += (sum / length);
    return average;
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
// console.log("The longest string is: ",longestString);

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
// console.log("The strings longer than ", numberLength , " is " , answerArr)

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
//const n = 10;
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

// 1. Sort the array by age.

// sortByAge(info);
function sortByAge(arr){
    info.sort((a, b) => a.age - b.age);
    // console.log(arr);
}

// 2. Filter the array to remove entries with an age greater than 50.

// removeOver50(info, sortByAge)
function removeOver50(arr, sortByAge){
    sortByAge(arr);
    for (let i = 0; i < arr.length; i++) {
        arr = arr.filter(arr => arr.age <= 50);
    }
    // console.log(arr);
}

// 3. Map the array to change the “occupation” key to “job” and increment every age by 1.

//changeName(info);
function changeName(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i].job = arr[i]["occupation"];
        delete arr[i].occupation;
    }
    //console.log(arr);
}

// 5. Use the reduce method to calculate the sum of the ages.
//    Then use the result to calculate the average age.

reduce(info, sumArray, averageCalc);
function reduce(age, sumArray, averageCalc){
    let numArray = age.reduce((arr, age) => {
        arr.push(age.age);
        return(arr);
    }, [])

    let sumAge = numArray.map(Number);
    let aveAge = numArray.map(Number);

    console.log("The sum age is: " , sumArray(sumAge));
    console.log("The average age is: " , averageCalc(sumAge));
}