// chapter #38 to 42
// FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS

// ==== question 1 ====
// function power(a, b) {
//   var result = 1;
//   for (var i = 1; i <= b; i++) {
//     result += a;
//   }
//   return result;
// }

// var base = 2;
// var exponent = 4;
// document.write("Result:", power(base, exponent)); // Output: 16



// ==== question 2 ====
// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var inputYear = 2024;
// if (isLeapYear(inputYear)) {
//   console.log(inputYear + " is a Leap Year.");
// } else {
//   console.log(inputYear + " is NOT a Leap Year.");
// }



// ==== question 3 ====
// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }
// function calculateArea(a, b, c) {
//   var S = calculateS(a, b, c);
//   var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area;
// }

// var sideA = 5;
// var sideB = 6;
// var sideC = 7;
// var triangleArea = calculateArea(sideA, sideB, sideC);
// console.log("Area of the triangle is: " + triangleArea.toFixed(2));



// ==== question 4 ====
// function calculateAverage(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }

// function calculatePercentage(m1, m2, m3) {
//   var totalMarks = 300;
//   var obtainedMarks = m1 + m2 + m3;
//   return (obtainedMarks / totalMarks) * 100;
// }


// function mainFunction(m1, m2, m3) {
//   var avg = calculateAverage(m1, m2, m3);
//   var perc = calculatePercentage(m1, m2, m3);
  
//   console.log("Marks: ", m1, m2, m3);
//   console.log("Average Marks: " + avg.toFixed(2));
//   console.log("Percentage: " + perc.toFixed(2) + "%");
// }

// mainFunction(85, 90, 78);



// ==== question 5 ====
// function myIndexOf(str, char) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// var sentence = "hello world";
// var findChar = "o";
// var result = myIndexOf(sentence, findChar);

// console.log("Index of '" + findChar + "' is: " + result);



// ==== question 6 ====
// function deleteVowels(sentence) {
//   var result = "";
//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i].toLowerCase();
//     if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
//       result += sentence[i];
//     }
//   }
//   return result;
// }

// var input = "I love JavaScript!";
// var output = deleteVowels(input);

// console.log("Original Sentence: " + input);
// console.log("Without Vowels: " + output);



// ==== question 7 ====
// function countVowelPairs(sentence) {
//   var count = 0;
//   var vowels = "aeiouAEIOU";

//   for (var i = 0; i < sentence.length - 1; i++) {
//     var first = sentence[i];
//     var second = sentence[i + 1];

//     switch (true) {
//       case (vowels.includes(first) && vowels.includes(second)):
//         count++;
//         break;
//     }
//   }

//   return count;
// }

// var line = "Pleases read this application and give me gratuity";
// var result = countVowelPairs(line);

// console.log("Total vowel pairs found: " + result);



// ==== question 8 ====
// function convertToMeters(km) {
//   return km * 1000;
// }

// function convertToFeet(km) {
//   return km * 3280.84;
// }

// function convertToInches(km) {
//   return km * 39370.1;
// }

// function convertToCentimeters(km) {
//   return km * 100000;
// }

// function mainFunction(km) {
//   console.log("Distance in Kilometers: " + km + " km");

//   var meters = convertToMeters(km);
//   var feet = convertToFeet(km);
//   var inches = convertToInches(km);
//   var centimeters = convertToCentimeters(km);

//   console.log("In Meters: " + meters);
//   console.log("In Feet: " + feet.toFixed(2));
//   console.log("In Inches: " + inches.toFixed(2));
//   console.log("In Centimeters: " + centimeters);
// }

// var distance = 5;
// mainFunction(distance);



// ==== question 9 ====
// function calculateOvertime(hoursWorked) {
//   var overtimePay = 0;

//   if (hoursWorked > 40) {
//     var overtimeHours = hoursWorked - 40;
//     overtimePay = overtimeHours * 12;
//     console.log("Overtime Hours: " + overtimeHours);
//     console.log("Overtime Pay: Rs. " + overtimePay);
//   } else {
//     console.log("No overtime. Employee worked " + hoursWorked + " hours.");
//   }
// }

// var employeeHours = 47;
// calculateOvertime(employeeHours);



// ==== question 10 ====
// function calculateNotes(amount) {
//   var hundredNotes = Math.floor(amount / 100);
//   amount = amount % 100;

//   var fiftyNotes = Math.floor(amount / 50);
//   amount = amount % 50;

//   var tenNotes = Math.floor(amount / 10);
//   amount = amount % 10;

//   console.log("To withdraw Rs. " + (hundredNotes*100 + fiftyNotes*50 + tenNotes*10));
//   console.log("100 Rupees Notes: " + hundredNotes);
//   console.log("50 Rupees Notes: " + fiftyNotes);
//   console.log("10 Rupees Notes: " + tenNotes);
//   console.log("Remaining amount (cannot be withdrawn with available notes): Rs. " + amount);
// }

// var withdrawAmount = 370;
// calculateNotes(withdrawAmount);

// End of chapter #38 to 42