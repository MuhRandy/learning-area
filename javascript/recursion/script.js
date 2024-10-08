function sumRange(num) {
  if (num === 1) return num;
  else return num + sumRange(num - 1);
}

// console.log(sumRange(100));

function power(num1, num2) {
  if (num2 === 0) return 1;
  else return num1 * power(num1, num2 - 1);
}

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

function factorial(num) {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120

function all(arr, callback) {
  const copy = arr.slice();
  const tested = copy.at(-1);

  if (!callback(tested)) return false;
  if (copy.length === 1 && callback(tested)) return true;
  else {
    copy.pop();
    return all(copy, callback);
  }
}

const allAreLessThanSeven = all([1, 3, 5, 8, 1, 3, 5, 3, 2], function (num) {
  return num < 7;
});

// console.log(allAreLessThanSeven);

function productOfArray(arr) {
  const copy = arr.slice();
  const current = copy.at(-1);

  if (copy.length === 1) return current;
  else {
    copy.pop();
    return current * productOfArray(copy);
  }
}

const six = productOfArray([1, 2, 3]); // 6
const sixty = productOfArray([1, 2, 3, 10]); // 60

// console.log(six, sixty);

function contains(obj, searchValue) {
  if (typeof obj !== "object" || obj === null) return obj === searchValue;

  for (const key in obj) {
    if (contains(obj[key], searchValue)) return true;
  }
  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

// console.log(hasIt);
// console.log(doesntHaveIt);

function totalIntegers(arr) {
  if (arr.length === 0) return 0;

  let total = 0;
  const last = arr.pop();

  if (Array.isArray(last)) {
    total += totalIntegers(last);
  } else if (Number.isInteger(last)) {
    total += 1;
  }

  return total + totalIntegers(arr);
}

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

// console.log(seven);

function sumSquares(arr) {
  let total = 0;

  if (!Array.isArray(arr)) return (total += arr ** 2);
  if (arr.length === 0) return total;
  else if (Array.isArray(arr)) {
    const last = arr.pop();
    total += sumSquares(last);
  }

  return total + sumSquares(arr);
}

// var l = [1, 2, 3];
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1, 2], 3];
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]];
// console.log(sumSquares(l)); // 1 = 1

// l = [10, [[10], 10], [10]];
// console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400

function replicate(amount, num) {
  if (amount < 1) return [];

  return [num].concat(replicate(amount - 1, num));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
