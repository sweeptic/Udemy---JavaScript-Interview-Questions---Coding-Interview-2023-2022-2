// const { getFullName, getName2, getSurName } = require("./common.js");

const users__ = [
  //////////////////////////////////////////////////////////////
  //
  //3. Mapping Users to Get Usernames
  //
  //////////////////////////////////////////////////////////////

  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 32,
  },
  {
    id: 2,
    name: "Jones",
    isActive: false,
    age: 11,
  },
  {
    id: 3,
    name: "JOE",
    isActive: true,
    age: 98,
  },
];

// const result = [];

// for (const item in users) {
//   if (Object.prototype.hasOwnProperty.call(users, item)) {
//     result.push(users[item]["name"]);
//   }
// }
// console.log("result", result);

const getName = (item) => item.name;
const onlyActive = (item) => item.isActive === true;
const filterDesc = (t, u) => (t < u ? -1 : 1);

const result2 = users__.sort(filterDesc).filter(onlyActive).map(getName);
// console.log("result2", result2);

//////////////////////////////////////////////////////////////
//
//4. Difference between null and undefined
//
//////////////////////////////////////////////////////////////

let var1;
// console.log(var1); // undefined
// console.log(typeof var1); //undefined

let var2 = null;
// console.log(var2); // null
// console.log(typeof var2); // object

//////////////////////////////////////////////////////////////
//
//5. Hoisting
//
//////////////////////////////////////////////////////////////

// question 1
// console.log(foo);
// foo = 1;
// reference error foo is not defined

// question 2
// console.log(foo2);
var foo2 = 2;
//

// question 3
// foo3 = 3;
// console.log(foo3);
// var foo3; // bubbling p - hoisting

foo4();
function foo4() {}

const foo5 = 5;
// console.log(foo5);

//////////////////////////////////////////////////////////////
//
//6. Closures
//
//////////////////////////////////////////////////////////////

function closures() {
  let count = 10;

  return function () {
    return {
      getValue: () => count,
      increment: () => (count += 1),
    };
  };
}

const cloObj = closures();

// console.log(cloObj().getValue());
cloObj().increment();
// console.log(cloObj().getValue());

//////////////////////////////////////////////////////////////
//
//7. Currying
//
//////////////////////////////////////////////////////////////

const res = multiply(20)(10);
// console.log(res);
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const curriedSum = (a, b, c) => a + b + c;

function curry(fn) {
  const arity = fn.length;
  //   console.log(arit     y);

  return function f1(...args) {
    if (args.length >= arity) {
      //   console.log("enough argument");
      return fn(...args);
    } else {
      //   console.log("need more arguments");
      return function fn2(...moreArgs) {
        var newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
    // console.log("f1", ...args);
  };
}

// const cFunc = curry(curriedSum);
// console.log("result: ", cFunc(1)(2, 3));

// usage
const get = curry((property, object) => object[property]);
const getId = get("id");
//
const map = curry((fn, values) => values.map(fn));
// console.log(map(getId, [{ id: 1 }]));

//////////////////////////////////////////////////////////////
//
//8. Adding Elements to the Array
//
//////////////////////////////////////////////////////////////

function addElement(arr, el) {
  return [...arr, el];
  //   newArr.push(el);
  //   return newArr;
}

const arr = [1, 2, 3];
// console.log("arr", arr);
const newArr = addElement(arr, 10);
// console.log("newArr", newArr);

//////////////////////////////////////////////////////////////
//
//9. Concatenating Arrays
//
//////////////////////////////////////////////////////////////

function conc9(a, b) {
  return [...a, ...b];
}

const arrC1 = [1, 2, 3];
const arrC2 = [4, 5, 6];

const resConc = conc9(arrC1, arrC2);
// console.log("arrC1", arrC1);
// console.log(resConc);
// console.log("arrC1", arrC1);

//////////////////////////////////////////////////////////////
//
//10. Check if User With Such Name Exists
//
//////////////////////////////////////////////////////////////

const users2 = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 32,
  },
  {
    id: 2,
    name: "Jones",
    isActive: false,
    age: 11,
  },
  {
    id: 3,
    name: "JOE",
    isActive: true,
    age: 98,
  },
];

function checkName(arr, key, value) {
  // return !!arr.filter((item) => item[key] === value).length;
  //   return arr.some((item) => item[key] === value);
  // return !!arr.find((item) => item[key] === value);
  return arr.findIndex((item) => item[key] === value) > 0;
}

// console.log(checkName(users2, "name", "Jones"));

