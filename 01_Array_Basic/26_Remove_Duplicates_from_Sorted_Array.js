// Problem statement: An array of integer is given in a sorted and in a non-decreasing order in which we need to remove duplicates in place and return k integer which will represent the number of unique elements.

/*
Approach: 
- Here we'll aplly two pointer technique to solve this problem.
- We'll create a k and i pointer to track those elements in an array.
- K will count the unique number of element.

Constraints:
1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
 */

var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[k] !== nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }

  return k + 1;
};

console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 4, 5, 6])); //6

console.log(removeDuplicates([0, 0, 1, 2, 3, 4, 4, 5, 5, 6])); //7

console.log(removeDuplicates([1])); //1
