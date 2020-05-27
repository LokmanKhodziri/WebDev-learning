var todos = [];

//set timer for page to load first
window.setTimeout(function () {
  var input = prompt("What would you want to do?");

  while (input !== "quit") {
    //handle input
    if (input === "list") {
      console.log(todos);
    } else if (input === "new") {
      //ask for new todo
      var newTodo = prompt("Enter new todo");
      //add to do array
      todos.push(newTodo);
    }
    input = prompt("What would you like to do?");
  }
  console.log("Ok, You quit the app");
}, 500);