//////////////////////////////////////////////////////////////
//
//11. Remove All Duplicates in the Array
//
//////////////////////////////////////////////////////////////

// const newSet = new Set();

const arrDuplicates = [1, 2, 3, 3, 3, 4, 3, 1, 1, 1, 4, 5, 7];
const resSet = new Set(arrDuplicates);
// console.log(resSet);

//////////////////////////////////////////////////////////////
//
//12. Sorting the array
//
//////////////////////////////////////////////////////////////

const arrSort = [6, 2, 5, 89, 6, 4, 2, 54, 65, 6, 2, 26];
const resSort = [...arrSort].sort((a, b) => a - b);

// console.log(arrSort);
// console.log(resSort);

const books = [
  { name: "Harry Potter", author: "Joanne A" },
  { name: "Warcross", author: "Marie C" },
  { name: "The Terminator", author: "Arthur X" },
  { name: "The Hunger Games", author: "Suzanne B" },
];

// const getLastName = (author) => author.substring(author.indexOf(" ") + 1);
const getLastName = (str) => str.split(" ")[1];

// console.log(books.sort((a, b) => (getLastName(a.author) > getLastName(b.author) ? 1 : -1)));

//////////////////////////////////////////////////////////////
//
//14. Writing Range Function
//
//////////////////////////////////////////////////////////////

const myRange = (a, b, resArr = []) => {
  if (a === b) {
    return resArr;
  }
  const newArr = [...resArr, Math.random()];
  return myRange(a + 1, b, newArr);
};

const resRange = myRange(1, 50);
// console.log(resRange);

// console.log([...Array(50).keys()].map((item) => item + 1));

//////////////////////////////////////////////////////////////
//
//15. Writing Shuffle Function
//
//////////////////////////////////////////////////////////////

const shuffleItems = (arr) => {
  return arr
    .map((item) => ({ key: Math.random(), value: item }))
    .sort((a, b) => a.key - b.key)
    .map((item) => item.value);
};

// console.log(shuffleItems([5, 1, 2, 7, 8, 12]));
// console.log(shuffleItems([5, 1, 2, 7, 8, 12]));
// console.log(shuffleItems([5, 1, 2, 7, 8, 12]));
// console.log(shuffleItems([5, 1, 2, 7, 8, 12]));

//////////////////////////////////////////////////////////////
//
//16. Find the Number of Occurences of Minimum Value in List
//
//////////////////////////////////////////////////////////////

const occur = [5, 6, 7, 4, 3, 3, 6, 6, 6, 6, 6, 6, 7, 3, 1, 1, 1, 11];

const minValue = Math.min(...occur);

// const occNum = occur.reduce((acc, item) => {
//   if (item === minValue) {
//     acc += 1;
//   }
//   return acc;
// }, 0);
const occNum = occur.filter((item) => item === minValue).length;

// console.log("minValue", minValue);
// console.log("occNum", occNum);

//////////////////////////////////////////////////////////////
//
//17. This
//
//////////////////////////////////////////////////////////////

const item = {
  title: "ball",
  getItem() {
    // console.log("this", this);
  },
};
// item.getItem();

class Item2 {
  title = "ball";
  getItem() {
    function someFn() {
      let c = 7;
      //   console.log("this someFn", this);
    }
    someFn();
  }
  //   getItem() {
  // [1, 2, 3].map((item) => console.log(this));
  // [1, 2, 3].map(function (item) {
  //   console.log(this);
  // });
  //   }
}

const item2 = new Item2();
item2.getItem();
// console.log("this", this);

//////////////////////////////////////////////////////////////
//
//18. Classes
//
//////////////////////////////////////////////////////////////

class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(name, id) {
    super(name, id);
  }
  setDepartment(name) {
    this.department = name;
  }

  getDepartment() {
    return this.department;
  }
}

const john = new Employee("1", "John");

john.setSalary(80000);
// console.log("John", john);

const boss = new Manager(2, "Mike");
boss.setDepartment("manager");
// console.log("boss", boss);

//////////////////////////////////////////////////////////////
//
//19. Prototypes
//
//////////////////////////////////////////////////////////////

function protoClasses(id, name) {
  this.id = id;
  this.name = name;
}

protoClasses.prototype.setSalary = function (salary) {
  this.salary = salary;
};

var Manager2 = function (params) {
  protoClasses.apply(this, arguments);
};

Manager2.prototype = Object.create(protoClasses.prototype);

const proto = new protoClasses(2, "John");
proto.setSalary(4000);
// console.log("proto", proto);

const manager2 = new Manager2(2, "John");

// console.log("manager2", manager2);

