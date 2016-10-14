app.controller('MyCtrl4', ['$rootScope','$scope', '$timeout', function($rootScope, $scope, $timeout){
	$scope.title = "$timeout Service";
	$rootScope.rootMessage = "Initial Global Hello";
	$scope.childMessage = 'Initial child hello';

	/* Sample 4: The best way */
	$timeout(function() {
		$rootScope.rootMessage = "Global Changed by timeout Service!!!";
		$scope.childMessage = 'Child Changed by timeout Service!!';
		explainMe($rootScope, $scope, "$setTimeout Service", '!');
	}, 2000);		
}]);
