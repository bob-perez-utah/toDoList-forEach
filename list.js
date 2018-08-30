    var todos = ["Buy New Turtle"];
    
    var input = prompt("What would you like to do ? :");
    
    while (input !== "quit") {
        // handle input
        if (input === "list") {
            listTodos();
            
        } else if (input === "new") {
            addTodo();
            
        } else if (input === "delete") {
            deleteTodo();

        }
    
        //ask again for new input
        input = prompt("What would you like to do ? :");
    }
    
      console.log("OK, You Quit The App");

      function addTodo() {
         // ask for new todo
         var newTodo = prompt("Enter new Todo");
         todos.push(newTodo);
         console.log("Added a Todo");
      }

      function listTodos() {
        console.clear();
            console.log("**********");

            // i is the index , it can be called anything
            todos.forEach(function(todo, i) {
                console.log(i + ": " + todo);
            });
            console.log("**********");
      }

      function deleteTodo() {
            //ask for index of toDo to be deleted
            //delete todo
            var index = prompt("Enter index of todo to delete");
            // to delete index
            todos.splice(index, 1);
            console.log("Deleted Todo");
      }
        
  