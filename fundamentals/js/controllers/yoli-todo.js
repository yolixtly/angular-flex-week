var app = angular.module("yoliTodoApp", []);

app.controller('HelloCtrl', [function(){
	var vm = this;
	vm.sayHi = "This is a cool little app!";
}]);

app.controller('TodoCtrl', [function(){
	var td = this;

 	td.todos = [
 		 { "text": "Finish a Todo App with Angular", "done": false },
 		 { "text": "Add Validations for these entries", "done": false },
 		 { "text": "Add Node.js to this app", "done": false }
 	];

 	td.reminding = function(){
 		var count = 0; 
 		for(var i = 0; i < td.todos.length; i++){
 			if(!td.todos[i].done){
 				count++;
  			}
 		}
 		return count; 
 	};

 	td.addTodo = function(){
 		td.todos.push({ text: td.newTask, done: false });
 		td.newTask = "";
 	};

 	td.updateList = function(){
 		//we make a shallow copy of the current state
 		var oldTodos = td.todos;
 		//we reset the state to empty 
 		td.todos = [];
 		//ignore checked elements from the view, 
 		//and only show the todos.done = false
 		angular.forEach(oldTodos, function(item){
 			if(!item.done){
 				td.todos.push(item);
 			}
 		});	
 	};
}]);