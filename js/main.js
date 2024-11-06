/*
question 1 :-
1- Write a program that allows the user to enter a number then print it.
Ex: if the user enter 5 as a number ⇒ should log a 5
Ex: if the user enter 2 as a number ⇒ should log a 2 
*/

// var age= prompt()
// console.log(age);

/* 

2- Write a program that takes a number from the user then print yes if that
number can divide by 3 and 4 at the same time, otherwise print no.
Ex: if the user enters 12 as a number ⇒ should log a yes.
Ex: if the user enters 19 as a number ⇒ should log a no.
Hint: the number should have no remaining after division on 3 and 4 to
print yes.

—-----------------------------------------

*/

// var num = Number(prompt("Enter Any Number"));
// if(num%3==0 && num%4==0){
//     console.log("yes");

// }
// else{
//     console.log("nop");

// }

/*
3- Write a program that allows the user to insert 2 integers then print the
max.
Ex: if the user enters 5 and 7 as numbers ⇒ should log a 7.
Ex: if the user enters 2 and 0 as numbers ⇒ should log a 2.

*/

// var num1 = Number(prompt("Enter Number 1"));
// var num2 = Number(prompt("Enter Number 2"));
// if (num1 > num2) {
//   console.log("the max number is " + num1);
// } else if (num2 > num1) {
//   console.log("the max number is " + num2);
// } else {
//   console.log("dont write the same number fool");
// }

/*
4- Write a program that allows the user to insert an integer then print
negative if it is negative number, otherwise print positive.
Ex: if the user enters 5 as a number ⇒ should log a Positive.
Ex: if the user enters -2 as a number ⇒ should log a Negative.
—----------------------------------------------------------------------

*/
// var num1 = Number(prompt("Enter a Number "));
// if (num1 < 0) {
//   console.log("it is Negative number ");
// } else if (num1 > 0) {
//   console.log("it is Positive number ");
// } else {
//   console.log("dont write the same number fool");
// }

/*

5- Write a program that takes 3 integers from the user then prints the max
element and the min element.
Ex: if the user enters 5 and 6 and 1 as numbers ⇒ should log a 6 is
the max and 1 is the min
Ex: if the user enters 10 and 10 and -1 as numbers ⇒ should log a 10
is the max and -1 is the min

*/

// var num1 = Number(prompt("enter number 1"));
// var num2 = Number(prompt("enter number 2"));
// var num3 = Number(prompt("enter number 3"));
// var max = num1;
// var min = num1;
// if (num2 > max) {
//   max = num2;
// }
// if (num3 > max) {
//   max = num3;
// }
// if (num2 < min) {
//   min = num2;
// }
// if (num3 < min) {
//   min = num3;
// }

// console.log(max + " is the max and " + min + " is the min");

/*

6- Write a program that allows the user to insert an integer number then
check If a number is even or odd.
Ex: if the user enters 5 as a number ⇒ should log an Odd.
Ex: if the user enters 6 as a number ⇒ should log an Even.
Hint: the number should have no remaining after division on 2 to print
Even.
—--------------------
*/

// var num1 = Number(prompt("enter number 1"));

// if (num1 % 2 == 0) {
//   console.log("it is Even number ");
// } else {
//   console.log("it is odd number ");
// }

/**
 7- Write a program that take character from user then if it is vowel chars
(a,e,I,o,u) then print vowel otherwise print consonant
Note: lowercase and uppercase are important.
Ex: if the user enters a or A as a character ⇒ should log Vowel.
Ex: if the user enters s or S as a character ⇒ should log Consonant.

 */

// var char = prompt("enter charcter 1");
// if (
//   char === "a" ||
//   char === "A" ||
//   char === "e" ||
//   char === "E" ||
//   char === "i" ||
//   char === "I" ||
//   char === "o" ||
//   char === "O" ||
//   char === "u" ||
//   char === "u"
// ) {
//   console.log("Vowel " + char);
// } else {
//   console.log("constant " + char);
// }

