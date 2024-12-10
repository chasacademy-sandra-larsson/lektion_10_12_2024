// Exempel för Call Stack https://www.jsv9000.app/

// function multiply(a, b) {
//     return a * b;
// }

// function square(n) {
//   return multiply(n, n)
// }

// function printSquare(n) {
//     var s = square(n)
//     console.log(s);
// }
// printSquare(4);

// function foo() {
//     throw new Error("An error occured!");
// }

// function bar() {
//     foo();
// }

// function baz() {
//     bar();
// }

// baz();

// function foo(counter) {
//     if (counter > 10) return; // Stop recursion when counter exceeds 10
//     console.log(`Call stack depth: ${counter}`);
//     foo(counter + 1); // Recursive call with an incremented counter
// }

// foo(1);

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 5000);

// console.log("End");

// console.log("Start");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((data) => {
//     return data.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error(error);
// });

// console.log("End");

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);



// Asyncronous code
// [1, 2, 3, 4].forEach(function(item) {
//     console.log(item);
// });

// // Asyncronous code
// function asyncForEach(array, callback) {
//     array.forEach(function(item) {
//         setTimeout(function() {
//             callback(item);
//         }, 0);
//     });
// }

// asyncForEach([1, 2, 3, 4], function(item) {
//     console.log(item);
// });