//////////////////////////////////////////////////////////////
//
//21. Modules
//
//////////////////////////////////////////////////////////////

// const a1 = getFullName();
// const a2 = getName2();
// const a3 = getSurName();

//////////////////////////////////////////////////////////////
//
//22. Implement Debounce Function
//
//////////////////////////////////////////////////////////////

const saveInput = (name) => {
  //   console.log("saveInput", name);
};

const debounce = (func, ms = 100) => {
  let timer;

  return (...args) => {
    // console.log("saveInput", args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      //   func(args[0]);
    }, ms);
  };
};

const processChange = debounce(saveInput, 2000);

processChange("foo");
processChange("foo");
processChange("foo");
processChange("foo");

//////////////////////////////////////////////////////////////
//
//23. Implement Throttle Function
//
//////////////////////////////////////////////////////////////

// const saveInput = (name) => {
// //   console.log("saveInput", name);
// };

// const throttle = (func, ms = 100) => {
//   let isWaiting = false;

//   return (...args) => {
//     // console.log("args", args);

//     if (!isWaiting) {
//       func.apply(this, args);
//       isWaiting = true;
//     }
//     setTimeout(() => {
//       isWaiting = false;
//     }, ms);
//   };
// };

// const processChange = throttle(saveInput, 2000);

// processChange("foo 1");

// setTimeout(() => {
//   processChange("foo 2");
// }, 1000);

// setTimeout(() => {
//   processChange("foo 3");
// }, 1200);

// setTimeout(() => {
//   processChange("foo 4");
// }, 2400);

//////////////////////////////////////////////////////////////
//
//1. Highlight All Words Over 8 Chars With Yellow
//
//////////////////////////////////////////////////////////////

const paragraph = document.querySelector("p");

paragraph.innerHTML = paragraph.innerHTML
  .split(" ")
  .map((word) => {
    return word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word;
  })
  .join(" ");

//////////////////////////////////////////////////////////////
//
//2. Add a Link
//
//////////////////////////////////////////////////////////////

const link = document.createElement("a");
link.innerHTML = "This is a link";
link.href = "www.google.com";

document.body.appendChild(link);

//////////////////////////////////////////////////////////////
//
//3. Split Each Sentence to a Separate Line
//
//////////////////////////////////////////////////////////////

const paragraph2 = document.querySelector("p");
paragraph.innerHTML = paragraph.innerHTML.split(/\.[^.|<]/).join(".</p><p>") + "</p>";

//////////////////////////////////////////////////////////////
//
//1. Xml HTTP Request
//
//////////////////////////////////////////////////////////////

const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.restful-api.dev/objects");
// xhr.send();
// xhr.onload = function () {
//   if (xhr.status !== 200) {
//     console.log("Error");
//   } else {
//     console.log("success", xhr.response);
//   }
// };

//////////////////////////////////////////////////////////////
//
//2. Fetch API
//
//////////////////////////////////////////////////////////////

async function fetcher() {
  try {
    const result = await fetch("https://api.restful-api.dev/objects");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    throw new Error("something went wrong");
  }
}

// fetcher();

//////////////////////////////////////////////////////////////
//
//3. Basic Callback
//
//////////////////////////////////////////////////////////////

const asyncFn = (callback) => {
  setTimeout(() => {
    callback("done");
  }, 2000);
};

// asyncFn((message) => {
//   console.log("callback", message);
// });

//////////////////////////////////////////////////////////////
//
//4. Parallel Async Array
//
//////////////////////////////////////////////////////////////

const asyncFn1 = (callback) => {
  setTimeout(() => {
    callback(1);
  }, 3000);
};

const asyncFn2 = (callback) => {
  setTimeout(() => {
    callback(2);
  }, 2000);
};

const asyncFn3 = (callback) => {
  setTimeout(() => {
    callback(3);
  }, 1000);
};

const asyncParallel = (asyncFuncs, callback) => {
  const resultArr = new Array(asyncFuncs.length);
  let resultCounter = 0;

  asyncFuncs.forEach((asyncFunc, index) => {
    asyncFunc((value) => {
      //   console.log("value", value);

      resultArr[index] = value;
      resultCounter++;
      if (resultCounter >= asyncFuncs.length) {
        callback(resultArr);
      }
    });
  });
};

asyncParallel([asyncFn1, asyncFn2, asyncFn3], (result) => {
  //   console.log(result);
});

//////////////////////////////////////////////////////////////
//
//5. Convert Callback to Promise
//
//////////////////////////////////////////////////////////////

const asyncFn4 = (callback) => {
  setTimeout(() => {
    callback(3);
  }, 1000);
};

