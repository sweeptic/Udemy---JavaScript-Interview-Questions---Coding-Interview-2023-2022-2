//
//
// Interview
//
//
const array = [
  0,
  NaN,
  5,
  5,
  5,
  undefined,
  null,
  0,
  0,
  "str",
  false,
  NaN,
  4,
  6,
  5,
  -12,
  5,
  89,
  [3, [4, 99], [5], [[5]]],
];

// const array = [[5, 6, 7],[5, 5, 5, [6, [6, 9]]],];

function findSecondGreater(array) {
  if (!Array.isArray(array)) {
    return false;
  }

  const normalizedArr = Array.from(new Set(array.flat(Infinity)));

  if (normalizedArr.length < 2) {
    console.log("len", normalizedArr.length);

    return false;
  }

  const sanitizedArr = normalizedArr
    .filter(
      //   Boolean
      (item) => {
        if (item === 0) {
          return true;
        }

        if (!!Math.abs(item)) {
          return item;
        }
      }
    )
    .sort((a, b) => b - a);

  return sanitizedArr;
}

// console.log(findSecondGreater(array));

// console.log(Math.abs(0));

//
//
//plusMinus
//
//
const arr1 = [2, 6, 5, 3, 0, 0, -4, -8, "11"];

function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let zero = 0;
  let negative = 0;
  const len = arr.length;

  arr.map((item) => {
    if (item === 0) {
      zero++;
    }
    if (item > 0) {
      positive++;
    }
    if (item < 0) {
      negative++;
    }
  });
  console.log(positive / len);
  console.log(negative / len);
  console.log(zero / len);
}

const arr = arr1.map((arrTemp) => parseInt(arrTemp, 10));

// plusMinus(arr);

//
//
//mini max sum
//
//

const arr2 = [7, 69, 2, 221, 8974];

function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const exceptLast = (_, index, self) => index !== self.length - 1;
  const exceptFirst = (_, index) => index !== 0;
  const sum = (acc, item) => (acc += item);

  const arrMin = sortedArr.filter(exceptLast).reduce(sum, 0);
  const arrMax = sortedArr.filter(exceptFirst).reduce(sum, 0);

  //   console.log(arrMin, arrMax);
}

// miniMaxSum(arr2);

//
//
//Time conversation
//
//

function timeConversion(s) {
  // Write your code here

  const postFix = s.substring(s.length - 2, s.length);
  const hour = parseInt(s.slice(0, 2));
  const format24 = s.slice(0, 8);

  if (postFix === "AM") {
    if (hour === 12) {
      return `00${format24.slice(2, 8)}`;
    }
    // console.log("AM", hour);
    return format24;
  }

  if (postFix === "PM") {
    // console.log("PM", hour + 12);
    if (hour === 12) {
      return format24;
    }

    return `${(hour + 12).toString()}${format24.slice(2, 8)}`;
  }
}
// timeConversion("12:01:00AM"); // 00:01:00

// AM
// console.log(timeConversion("12:05:45AM")); // 00:05:45
// console.log(timeConversion("07:05:45AM")); // 07:05:45
// console.log(timeConversion("11:59:59AM")); // 11:59:59

// // PM
// console.log(timeConversion("12:01:00PM")); // 12:01:00
// console.log(timeConversion("01:01:00PM")); // 12:01:00
// console.log(timeConversion("05:01:00PM")); // 12:01:00
// console.log(timeConversion("11:59:59PM")); // 12:01:00

//
//
//Sparse array
//
//

function matchingStrings(strings, queries, arr = []) {
  if (queries.length === 0) return arr;

  const searchString = queries[0];
  const res = strings.filter((item) => item === searchString).length;

  queries.shift();
  return matchingStrings(strings, queries, [...arr, res]);

  // Write your code here
}

// console.log(matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]));

//
//
//lonely integer
//
//

function lonelyinteger(array) {
  const uniqueArray = Array.from(new Set(array));

  let uniqueVal = 0;

  uniqueArray.forEach((uniqueItem) => {
    const res = array.filter((item) => item === uniqueItem).length;
    if (res === 1) uniqueVal = uniqueItem;
  });

  return uniqueVal;
}

