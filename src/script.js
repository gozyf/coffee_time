/*
//1.	Write a  program to find maximum between two numbers.
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

//3.	Write a  program to check whether a number is negative, positive or zero.

let a = prompt('Enter the number:', a);
if (a < 0) {
  console.log('This is the negative number!');
} else if (a > 0){
  console.log('This is the positive number!');
} else if (a == 0){
  console.log('This is ZERO!');
}

//4.	Write a  program to check whether a number is divisible by 5 and 11 or not.

let a = prompt('Enter the number', a);

if ((a % 5 === 0) && (a % 11 === 0)){
  console.log('This number is divisible by 5 and 11');
} else {
  console.log('This number is not divisible by 5 and 11');
}


//5.	Write a  program to check whether a number is even or odd.

let a = prompt('Enter the munber!');
if (a % 2 === 0) {
  console.log('This is even number!');
} else {
  console.log('This is odd number!');
}


//6.	Write a  program to check whether a year is leap year or not.

let isLeapYear = prompt('Enter the year!');

if (isLeapYear % 4 === 0) {
  console.log('This is the leap year!');
} else {
  console.log('this is not the leap year!');
}


//7.	Write a  program to check whether a character is alphabet or not.

let character = prompt('Enter the character:', character);

if (((character >= 'a') && (character <= 'z')) || ((character >= 'A') && (character <= 'Z'))){
  console.log('This is a alphabet!');
} else {
  console.log('This is not an alphabet!');
}



//8.	Write a  program to input any alphabet and check whether it is vowel or consonant.

let ch = prompt('Input the alphabet:');
if (ch === 'a' || ch ==='i'|| ch ==='u'|| ch ==='e'|| ch ==='o'
   || ch === 'A' || ch ==='I'|| ch ==='U'|| ch ==='E'|| ch ==='O' ){
  console.log('This is the vowel!');
} else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
  console.log('This is the consonant!');
} else {
  console.log('This is not an alphabet!');
}



//9.	Write a  program to input any character and check whether it is alphabet, digit or special character.

let ch = prompt('Enter the character or digit(0 - 9):');

if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
  console.log('This is an alphabet!');
} else if (ch >= 0 && ch <= 9 ) {
  console.log('This is a digit!');
} else {
  console('This is special character!');
}


//10.	Write a  program to check whether a character is uppercase or lowercase alphabet.

let upCh = prompt('Enter the character:');
if (upCh >= 'A' && upCh <= 'Z') {
  console.log('This is uppercase alphabet!');
} else if (upCh >= 'a' && upCh <= 'z') {
  console.log('This is lowercase alphabet!');
} else {
  console('This is not alphabet!');
}

*/
