angular.module('myApp').
controller('MyCtrl3', ['$rootScope', '$scope', '$timeout', function($rootScope, $scope, $timeout) {
	$scope.title = "$apply";
    $rootScope.rootMessage = "Initial Global Hello";
    $scope.childMessage = 'Initial child hello';
	/* Sample 3: using $apply */
	setTimeout(function(){
		$rootScope.rootMessage = "Global hello Changed using $apply!";
		$scope.childMessage = 'Hello from Controller1 Changed $apply!!';
		$scope.$apply();
		explainMe($rootScope, $scope, '$apply()', ' apply, triggers all of it');
	}, 2000);
}]);
