console.log('I am building an app I am proud of! I enjoy my journey in its development!');

var app = angular.module("yoliTodoApp", []);

app.controller('HelloCtrl', function(){
	var vm = this;
	vm.sayHi = "I know I can go a little further...";
});