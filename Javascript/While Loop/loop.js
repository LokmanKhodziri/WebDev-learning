console.log("PRINT ALL NUMBER BETWEEN -10 AND 19");
var counter = -10;

while (counter < 20) {
  console.log(counter);
  counter++;
}

console.log("PRINT ALL EVEN NUMBER BETWEEN 10 AND 40");
var evenNumber = 10;

while (evenNumber <= 40) {
  if (evenNumber % 2 === 0) {
    console.log(evenNumber);
  }
  evenNumber += 1;
}

console.log("PRINT ALL ODD NUMBER BETWEEN 300 AND 333");
var oddNumber = 300;

while (oddNumber <= 333) {
  if (oddNumber % 2 !== 0) {
    console.log(oddNumber);
  }
  oddNumber += 1;
}

console.log("PRINT ALL NUMBER DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var divNumber = 5;

while (divNumber <= 50) {
  if (divNumber % 3 === 0 && divNumber % 5 === 0) {
    console.log(divNumber);
  }
  divNumber += 1;
}
