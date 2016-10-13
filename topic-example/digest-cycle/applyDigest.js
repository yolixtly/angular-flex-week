var app = angular.module('myApp');

app.controller('MyCtrl2', ['$rootScope','$scope', '$timeout', function($rootScope, $scope, $timeout){
	$rootScope.rootMessageService = "Global hello From Controller1";
	$scope.childMessageService = 'Hello from Controller1';

	/* Sample 4: The best way */
	$timeout(function() {
		$rootScope.rootMessageService = "Global Changed by timeout Service!!!";
		$scope.childMessageService = 'Child Changed by timeout Service!!';
		explain3Me($rootScope, $scope, "$setTimeout Service", 'it triggers digest cyle under the hood!');
	}, 2000);
}]);

function explain3Me($rootScope, $scope, type, explain){
	console.log(type, "========================");
	console.log("setTimeout is triggered" + explain);
	console.log("$rootScope.rootMessage: ", $rootScope.rootMessage);
	console.log("$scope.childMessage: ", $scope.childMessage);
}