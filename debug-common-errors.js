/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// console.log("Welcome to the bootcamp

// What’s Wrong?
// This program has a syntax error due to a missing closing quote for the string.");
// Fix: Add the missing closing quote.");
console.log("Welcome to the bootcamp"); 

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

// let numbers = [2, 4, "eight"];
// for (let i = 0; i < numbers.length; i++) {
//   let doubled = numbers[i] * 2;
//   console.log(doubled);
// }

// What’s Wrong?
// This program has a runtime error because it tries to multiply a string ("eight") by a number, which is not allowed in JavaScript.
// Fix: Ensure all elements in the array are numbers.
let numbers = [2, 4, 8]; // Changed "eight" to a number
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
// Output is now be 4, 8, 16



// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return true;  // Supposed to indicate num is NOT prime
//     }
//   }
//   return false; // Supposed to indicate num IS prime
// }

// console.log(isPrime(7)); // Expected true but gets false
// console.log(isPrime(4)); // Expected false but gets true

// What’s Wrong?
// This program has a logic error in the return statements inside the loop.
// Fix: Change the return statement to correctly indicate whether the number is prime or not.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Corrected to indicate num is NOT prime
    }
  }
  return true; // Corrected to indicate num IS prime
} 
console.log(isPrime(7)); // Now correctly returns true
console.log(isPrime(4)); // Now correctly returns false

// Reflection
// The most useful debugging methods were reading error messages to identify the type of error,
// using console.log() to trace variable values, and testing in small steps to isolate issues.
// In future projects, I will apply these techniques to quickly identify and resolve errors in my code.

