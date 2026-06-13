// let's start with printing the patterns to understand loop flows.
/* 
Q1) Print the given pattern.

* * *
* * *
* * *

*/

// Solution:-

const n = 5;

("\n");
console.log(`Question : 1`);
console.log("\n");

let star = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    star += " * ";
  }
  star += "\n";
}
console.log(star);

//Q2) Print the below given patern.
/*

* 
* * 
* * *

*/
console.log("\n");

console.log(`Question : 2`);
console.log("\n");

for (let i = 0; i < n; i++) {
  let star1 = "";
  for (let j = 0; j <= i; j++) {
    star1 += `${i + 1}`;
  }
  star1 += "\n";
  console.log(star1);
}

// Q3) Print the given pattern.
/*

12345

1234

123

12

1

*/

console.log("\n");

console.log(`Question : 3`);

console.log("\n");

for (let i = n - 1; i >= 0; i--) {
  // console.log(i);

  let star1 = "";
  for (let j = 0; j <= i; j++) {
    star1 += `${j + 1}`;
    // star1 += " * ";
  }
  star1 += "\n";
  console.log(star1);
}

// Q4) Print the given pattern.
/*

  *
 ***
*****

*/

console.log("\n");

console.log(`Question : 4`);

console.log("\n");
let l = 6;
let star2 = "";
for (let i = 0; i < l; i++) {
  for (let j = 0; j < l - i - 1; j++) {
    star2 += " ";
    // console.log(j);
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    star2 += "*";
    // console.log(j);
  }
  for (let j = 0; j < l - i - 1; j++) {
    star2 += " ";
    // console.log(j);
  }
  star2 += "\n";
}

console.log(star2);

// Q5) Print the given pattern.
/*

 
 *****
  ***
   *

*/

console.log("\n");

console.log(`Question : 5`);

console.log("\n");

let star3 = "";

for (let i = l; i > 0; i--) {
  for (let j = l - i + 1; j > 0; j--) {
    star3 += " ";
  }
  for (let j = 2 * i - 1; j > 0; j--) {
    star3 += "*";
  }
  for (let j = l - i + 1; j > 0; j--) {
    star3 += " ";
  }
  star3 += "\n";
}

console.log(star3);

// Q6) Print the given pattern.
/*

   *
  ***
 ***** 
 *****
  ***
   *

*/

console.log("\n");

console.log(`Question : 6`);

console.log("\n");

let star4 = "";
let count = l;

for (let i = 0; i < l * 2; i++) {
  if (i < l) {
    for (let j = 0; j < l - i - 1; j++) {
      star4 += " ";
      // console.log(j);
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      star4 += "*";
      // console.log(j);
    }
    for (let j = 0; j < l - i - 1; j++) {
      star4 += " ";
      // console.log(j);
    }
  } else if (i >= l) {
    // console.log(count);

    for (let j = l - count; j > 0; j--) {
      star4 += " ";
    }
    for (let j = 2 * count - 1; j > 0; j--) {
      star4 += "*";
    }
    for (let j = l - count; j > 0; j--) {
      star4 += " ";
    }
    count--;
  }

  star4 += "\n";
}

console.log(star4);

// Q7) Print the given pattern.
/*

  *  
  **
  ***  
  **
  * 

*/

console.log("\n");

console.log(`Question : 7`);

console.log("\n");

const l2 = 3;

let star5 = "";

function patern1(n, paternContainer) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      paternContainer += "*";
    }
    for (let j = 0; j < n - i - 1; j++) {
      paternContainer += " ";
    }
    paternContainer += "\n";
  }
  return paternContainer;
}

function patern2(n, paternContainer) {
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      paternContainer += "*";
    }
    for (let j = 0; j < n - i; j++) {
      paternContainer += " ";
    }
    paternContainer += "\n";
  }
  return paternContainer;
}

function main(n, paternContainer) {
  paternContainer = patern1(n, paternContainer);
  paternContainer = patern2(n, paternContainer);
  console.log(paternContainer);
}

main(l2, star5);

//Version 2
function paternPrint(n, paternContainer) {
  for (let i = 1; i <= n; i++) {
    paternContainer += "*".repeat(i) + " ".repeat(n - i) + "\n";
  }
  for (let i = n - 1; i > 0; i--) {
    paternContainer += "*".repeat(i) + " ".repeat(i - 1) + "\n";
  }
  return paternContainer;
}

const result = paternPrint(l2, star5);
console.log(result);

// Q8) Print the given pattern.
/*

1     
01
101

*/

console.log("\n");

