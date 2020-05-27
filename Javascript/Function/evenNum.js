//check even number

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   //return true if even
//   else {
//     return false;
//   }
//   //return false if odd
// }

function isEven(num) {
  return num % 2 === 0;
}
//more short code same result

//Factorial
function factorial(num) {
  //define result variable
  var result = 1;

  //calculate factorial and store value in result
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  //return the result variable
  return result;
}

//function kebab to snake
function kebabToSnake(str) {
  //replace all '-' with "_"s
  var newStr = str.replace(/-/g, "_");
  //resturn string
  return newStr;
}
