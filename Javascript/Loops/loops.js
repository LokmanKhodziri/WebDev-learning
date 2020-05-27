console.log("print all number between -10 to 19");
for (var num = -10; num <= 19; ++num) {
  console.log(num);
}

console.log("print all even number between 10 and 40");
for (var evenNum = 10; evenNum <= 40; evenNum += 1) {
  if (evenNum % 2 === 0) {
    console.log(evenNum);
  }
}

console.log("print all odd number between 300 and 333");
for (var oddNum = 300; oddNum <= 333; oddNum += 1) {
  if (oddNum % 2 !== 0) {
    console.log(oddNum);
  }
}

console.log("print divisible number of 5 and 3");
for (var divNum = 5; divNum <= 50; divNum++) {
  if (divNum % 5 === 0 && divNum % 3 === 0) {
    console.log(divNum);
  }
}
