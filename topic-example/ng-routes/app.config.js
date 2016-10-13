angular.module('myApp').

config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/setTimeoutVanilla', {
		templateUrl: './digestCycle.html',
		controller: 'MyCtrl1'
	}).
	when('/setTimeoutDigest', {
		templateUrl: './digestCycle.html',
		controller: 'MyCtrl2'
	}).
	when('/setTimeoutApply', {
		templateUrl: './digestCycle.html',
		controller: 'MyCtrl3'
	}).
	when('/setTimeoutService', {
		templateUrl: './digestCycle.html',
		controller: 'MyCtrl4'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);