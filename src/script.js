1.	Write a  program to find maximum between two numbers.
let a = prompt("Enter the first num", a);
let b = prompt("Enter the second num", b);
if (a > b) {
  console.log("A is beigger than B");
} else {
  console.log("B is bigger than A");
}

// 2. Find max between three numbers
let num1 = prompt('Enter the first number:', num1);
let num2 = prompt('Enter the second number:', num2);
let num3 = prompt('Enter the third number:', num3);

if (num1 > num2 && num1 > num3){
  console.log('Num1 > num2 && num3');
} else if (num2 > num1 && num2 > num3){
  console.log('Num2 > num1 && num3');
} else {
  console.log('Num3 > num2 && num1');
}

3.	Write a  program to check whether a number is negative, positive or zero.

let a = prompt('Enter the number:', a);
if (a < 0) {
  console.log('This is the negative number!');
} else if (a > 0){
  console.log('This is the positive number!');
} else if (a == 0){
  console.log('This is ZERO!');
}

4.	Write a  program to check whether a number is divisible by 5 and 11 or not.

let a = prompt('Enter the number', a);

if ((a % 5 === 0) && (a % 11 === 0)){
  console.log('This number is divisible by 5 and 11');
} else {
  console.log('This number is not divisible by 5 and 11');
}
