console.log('I am building an app I am proud of! I enjoy my journey in its development!');

var app = angular.module("yoliTodoApp", []);

app.controller('HelloCtrl', [function(){
	var vm = this;
	vm.sayHi = "I know I can go a little further...";
}]);

app.controller('TodoCtrl', [function(){
	var td = this;

 	td.todos = [
 		 { "text": "Finish a Todo App with Angular", "done": false },
 		 { "text": "Add Validations for these entries", "done": false },
 		 { "text": "Add Node.js to this app", "done": false }
 	];

 	// td.reminding = function(){}
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
}]);