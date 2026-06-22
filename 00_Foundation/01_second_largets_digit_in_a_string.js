// Questions asked
/* 
There is a string given:
let s =  "dfa12321afd";
in the given string we have to find the 2nd largest digit otherwise return -1 if only one number is there or are NaN.

Approach:
1: In this we first cancle out the NaN values such as d f a etc.
2: Then we'll check from those values which is a number.
3: Now we'll check which is the largest one and parallaly we'll keep storing the secondLargest value from the current largest value and the largest value for comparison.
4: Now we'll retrun the number stored in secondLargest value.

Edge Cases: 
Everything will be handled by loop block.

*/

function secondLargest(s) {
  if (s.length == 0 || s.length == 1) return -1;
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      let num = Number(s[i]);
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num < largest && num > secondLargest) {
        secondLargest = num;
      }
    }
  }
  return secondLargest;
}

// Test Cases
console.log(secondLargest("abd823aa")); //3
console.log(secondLargest("abd111aa")); //-1
console.log(secondLargest("abd323534aa")); //4
console.log(secondLargest("abd33aa")); //-1
console.log(secondLargest("23")); //2
console.log(secondLargest("3aa")); //-1