/**
 * 8- Write a program that allows the user to enter a number then print all the
numbers starting from 1 to the user entered number.
Ex: if the user enter 5 as a number ⇒ should log a 1,2,3,4,5
Ex: if the user enter 7 as a number ⇒ should log a 1,2,3,4,5,6,7
Hint: Loops are helpful when you want to make pattern steps or when you
want to make a code repeat many times.
 */

//  var num = prompt("enter Number 1");
//  for (num==1 ; num>= 1; num--){
//     console.log("number "+num);
//  }
/**
 * 9- Write a program that allows the user to insert an integer then print a
multiplication table up to 12.
Ex: if the user enters 5 as a number ⇒ should log 5,10,15,20,25.
Ex: if the user enters 3 as a number ⇒ should log 3,6,9,12,15,18,21.
Hint: Loops are helpful when you want to make pattern steps or when you
want to make a code repeat many times
 */
// var num = Number(prompt("Enter a Number"));
// var result = "";
// var i = 1;
// while (i <= 12) {
//   var bro = num * i;
//   var result = result + bro;
//   if (i < 12) {
//     result = result + ", ";
//   }
//   i = i + 1;
// }
// console.log(result);
/**
 * 10- Write a program that allows the user to enter a number then print all the
only evens numbers starting from 1 to the user entered number.
Ex: if the user enters 5 as a number ⇒ should log 2,4.
Ex: if the user enters 13 as a number ⇒ should log 2,4,6,8,10,12.
—---------------------------------------------------------------------------------------------
 */

// var num1 = Number(prompt("enter number 1"));
// for ( ; num1 >= 2; num1--) {
//   if (num1 % 2 == 0) {
//     console.log("it is Even number " + num1);
//   }
// //   else {
// //     console.log("it is odd number ");
// //   }
// }

/**
 
 * 11- Write a program that allows the user to enter two numbers and print the
result to make the second number power the first number.
Ex: if the user enters 2 and 10 as a number ⇒ should log 1024.
Ex: if the user enters 4 and 3 as a number ⇒ should log 64.
 */

// var num1 = Number(prompt("enter number1"));
// var num2 = Number(prompt("enter number1 poweredd to number1"));
// var power = num1 ** num2;
// console.log(power);

/**
 * 12- Write a program to enter marks of five subjects and calculate total,
average and percentage.
Note: The total subject mark is from 100 and user should be able to enter 5
numbers; each number presents a subject mark.
Ex: enter first mark: 60
enter second mark: 70
enter third mark: 68
enter fourth mark: 76
enter fifth mark: 92
Should log ( total : 366, average : 73.2 and percentage : 73.2%)
Ex: enter first mark: 95
enter second mark: 76
enter third mark: 58
enter fourth mark: 90
enter fifth mark: 89
Should log ( total : 408, average : 81.6 and percentage : 81.6%)
Hint: Loops are helpful when you want to make pattern steps or when you
want to make a code repeat many times.
 */

// let total = 0;

// for (let i = 1; i <= 5; i++) {
//   let mark = parseFloat(prompt(`Enter mark for subject ${i} (out of 100):`));

//   while (isNaN(mark) || mark < 0 || mark > 100) {
//     mark = parseFloat(
//       prompt(`Please enter a valid mark (0 - 100) for subject ${i}:`)
//     );
//   }

//   total += mark;
// }

// let average = total / 5;
// let percentage = (total / 500) * 100;

// console.log("Total: " + total);
// console.log("Average: " + average.toFixed(2));
// console.log("Percentage: " + percentage.toFixed(2));

/**
 * 13- Write a program to input the month number and print the number of
days in that month.
Ex: if the user enters 10 as a number ⇒ should log 31 days.
Ex: if the user enters 6 as a number ⇒ should log 30 days.
 */

// let month = Number(prompt("Enter the month number (1 for January, 2 for February, etc.):"));

