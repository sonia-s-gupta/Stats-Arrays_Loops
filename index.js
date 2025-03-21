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
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
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
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum=0;
  for(let i=0; i<numbers.length; i++) {
    sum = sum + numbers[i];
  }
    return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  //Divide sum by number of numbers
  if (numbers.length === 0)
    return 0;
  return getSum(numbers) / numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // Go through array of numbers, let minimum = the first number, if ensuing numbers are smaller, 
  // make them the min
  if (numbers.length === 0)
    return undefined;
  
  let minimum = (numbers [0]);
  for (let i=1; i<numbers.length; i++) {
    if (numbers[i] < minimum) { 
      minimum = (numbers [i]);
    }
  }
  return minimum; 
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // Go through the array of numbers, let maximum = the first number, if ensuing numbers are bigger, 
  // make them the max
  if (numbers.length === 0)
    return undefined;

  let maximum = (numbers [0]); 
  for (let i=1; i<numbers.length; i++) {
    if (numbers [i] > maximum) {
      maximum = (numbers [i]);
    }
  }
  return maximum; 
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // getMaximum, getMinimum - if either is undefined, return undefined; if not, subtract min from max
  let max = getMax (numbers);
  let min = getMin (numbers);
  
  if (getMin(numbers) === undefined || getMax(numbers) === undefined) {
    return undefined; 
  } 
  return max-min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  //Create new empty array 
  // Add number to array if greater than or equal to 2 and remainder = 0
  let evens = [];
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i]>=2 && numbers[i]%2 === 0) {
    evens.push(numbers[i]);
    }
  }
  return evens;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // Create new empty array 
  //Add number to array if number = 1 or if number is greater than 2 and when divided by 2, remainder = 1
  let odds = [];
  for (let i=0; i<[numbers.length]; i++) {
    if (numbers[i] === 1 || (numbers[i] > 2 && numbers[i] % 2 === 1)) {
      odds.push (numbers[i]);
    }
  }
  return odds;
}
