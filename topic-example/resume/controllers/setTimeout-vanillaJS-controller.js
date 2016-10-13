angular.module('myApp').
controller('MyCtrl1', ['$rootScope', '$scope', '$timeout', function($rootScope, $scope, $timeout) {
	$scope.title = "VanillaJS";
    $rootScope.rootMessage = "Initial Global Hello";
    $scope.childMessage = 'Initial child hello';

    /*  Sample 1 : Vanilla JS */
    setTimeout(function(){
    	$rootScope.rootMessage = "Global hello Changed!!";
    	$scope.childMessage = 'Hello from Controller1 Changed!!';
    	explainMe($rootScope, $scope, 'Vanilla Javascript', ' but VIEW WAS NOT UPDATED');
    }, 2000);
}]);