const asyncFn4Promise = () => {
  return new Promise((resolve) => {
    asyncFn4((data) => {
      resolve(data);
    });
  });
};

// asyncFn4Promise().then((result) => console.log(result));

//////////////////////////////////////////////////////////////
//
//6. Map Data in Promises
//
//////////////////////////////////////////////////////////////

// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive

const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];
const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

// solution 2
const mapUsers = (users, userStatuses) => {
  return users.map((user) => {
    const isActive = userStatuses.find((userStatus) => userStatus.id === user.id).isActive;

    return { ...user, isActive };
  });
};

// Promise.all([getUsers(), getUserStatuses()])
//   .then(([users, userStatuses]) => mapUsers(users, userStatuses))
//   .then((mappedUsers) => {});

//////////////////////////////////////////////////////////////
//
//7. Rewrite Mapping Data in Async Await
//
//////////////////////////////////////////////////////////////

try {
  const usersP = await getUsers();
  const userStatusesP = await getUserStatuses();
  const result = await mapUsers(usersP, userStatusesP);
  //   console.log("result", result);
} catch (error) {
  console.log("err", error);
}

// Promise.all([getUsers(), getUserStatuses()])
//   .then(([users, userStatuses]) => mapUsers(users, userStatuses))
//   .then((mappedUsers) => {});

//////////////////////////////////////////////////////////////
//
//9. Design Request Manager
//
//////////////////////////////////////////////////////////////

const requestMAnager = (url, options = {}, attempts = 3) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(resolve)
      .catch((error) => {
        const isLastAttempt = attempts === 1;
        if (isLastAttempt) {
          console.log("last attempt - reject error ");

          return reject(error);
        }
        setTimeout(() => {
          console.log("call requestMAnager", attempts);

          requestMAnager(url, options, attempts - 1)
            .then(resolve)
            // .catch(reject);
            .catch((err) => {
              console.log("err", err);
            });
        }, 300);
      });
  });
};

// requestMAnager("https://foo.com")
//   .then((response) => {
//     console.log("response", response);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

//////////////////////////////////////////////////////////////
//
//1. Implement Shallow Comparison
//
//////////////////////////////////////////////////////////////

const typeOf = (t) => {
  return Object.prototype.toString.call(t);
};

const shallowCompare = (source, target) => {
  console.log(typeOf(source));
  if (typeOf(source) !== typeOf(source)) {
    return false;
  }

  if (typeOf(source) === "[object Array]") {
    if (source.length !== target.length) {
      return false;
    }

    return source.every((item, index) => item === target[index]);
  }

  if (typeOf(source) === "[object Object]") {
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }

    // console.log("obj ");
    return Object.keys(source).every((key) => source[key] === target[key]);
  }

  return source === target;
};

// console.log(shallowCompare({ a: 1 }, { a: 1 }));

//////////////////////////////////////////////////////////////
//
//1. Implement Shallow Comparison
//
//////////////////////////////////////////////////////////////

const deepCompare = (source, target) => {
  //   console.log(typeOf(source));
  if (typeOf(source) !== typeOf(source)) {
    return false;
  }

  if (typeOf(source) === "[object Array]") {
    if (source.length !== target.length) {
      return false;
    }

    return source.every((item, index) => deepCompare(item, target[index]));
  }

  if (typeOf(source) === "[object Object]") {
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }

    // console.log("obj ");
    return Object.keys(source).every((key) => deepCompare(source[key], target[key]));
  }

  return source === target;
};

// console.log(deepCompare({ a: { a: 1 } }, { a: { a: 1 } }));

//////////////////////////////////////////////////////////////
//
//3. Create Memoization Function
//
//////////////////////////////////////////////////////////////

const memoizeAdd = () => {
  let cache = {};
  console.log("cache", cache);

  return (value) => {
    if (value in cache) {
      console.log("fetching from cache");
      return cache[value];
    } else {
      console.log("calculating results");
      const result = value + 10;
      cache[value] = result;
      return result;
    }
  };
};

// const newAdd = memoizeAdd();
// console.log(newAdd(9));
// console.log(newAdd(9));
// console.log(newAdd(19));

//////////////////////////////////////////////////////////////
//
//1. Fibonacci
//
//////////////////////////////////////////////////////////////

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

const fibo = (n) => {
  if (n < 2) {
    console.log("-> 1");

    return 1;
  } else {
    console.log("call", n - 2, n - 1);
    return fibo(n - 2) + fibo(n - 1);
  }
};

// console.log("result: ", fibo(6));