// console.log(
//   lonelyinteger([
//     15, 60, 74, 1, 94, 93, 28, 48, 70, 98, 45, 94, 42, 45, 48, 1, 72, 9, 24, 93, 41, 70, 60, 28, 11, 20, 72, 35, 11, 98,
//     31, 74, 31, 41, 9, 42, 20, 35, 24,
//   ])
// );

//
//
//flipping bits
//
//

function flippingBits(args) {
  const binary = (args >>> 0).toString(2);
  const splitted = binary.toString().split("");
  const base = [];

  for (let i = 0; i < 32 - splitted.length; i++) {
    base.push(0);
  }

  const convertToNumArray = splitted.map((item) => parseInt(item));

  const mergedArray = [...base, ...convertToNumArray];

  const result = mergedArray.map((item) => (item === 0 ? 1 : 0));

  const binaryResult = parseInt(result.join(""), 2);

  return binaryResult;

  // Write your code here
}
// console.log(flippingBits(2147483647));
// console.log(flippingBits(1));
// console.log(flippingBits(0));

//
//
// diagonal difference
//
//

function diagonalDifference(arr) {
  console.log(arr);

  let first = 0;
  let second = 0;

  arr.map((item, index, self) => {
    first += item[index];
    second += item[self.length - index - 1];
  });

  return Math.abs(first - second);
}

// console.log(
//   diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
//   ])
// );

// console.log(
//   diagonalDifference([
//     [1, 2, 11, 2],
//     [2, 4, 4, 5],
//     [10, 8, -12, 7],
//     [1, 9, -12, 3],
//   ])
// );

// [  [11, 2, 4], [4, 5, 6],[10, 8, -12] ];

//
//
//
//
//

function countingSort(arr) {
  const resArr = new Array(100).fill(0);

  arr.forEach((item) => resArr[item]++);

  return resArr;
}

// countingSort([1, 1, 1, 2, 3]);
// countingSort([0, 0, 0, 0, 1, 1, 2, 3, 5]);

// countingSort([
//   63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85,
//   74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87,
//   42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67,
//   61, 32, 21, 79, 75, 75, 13, 87, 70, 33,
// ]);
// 1 1 0 2 2

// countingSort([
//   63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75, 52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81,
//   82, 24, 69, 2, 30, 61, 83, 37, 97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84, 60, 35, 58,
//   19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96, 7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12,
//   29, 35, 80, 78, 80, 6, 5, 24, 49, 82,
// ]);
// 0 1 3 1 0

// [1,1,3,2,1]
// 0 1 2 3 => [0,0,0,0]
// 1 [0,1,0,0]
// 1 [0,2,0,0]
// 3 [0,2,0,1]
// 2 [0,2,1,1]
// 1 [0,3,1,1]

//
//
//...
//
//

function pangrams(s) {
  const res = Array.from(
    new Set(
      s
        .toLowerCase()
        .split("")
        .filter((item) => item !== " ")
    )
  );

  return res.length === 26 ? "pangram" : "not pangram";
}

// console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));

// console.log(pangrams("We promptly judged antique ivory buckles for the prize"));

// console.log(pangrams("qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun"));

//
//
//kit-two-arrays
//
//

function twoArrays(k, A, B) {
  let result = "YES";
  const sortedA = [...A].sort((a, b) => a - b);
  const sortedB = [...B].sort((a, b) => b - a);
  console.log(sortedA);
  console.log(sortedB);

  sortedA.forEach((item, index) => {
    if (sortedB[index] + item < k) {
      result = "NO";
      return;
    }
  });

  return result;
}

// 4
// 4 4 3 2 1 4 4 3 2 4
// 2 3 0 1 1 3 1 0 0 2

// 1 2 3
// 9 8 7
//
// 1 1 2 2
// 4 3 3 3

// console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]));
// console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));

// console.log(twoArrays(5, [2, 2, 2, 2, 4], [4, 3, 3, 3, 1]));
//
// 5, [(1, 2, 2, 1)], [(3, 3, 3, 4)];

// (10)[(2, 1, 3)][(7, 8, 9)]; YES

// (5)[(1, 2, 2, 1)][(3, 3, 3, 4)]; NO

// (10)[(7, 6, 8, 4, 2)][(5, 2, 6, 3, 1)]; NO
//
//
//...
//
//

//
//
//...
//
//

//
//
//...
//
//
