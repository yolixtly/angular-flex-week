var app = angular.module('myApp', ['ngRoute']);


function explainMe($rootScope, $scope, type, explain){
	// console.clear();
	console.log(type, "========================");
	console.log("setTimeout is triggered" + explain);
	console.log("$rootScope.rootMessage: ", $rootScope.rootMessage);
	console.log("$scope.childMessage: ", $scope.childMessage);
}

