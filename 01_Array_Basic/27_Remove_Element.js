//Problem Statement: Given an array of integers and an integer val. Remove all occurance of val in array nums in place and return the total numbers of element in nums which is not equal to val.

/*
Approach: We can solve this questions in two way using two pointer approach.
- First we'll create a pointer to track the number count which is not equal to val.
- Then use a for loop where i will track that the element is equal to val or not if match then ignore otherwise replace the Kth number with Ith number and increase the Kth pointer.
- Then return the K count.
*/

//Approach 1:
var removeElementApproach1 = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

const result1 = removeElementApproach1([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(`Approach1: ${result1}`);

// Approach 2:
var removeElementApproach2 = function (nums, val) {
  let i = 0;
  let k = nums.length;

  while (i < k) {
    if (nums[i] === val) {
      nums[i] = nums[k - 1];
      k--;
    } else {
      i++;
    }
  }
  return k;
};

const result2 = removeElementApproach2([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(`Approach2: ${result2}`);
