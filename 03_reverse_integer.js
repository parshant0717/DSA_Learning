// Problem Statement: Reverse a signed 32-bit integer interger x, if range goes outside [-2^31, 2^31-1] than return 0;

/*
Approach:
1: 1st of all We'll initialize a variable with name reverse.
2: We'll perform a while loop over the digit till it become 0.
3: Then we'll try to get the last digit of the integer.
4: Then We'll append or add the last digit to the reverse varibale.
5: Then to reduce the number of digit by 1, we'll perform mathmatical calclutation on that- simply we'll divide the number by 10 and floor the value.
6: Then we'll return the reverse by checking the corner cases. 


Corner Case:
1: Interger can be negative so we'll handle the case by creating a duplication variable and initialize that with the number by changing the sign to positive.

2: Result(reverse) value can be out of the range of signed 32bit integer so for that we'll check it by condition.
*/

function reverseInteger(x) {
  let n = Math.abs(x);
  let reverse = 0;

  while (n > 0) {
    let digit = n % 10; //digit = last digit; ex: 129 % 10 = 9
    reverse = 10 * reverse + digit;
    n = Math.floor(n / 10); // n = 129/10 = floor value- 12
  }

  let limit = 2 ** 31;
  let result = x < 0 ? -reverse : reverse;
  if (result < -limit || result > limit - 1) {
    return 0;
  }

  return result;
}

console.log(reverseInteger(-8463847412)); //-2147483648
console.log(reverseInteger(-797971284834)); // 0
console.log(reverseInteger(7463847412)); //2147483647
console.log(reverseInteger(9789791284834)); // 0