// 5 + 6 11
// 3 + 4  7
// 1 + 2  3
// 1 + 0  1

//////////////////////////////////////////////////////////////
//
//2. Palindrome
//
//////////////////////////////////////////////////////////////

const palindrome = (str) => {
  //   const sub1 = str.substring(0, str.length / 2);
  const sub2 = str
    // .substring(str.length % 2 ? str.length / 2 + 1 : str.length / 2, str.length)
    .split("")
    .reverse()
    .join("");

  //   console.log(sub1);
  //   console.log(sub2);
  return str === sub2;
};

// console.log(palindrome("anna"));
// console.log(palindrome("madam"));
// console.log(palindrome("foo"));

//////////////////////////////////////////////////////////////
//
//3. Anagram
//
//////////////////////////////////////////////////////////////

const anagram = (str1, str2) => {
  const orderStr = (str) =>
    str
      .toLowerCase()
      .split("")
      .sort((a, b) => (a > b ? 1 : -1))
      .join("");

  return orderStr(str1) === orderStr(str2);
};

// console.log(anagram("listen", "silent"));
// console.log(anagram("listen", "silent"));
// console.log(anagram("rail safety", "fairy tales"));
// console.log(anagram("the eyes", "they see"));
// console.log(anagram("the eyes", "they sesdsde"));

//////////////////////////////////////////////////////////////
//
//4. Finding vowels
//
//////////////////////////////////////////////////////////////

const vowels = ["a", "e", "i", "o", "u"];

const findV = (str, vowels) => {
  const strArr = str.toLowerCase().split("");
  console.log(strArr);

  const res = strArr.reduce((acc, item) => {
    return vowels.includes(item) ? (acc += 1) : acc;
  }, 0);

  return res;
};

// console.log(findV("ta excepturi optio accusamus ab dicta eum deleniti atque vitae deserunt", vowels));

//////////////////////////////////////////////////////////////
//
//1. Convert to Title Case
//
//////////////////////////////////////////////////////////////

// Write a function to convert a string to title case

const titleCase = (str) => {
  const strArr = str
    .toLowerCase()
    // .split("")
    // .map((item, index, arr) => (arr[index - 1] === " " || index === 0 ? item.toUpperCase() : item))
    // .join("");
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  console.log(strArr);

  return strArr;
};

// Provided test cases
// titleCase("I'm a little tea pot"); // should return a string.
// titleCase("I'm a little tea pot"); // should return “I’m A Little Tea Pot”.
// titleCase("sHoRt AnD sToUt"); //should return “Short And Stout”.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return “Here Is My Handle Here Is My Spout”.

//////////////////////////////////////////////////////////////
//
//2. Convert the Time Input Given in 12 Hours Format to 24
//
//////////////////////////////////////////////////////////////

// Write a function which can convert the time input given in 12 hours format to 24 hours format

// const convertTo24HrsFormat = (timeText) => {
//     const
// }

// convertTo24HrsFormat("12:10AM"); // 00:10
// convertTo24HrsFormat("5:00AM"); // 05:00
// convertTo24HrsFormat("12:33PM"); // 12:33
// convertTo24HrsFormat("01:59PM"); // 13:59
// convertTo24HrsFormat("11:8PM"); // 23:08
// convertTo24HrsFormat("10:02PM"); // 22:02
//

//////////////////////////////////////////////////////////////
//
//3. Mapping Data
//
//////////////////////////////////////////////////////////////

// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.

const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

const mappingData = (loc, bulkConfig) => {
  const res = [];

  loc.map((item, index) => {
    const autoassign = item.autoassign;
    const config_key = bulkConfig[index].dataValues.config_key;

    item.location_key.map((item) => {
      const location_key = item;
      const obj = { config_key, location_key, autoassign };
      res.push(obj);
    });
  });

  return res;
};

// console.log(mappingData(loc, bulkConfig));

// [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]

//////////////////////////////////////////////////////////////
//
//5. Validation Messages
//
//////////////////////////////////////////////////////////////

// Format backend validation message to frontend format

const convertReadableFormat = (errObj) => {
  const res = [];

  Object.entries(errObj).map((item) => {
    // console.log(item);
    const key = item[0];
    const value = item[1].errors.map((item) => item.message).join(", ");

    res.push(`${key}: ${value}`);
  });

  return res;
};

const backendErrors = {
  email: {
    errors: [
      {
        message: "Can't be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case",
      },
      {
        message: "Must be at least 8 symbols length",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password",
      },
    ],
  },
};

// console.log(convertReadableFormat(backendErrors));

// ["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]

//////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////
