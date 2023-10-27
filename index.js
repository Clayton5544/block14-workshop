// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
//create array of numbers.

const numbers = [1,2,3,4,5];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
// console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(numbers.length)

console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  console.log(numbers.length)
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
// create a loop to add up all the numbers in the array.
function getSum(numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i]
     sum += currentNumber;
  }
  sum = numbers.length
  return sum;
}
getSum([1,2,3,4,5])

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let mean = 0
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i]
     mean += currentNumber;
  }
  mean = mean / numbers.length
  return mean;
}
getMean([1,2,3,4,5])


/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
/*
- create variable for min
create loop to find min
*/

function getMin(numbers) {
  let min = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    if (numbers [i] < min){
      min = numbers[i]
    }
  }
  return min;
}


/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
//- create variable for max
// - create loop for largest number

function getMax(numbers) {
  let max = number[0];
  for (i = 1; i < numbers.length; i++) {
    if (numbers [i] > max){
      max = numbers[i];
    }
  }
  return max;
}




/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return `${getMax(numbers)} - ${getMin(numbers)}`;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
/* -create function
- create variable for even numbers
- create forloop
- create if statment
- return even numbers 
*/
function getEvens(numbers) {
  let even = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) even.push(numbers[i]);
  }
  return even;
}
console.log(`result`, getEvens(numbers));

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) odd.push(numbers[i]);
  }
  return odd;
}
console.log(`result`, getOdds(numbers));