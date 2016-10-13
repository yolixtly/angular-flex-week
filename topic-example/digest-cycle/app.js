var app = angular.module('myApp', []);

app.controller('MyCtrl1', ['$rootScope','$scope', '$timeout', function($rootScope, $scope, $timeout){
	$rootScope.rootMessage = "Initial Global Hello";
	$scope.childMessage = 'Initial child hello';

	/*  Sample 1 : Vanilla JS */
	// setTimeout(function(){
	// 	$rootScope.rootMessage = "Global hello Changed!!";
	// 	$scope.childMessage = 'Hello from Controller1 Changed!!';
	// 	explainMe($rootScope, $scope, 'Vanilla Javascript', ' but VIEW WAS NOT UPDATED');
	// }, 2000);

	/* Sample 2: using only $digest */
	setTimeout(function(){
		$rootScope.rootMessage = "Global hello Changed with Digest!!";
		$scope.childMessage = 'Hello from Controller1 Changed with Digest and in the VIEW ALSO!!!';
		$scope.$digest();
		explainMe($rootScope, $scope, '$digest()', ' only the child Hello is updated');
	}, 2000);
				
	/* Sample 3: using $apply */
	// setTimeout(function(){
	// 	$rootScope.rootMessage = "Global hello Changed using $apply!";
	// 	$scope.childMessage = 'Hello from Controller1 Changed $apply!!';
	// 	$scope.$apply();
	// 	explainMe($rootScope, $scope, '$apply()', ' apply, triggers all of it');
	// }, 2000);
	
	/* Sample 4: The best way */
	// $timeout(function() {
	// 	$rootScope.rootMessage = "Global Changed by timeout Service!!!";
	// 	$scope.childMessage = 'Child Changed by timeout Service!!';
	// 	explain3Me($rootScope, $scope, "$setTimeout Service", '!');
	// }, 2000);	
		
}]);

function explainMe($rootScope, $scope, type, explain){
	console.log(type, "========================");
	console.log("setTimeout is triggered" + explain);
	console.log("$rootScope.rootMessage: ", $rootScope.rootMessage);
	console.log("$scope.childMessage: ", $scope.childMessage);
}

