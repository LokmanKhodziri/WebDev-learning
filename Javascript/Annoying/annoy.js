//version 1

// var answer = prompt("Are we there yet?");

// while (answer !== "yes") {
//   var answer = prompt("Are we there yet?");
// }
// if (answer === "yes") {
//   alert("YAY! We made it!!!");
// }

//version 2

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}

alert("Yay! We made it!!!");
