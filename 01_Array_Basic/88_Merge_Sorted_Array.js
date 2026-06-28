//Problem Statement: Given two array of integers nums1 and nums2 in non-decreasing sorted manner, where two integers m and n will also be provided which represent numbers of elements in nums1 => m and nums2 => n and m+n demonstrate the length of nums1. Here we need to merge both array elements in nums1 in a sorted and a non-decreasing order.

/* 
Approach: We can solve this question in 3 approaches - 
1) merge + sort - [As approach1 is very easy and brutforce way so we'll skip this.] 
2) copy and merge 
3) merge in place.

Approach 2 - Copy and merge.
- First we'll create a copy of nums1 with m elements.
- Now we'll track elements in both array with two pointers P1 and P2.
- We'll check in copyOdNums1 P1 position elements is smaller or nums2 p2 position element is smaller.
- Accordingly we'll add that element in nums1 with i pointer.

Approach 3 - Merge in place.
- First we'll initialize two pointers P1 and P2.
- Now we'll use for loop from last index to first index.
- Now we'll check is nums1 P1 is greater then nums2 P2 position element, if yes then we'll add nums1 P1 to the Ith position of nums1, Otherwise we'll add nums2 P2 element to the Ith position of nums1


Edge cases:
- in this whether P1 can go out of bound or P2, so this we have to track. 

*/

//Approach 2: Copy and merge.
var merge = function (nums1, m, nums2, n) {
  //pointers
  let p1 = 0;
  let p2 = 0;

  //copied arr;
  const copyOfNums1 = nums1.slice(0, m);

  for (let i = 0; i < m + n; i++) {
    if ((copyOfNums1[p1] < nums2[p2] && p1 < m) || p2 >= n) {
      nums1[i] = copyOfNums1[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  console.log(nums1);
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // It'll log [1,2,2,3,5,6]
// merge([3, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3); // It'll log [1,2,3,3,5,6]
// merge([1], 1, [0], 0); // It'll log [1]

// Approach 3: Merge in Place.
var merge2 = function (nums1, m, nums2, n) {
  // Pointers
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break; //if P2 goes out of bound stop the loop.

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  console.log(nums1);
};

merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // It'll log [1,2,2,3,5,6]
merge2([3, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3); // It'll log [1,2,3,3,5,6]
merge2([1], 1, [0], 0); // It'll log [1]
