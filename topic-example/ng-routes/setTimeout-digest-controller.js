angular.module('myApp').
controller('MyCtrl2', ['$rootScope', '$scope', '$timeout', function($rootScope, $scope, $timeout) {
	$scope.title = "$digest on child scope";
    $rootScope.rootMessage = "Initial Global Hello";
    $scope.childMessage = 'Initial child hello';

	/* Sample 2: using only $digest */
	setTimeout(function(){
		$rootScope.rootMessage = "Global hello Changed with Digest!!";
		$scope.childMessage = 'Hello from Controller1 Changed with Digest and in the VIEW ALSO!!!';
		$scope.$digest();
		explainMe($rootScope, $scope, '$digest()', ' only the child Hello is updated');
	}, 2000);
}]);