// if (month >= 1 && month <= 12) {
//     if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//         console.log("31 days");
//     } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//         console.log("30 days");
//     } else if (month === 2) {
//         let year = Number(prompt("Enter the year to check if it's a leap year:"));
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             console.log("29 days (Leap Year)");
//         } else {
//             console.log("28 days");
//         }
//     }
// } else {
//     console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

/**
 * 14- Write a program to enter marks of five subjects and find percentage
and grade.
Note: The total subject mark is from 100 and the grades ranges are :
A grade from 90 to 100,
B grade from 80 to 90,
C grade from 70 to 80,
D grade from 50 to 70
F grade under 50.

 */

// for (let i = 1; i <= 5; i++) {
//     let mark = parseFloat(prompt(`Enter mark for subject ${i} (out of 100):`));

//     while (isNaN(mark) || mark < 0 || mark > 100) {
//         mark = parseFloat(prompt(`Please enter a valid mark (0 - 100) for subject ${i}:`));
//     }

//     let grade;
//     if (mark >= 90 && mark <= 100) {
//         grade = "A";
//     } else if (mark >= 80 && mark < 90) {
//         grade = "B";
//     } else if (mark >= 70 && mark < 80) {
//         grade = "C";
//     } else if (mark >= 50 && mark < 70) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }

//     console.log(`Subject ${i}: ${grade} and ${mark}%`);
// }

/**
 * 15- Write a program to input the month number and print the number of
days in that month.
Ex: if the user enters 10 as a number ⇒ should log 31 days.
Ex: if the user enters 6 as a number ⇒ should log 30 days.
—-----------------------------------------------------------------------
 */

// let month = Number(prompt("Enter the month number (1-12):"));

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days");
//         break;
//     case 2:
//         console.log("28 or 29 days");
//         break;
//     default:
//         console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

/**
 * 16- Write a program that take character from user then if it is vowel chars
(a,e,I,o,u) then print vowel otherwise print consonant
Note: lowercase and uppercase are important.

 */
// let char = prompt("Enter a character:");

// switch (char) {
//     case 'a':
//     case 'A':
//     case 'e':
//     case 'E':
//     case 'i':
//     case 'I':
//     case 'o':
//     case 'O':
//     case 'u':
//     case 'U':
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }

/**
 * 17- Write a program that takes 2 integers from the user then prints the max
element.
Ex: if the user enters 5 and 6 as numbers ⇒ should log a 6 is the
max.
Ex: if the user enters 10 and -1 as numbers ⇒ should log a 10 is the
max.

 */

// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// switch (true) {
//     case (num1 > num2):
//         console.log(num1 + " is the max.");
//         break;
//     case (num1 < num2):
//         console.log(num2 + " is the max.");
//         break;
//     default:
//         console.log("Both numbers are equal.");
// }

/**
 * 18- Write a program that allows the user to insert an integer number then
check If a number is even or odd.

 */

// let number = Number(prompt("Enter an integer number:"));

// switch (number % 2) {
//     case 0:
//         console.log("Even");
//         break;
//     case 1:
//         console.log("Odd");
//         break;
//     default:
//         console.log("Invalid input");
// }

/**
 * 19- Write a program that allows the user to insert an integer then print
negative if it is negative number, or print positive if it is a positive number or
zero if it is zero.
Ex: if the user enters 5 as a number ⇒ should log a Positive.
Ex: if the user enters -2 as a number ⇒ should log a Negative.
Ex: if the user enters 0 as a number ⇒ should log a Zero.
 */

// let number = Number(prompt("Enter an integer number:"));

// switch (true) {
//     case (number > 0):
//         console.log("Positive");
//         break;
//     case (number < 0):
//         console.log("Negative");
//         break;
//     case (number === 0):
//         console.log("Zero");
//         break;
//     default:
//         console.log("Invalid input");
// }

/**
 * 20- Write a program to create Simple Calculator.
 */

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

let operator = prompt("Enter the operator (+, -, *, /):");

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 !== 0) {
      console.log(num1 / num2);
    } else {
      console.log("Cannot divide by zero.");
    }
    break;
  default:
    console.log("Invalid operator");
}
