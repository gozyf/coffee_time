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

if (((isLeapYear % 4 == 0) && (isLeapYear % 100 !=0)) || (isLeapYear % 400==0)){
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


//11.	Write a  program to input week number and print week day.

let weekDay = prompt("Enter the week number:");
if (weekDay === 1) {
  console.log("This is Monday!");
} else if (weekDay === 2) {
  console.log("This is Tuesday!");
} else if (weekDay === 3) {
  console.log("This is Wednesday!");
} else if (weekDay === 4) {
  console.log("This is Thursday!");
} else if (weekDay === 5) {
  console.log("This is Friday!");
} else if (weekDay === 6) {
  console.log("This is Satarday!");
} else if (weekDay === 7) {
  console.log("This is Sunday!");
} else {
  console.log("Weekday does not exist!");
}

//12.	Write a  program to input month number and print number of days in that month.

let months = prompt("Enter the month:");
if (months === 'January') {
  console.log("January - 31 days!");
} else if (months === 'February') {
  console.log("February	- 28 days (common year) or 29 days (leap year*)!");
} else if (months === 'March') {
  console.log("March - 31 days");
} else if (months === 'April') {
  console.log("April - 30 days!");
} else if (months === 'May') {
  console.log("May - 31 days!");
} else if (months === 'June') {
  console.log("June - 30 days!");
} else if (months === 'July') {
  console.log("July - 31 days!");
} else if (months === 'August') {
  console.log("August - 31 days!");
} else if (months === 'September') {
  console.log("September - 30 ays!");
} else if (months === 'October') {
  console.log("October - 31 days!");
} else if (months === 'November') {
  console.log("November - 30 days!");
} else if (months === 'December') {
  console.log("December - 31 days!");
} else {
  console.log("Months error!");
}

// 13.	Write a  program to count total number of notes in given amount.



//14.	Write a  program to input angles of a triangle and check whether triangle is valid or not.

let angle1 = prompt("Enter the 1st angle:");
let angle2 = prompt("Enter the 2nd angle:");
let angle3 = prompt("Enter the 3rd angle:");
let result = angle1 + angle2 + angle3;

if (result === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
  console.log('This triangle is valid!');
} else {
  console.log('This triangle not valid!');
}

// 15.	Write a  program to input all sides of a triangle and check whether triangle is valid or not.

let side1 = prompt("Enter the 1st side a :");
let side2 = prompt("Enter the 2nd side b :");
let side3 = prompt("Enter the 3rd side c :");

if ((side1 + side2 ) > side3) {
    if ((side2 + side3) > side1) {
        if ((side1 + side3) > side2) {
            alert('Triangle is valid!');
        }  else {
            alert('Triangle is not valid!');
            }
    } else {
        alert('Triangle is not valid!');
        }
} else {
    alert('Triangle is not valid!');
}

//16.	Write a  program to check whether the triangle is equilateral, isosceles or scalene triangle.

let a = prompt("Enter the 1st side a :");
let b = prompt("Enter the 2nd side b :");
let c = prompt("Enter the 3rd side c :");

if (a == b && b == c) {
    alert('This is Equilateral Triangle!');
} else if (a == b || a == c || b == c) {
    alert('This is Isosceles triangle!');
} else {
    alert('This is Scalene triangle!');
    
}

// 17.	Write a  program to find all roots of a quadratic equation.

let a = prompt("Enter a :");
let b = prompt("Enter b :");
let c = prompt("Enter c :");
let discriminant = (b*b) - (4*a*c);
let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
let root2 = (-b - Math.sqrt(discriminant)) / (2*a); 
let imaginary = Math.sqrt(-discriminant) / (2 * a);

if (discriminant > 0) {
    alert('Two distinct and real roots exists:', root1, root2);
} else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    alert('Two equal and real roots exists:', root1, root2);
} else if (discriminant < 0) {
    root1 = root2 = -b / (2 * a);
    console.log(imaginary);
    alert('Two distinct complex roots exists:',root1 + imaginary, root2 - imaginary );

} else {
    alert('Failed!')
}


// 18.	Write a  program to calculate profit or loss.

let sellPrice = prompt('Enter the sell price:');
let costPrice = prompt('Enter the cost price:');
let amount; 

if (sellPrice > costPrice) {
    amount = sellPrice - costPrice;
    alert(amount);
} else if (costPrice > sellPrice){
    amount = costPrice - sellPrice;
    alert(amount);
} else {
    alert('No profit No loss');
}





// 19.	Write a  program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
let physics = prompt('Enter your Physics score:');
let chemistry = prompt('Enter your Chemistry score:');
let biology = prompt('Enter your Biology score:');
let mathematics = prompt('Enter your Mathematics score:');
let computer = prompt('Enter your Computer score:');
let  totalPer = (physics + chemistry + biology + mathematics + computer) / 5.0; 

console.log(totalPer);

if (totalPer >= 90) {
    alert('Grade A');
} else if(totalPer >= 80){
    alert("Grade B");
} else if(totalPer >= 70){
    alert("Grade C");
} else if(totalPer >= 60){
    alert("Grade D");
} else if(totalPer >= 40){
    alert("Grade E");
} else {
    alert("Grade F");
}


*/ 