console.log(`Question : 8`);

console.log("\n");

function bitPatern(n, paternContainer) {
  let toggle = 1;

  for (let i = 1; i <= n; i++) {
    i % 2 === 0 ? (toggle = 0) : (toggle = 1);
    for (let j = 0; j < i; j++) {
      paternContainer += `${toggle}`;
      toggle == 0 ? (toggle = 1) : (toggle = 0);
    }
    paternContainer += "\n";
  }
  return paternContainer;
}

let l3 = 5;
let star6 = "";
let result2 = bitPatern(l3, star6);

console.log(result2);
console.log("\n");

// Q9) Print the given pattern.
/*

1    1
12  21
123321

*/

console.log("\n");
console.log(`Question : 9`);

console.log("\n");

function patern1(n, paternContainer) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      paternContainer += `${j}`;
    }
    for (let j = 1; j <= 2 * (n - i); j++) {
      paternContainer += " ";
    }
    for (let j = i; j > 0; j--) {
      paternContainer += `${j}`;
    }
    paternContainer += "\n";
  }
  return paternContainer;
}

let nums = "";
let length = 3;

let resultP1 = patern1(length, nums);

console.log(resultP1);

// Q10) Print the given pattern.
/*

1
2 3
4 5 6

*/

console.log("\n");
console.log(`Question : 10`);

console.log("\n");

let Ln = 3;
let numCont = "";
let count1 = 1;
for (let i = 1; i <= Ln; i++) {
  for (let j = 1; j <= i; j++) {
    numCont += ` ${count1++} `;
  }
  numCont += "\n";
}

console.log(numCont);

// Q11) Print the given pattern.
/*

 A
 A  B
 A  B  C

*/

console.log("\n");
console.log(`Question : 11`);

console.log("\n");

let Ln1 = 3;
let alphaCont = "";
for (let i = 1; i <= Ln1; i++) {
  let count2 = 65;
  for (let j = 1; j <= i; j++) {
    alphaCont += ` ${String.fromCharCode(count2++)} `;
  }
  alphaCont += "\n";
}

console.log(alphaCont);

// Q12) Print the given pattern.
/*

 A  B  C
 A  B
 A

*/

console.log("\n");
console.log(`Question : 12`);

console.log("\n");
let Ln2 = 3;
let alphaCont1 = "";

for (let i = Ln2; i > 0; i--) {
  let count3 = 65;
  for (let j = 1; j <= i; j++) {
    alphaCont1 += ` ${String.fromCharCode(count3++)} `;
  }
  alphaCont1 += "\n";
}

console.log(alphaCont1);

// Q13) Print the given pattern.
/*

A
BB
CCC

*/

console.log("\n");
console.log(`Question : 13`);

console.log("\n");

let ln3 = 3;
let alphaCont2 = "";
let count4 = 64;
for (let i = 1; i <= ln3; i++) {
  count4++;
  for (let j = 1; j <= i; j++) {
    alphaCont2 += `${String.fromCharCode(count4)}`;
  }
  alphaCont2 += "\n";
}

console.log(alphaCont2);

// Q14) Print the given pattern.
/*

A
BB
CCC

*/

console.log("\n");
console.log(`Question : 14`);

console.log("\n");

let ln4 = 3;
let alphaCont3 = "";
for (let i = 1; i <= ln4; i++) {
  let innerCount = 65;
  let middleCount = 64 + i;
  let copyCounter = middleCount;
  for (let j = 1; j <= ln4 - i; j++) {
    alphaCont3 += " ";
  }
  for (let j = 1; j < i; j++) {
    alphaCont3 += `${String.fromCharCode(innerCount++)}`;
  }
  alphaCont3 += `${String.fromCharCode(middleCount)}`;
  for (let j = 1; j < i; j++) {
    alphaCont3 += `${String.fromCharCode(--copyCounter)}`;
  }
  for (let j = 1; j <= ln4 - i; j++) {
    alphaCont3 += " ";
  }
  alphaCont3 += "\n";
}

console.log(alphaCont3);

//version 2
function makeLeft(i) {
  let s = "";
  for (let j = 0; j < i - 1; j++) {
    s += String.fromCharCode(65 + j);
  }
  return s;
}

let rows = 3;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  let left = makeLeft(i);
  let middle = String.fromCharCode(64 + i);
  let right = [...left].reverse().join("");
  let spaces = "";
  for (let j = 0; j < rows - i; j++) spaces += " ";
  pattern += spaces + left + middle + right + spaces + "\n";
}

console.log(pattern);
