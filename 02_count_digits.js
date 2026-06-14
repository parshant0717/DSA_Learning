//Problem Statement: Write a function countDigits(n) that takes integer n and returns how many digits it contains.

/*
example:
n = 1267;
total digits = 4; (output)

Approach 1:
1: convert the digits into absolute value to eliminate negative division problem.
2: Initialize a count variable.
3: apply a loop and then divide the number by 10 and take the floor value of the result.
4: Increase the count variabe by 1;
5: Divide till the n become 0.

Approach 2: 
use log function log10(n)+1;

Edge case:
we need to handle 0 as single digit.

*/

// Approach:1

function countDigits(n) {
  if (n === 0) return 1;
  let count = 0;
  Math.abs(n);
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(89898)); // Output: 5
console.log(countDigits(9438)); // Output: 4
console.log(countDigits(094)); // Output: 2
console.log(countDigits(9)); // Output: 1
console.log(countDigits(0)); // Output: 0

// Approach: 2

function countDigitsWithLog(n) {
  if (n === 0) return 1;
  n = Math.abs(n);
  return Math.floor(Math.log10(n)) + 1;
}

console.log(countDigitsWithLog(0)); // Output: 0
console.log(countDigitsWithLog(9)); // Output: 1
console.log(countDigitsWithLog(899)); // Output: 3
console.log(countDigitsWithLog(9899)); // Output: 4
