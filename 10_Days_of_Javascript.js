// HackerRank --> 10 Days of Javascript

// Day 0: Hello, World!

function greeting(parameterVariable) {
  // This line prints 'Hello, World!' to the console:
  console.log("Hello, World!");
  console.log(parameterVariable);

  // Write a line of code that prints parameterVariable to stdout using console.log:
}

// Day 0: Data Types

function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = "HackerRank ";

  console.log(firstInteger + parseInt(secondInteger));

  console.log(firstDecimal + parseFloat(secondDecimal));

  console.log(firstString + secondString);
}

// Day 1: Arithmetic Operators

function getArea(length, width) {
  let area;
  area = length * width;

  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  perimeter = (length + width) * 2;

  return perimeter;
}

// Day 1: Functions

/*
 * Create the function factorial here
 */
function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

// Day 2: Conditional Statements: If-Else

("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getGrade(score) {
  let grade;
  if (score > 25 && score <= 30) grade = "A";
  else if (score > 20 && score <= 25) grade = "B";
  else if (score > 15 && score <= 20) grade = "C";
  else if (score > 10 && score <= 15) grade = "D";
  else if (score > 5 && score <= 10) grade = "E";
  else if (score >= 0 && score <= 5) grade = "F";

  return grade;
}

function main() {
  const score = +readLine();

  console.log(getGrade(score));
}

// Day 2: Conditional Statements: Switch

("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getLetter(s) {
  switch (s.charAt(0)) {
    case "a" || "e" || "i" || "o" || "u":
      return "A";
    case "b" || "c" || "d" || "f" || "g":
      return "B";
    case "h" || "j" || "k" || "l" || "m":
      return "C";
    default:
      return "D";
      return letter;
  }
}

function main() {
  const s = readLine();

  console.log(getLetter(s));
}

// Day 2: Loops

("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let nonVowels = "";
  [...s].forEach((a) =>
    "aeiou".includes(a) ? console.log(a) : (nonVowels += a + "\n")
  );
  console.log(nonVowels);
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}

// Day 3: Arrays

("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  var max = 0,
    secondMax = 0,
    i = 0;
  for (i; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
    } else if (nums[i] < max && nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }
  return secondMax;
}

// Day 3: Try, Catch, and Finally

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(s);
  }
}

// Day 3: Throw

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  if (a <= 0) {
    throw a === 0 ? new Error("Zero Error") : new Error("Negative Error");
  } else {
    return "YES";
  }
}

// Day 4: Create a Rectangle Object

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  return { length: a, width: b, perimeter: 2 * a + 2 * b, area: a * b };
}

// Day 4: Count Objects

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  var count = 0;
  for (const i in objects) {
    if (objects[i].x == objects[i].y) count += 1;
  }
  return count;
}

//Day 4: Classes

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    var sum = 0;
    for (let i of this.sides) {
      sum += i;
    }
    return sum;
  }
}

// Day 5: Inheritance

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
  return this.w * this.h;
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(s) {
    super(s, s);
  }
}

if (
  JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) ===
  JSON.stringify(["constructor"])
) {
  const rec = new Rectangle(3, 4);
  const sqr = new Square(3);

  console.log(rec.area());
  console.log(sqr.area());
} else {
  console.log(-1);
  console.log(-1);
}

// Day 5: Template Literals

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const area = expressions[0];
  const peri = expressions[1];
  const d = Math.sqrt(peri * peri - 16 * area);
  const s1 = (peri + d) / 4;
  const s2 = (peri - d) / 4;
  return [s1, s2].sort();
}

// Day 5: Arrow Functions

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  // var something = function(n){
  //     if(n%2==0)
  //         return n*2;
  //     else
  //         return n*3;
  // }
  // var newArray = nums.map(something);
  // return newArray;
  // or
  // return nums.map(n => n = (n%2==0) ? n*2: n*3);
  // or
  let res = [];
  for (const e of nums) {
    if (e % 2 == 0) res.push(e * 2);
    else res.push(e * 3);
  }
  return res;
}

// Day 6: Bitwise Operators

function getMaxLessThanK(n, k) {
  let max = 0,
    i = 1,
    j;
  for (i; i < n; i++)
    for (j = i + 1; j <= n; j++) {
      let and = i & j;
      if (and < k && and > max) max = and;
    }
  return max;
}

// Day 6: JavaScript Dates

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(dateString).getDay();
  return weekDays[day];
}

// Day 7: Regular Expressions I

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  let re = new RegExp("^([a,e,i,o,u]).*\\1$");

  /*
   * Do not remove the return statement
   */
  return re;
}

// Day 7: Regular Expressions II

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */

  let re = new RegExp("^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$");
  /*
   * Do not remove the return statement
   */
  return re;
}

// Day 7: Regular Expressions III

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */

  let re = new RegExp("\\d+", "g");
  /*
   * Do not remove the return statement
   */
  return re;
}

// Day 8: Create a Button  --> 3 Files

// index.html   --> file

/*<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
         <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    <body>
            <button type="button" id="btn" onclick="buttonClick()">0</button>
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html>*/

// js/button.js  --> file

var i = 1;
function buttonClick() {
  document.getElementById("btn").innerHTML = i++;
}

// css/button.css --> file

// #btn{
//     width: 96px;
//     height:48px;
//     font-size:24px;
// }

// Day 8: Buttons Container --> 3 Files

//index.html --> file

/* 
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
    <div id="btns">
          <div>
            <button id="btn1">1</button>
            <button id="btn2">2</button>
            <button id="btn3">3</button>
          </div>
          <div>
            <button id="btn4">4</button>
            <button id="btn5">5</button>
            <button id="btn6">6</button>
          </div>
          <div>
            <button id="btn7">7</button>
            <button id="btn8">8</button>
            <button id="btn9">9</button>
          </div>
    </div>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>
*/

//js/buttonsGrid.js --> file

const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start positions ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotating in clockwise order
let btn5 = document.getElementById("btn5");

btn5.onclick = function () {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
};

//css/buttonsGrid.css --> file

// #btns
// {
//     width: 75%;
//     position: relative;
// }
// button
// {
//     width: 30%;
//     height: 48px;
//     font-size: 24px;
// }

//  Day 9: Binary Calculator --> 3 files

//index.html --> file
/*
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Binary Calculator</title>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    <body>
        <!-- HTML -->
        <div id="res"></div>
        <div id="btns">
            <button id="btn0" onclick="clickZero()">0</button>
            <button id="btn1" onclick="clickOne()">1</button>
            <button id="btnClr" onclick="clickClear()">C</button>
            <button id="btnEql" onclick="clickEql()">=</button>
            <button id="btnSum" onclick="clickSum()">+</button>
            <button id="btnSub" onclick="clickSub()">-</button>
            <button id="btnMul" onclick="clickMul()">*</button>
            <button id="btnDiv" onclick="clickDiv()">/</button>
        
        </div>
    <script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>
*/

//js/binaryCalculator.js --> file

var resultScreen = document.getElementById("res");
var result = 0;
var operatorsSeq = "";
function clickZero() {
  resultScreen.innerHTML += "0";
}
function clickOne() {
  resultScreen.innerHTML += "1";
}
function clickSum() {
  operatorSeq = "+";
  result = parseInt(resultScreen.innerHTML, 2);
  resultScreen.innerHTML += "+";
}
function clickSub() {
  operatorSeq = "-";
  resultScreen.innerHTML += "-";
}
function clickMul() {
  operatorSeq = "*";
  result = parseInt(resultScreen.innerHTML, 2);
  resultScreen.innerHTML += "*";
}
function clickDiv() {
  operatorSeq = "/";
  resultScreen.innerHTML += "/";
}
function clickEql() {
  var ans = 0;

  if (operatorSeq == "+") {
    var i = resultScreen.innerHTML.indexOf("+");

    var operand2 = parseInt(resultScreen.innerHTML.substr(i + 1), 2);
    ans = result + operand2;
  } else if (operatorSeq == "-") {
    var i = resultScreen.innerHTML.indexOf("-");
    var operand2 = parseInt(resultScreen.innerHTML.substr(i + 1), 2);
    ans = result - operand2;
  } else if (operatorSeq == "*") {
    var i = resultScreen.innerHTML.indexOf("*");
    var operand2 = parseInt(resultScreen.innerHTML.substr(i + 1), 2);
    ans = result * operand2;
  } else if (operatorSeq == "/") {
    var i = resultScreen.innerHTML.indexOf("/");
    var operand2 = parseInt(resultScreen.innerHTML.substr(i + 1), 2);
    ans = result / operand2;
  }

  resultScreen.innerHTML = ans.toString(2);
}
function clickClear() {
  resultScreen.innerHTML = "";
}

//js/binaryCalculator.css --> file

// body{
//     width:33%;
// }
// #res{
//     background-color:lightgray;
//     border:solid;
//     height:48px;
//     font-size:20px;
// }
// #btn0,#btn1{
//     background-color:lightgreen;
//     color:brown;
// }

// #btnClr,#btnEql{
//        background-color:darkgreen;
//     color:white;
// }
// #btnSum,#btnSub,#btnMul,#btnDiv{
//      background-color:black;
//     color:red;
// }
// button{

//     width:25%;
//     height:36px;
//     font-size:18px;
//     margin:0px;
//     float:left;

// }

//  Thank You !
