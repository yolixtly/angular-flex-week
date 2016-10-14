angular.module('myApp').

config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: './views/data-binding.html',
		controller: 'DataBindingCtrl',
		controllerAs: 'vm'
	}).
	when('/setTimeoutVanilla', {
		templateUrl: './views/digestCycle.html',
		controller: 'MyCtrl1'
	}).
	when('/setTimeoutDigest', {
		templateUrl: './views/digestCycle.html',
		controller: 'MyCtrl2'
	}).
	when('/setTimeoutApply', {
		templateUrl: './views/digestCycle.html',
		controller: 'MyCtrl3'
	}).
	when('/setTimeoutService', {
		templateUrl: './views/digestCycle.html',
		controller: 'MyCtrl4'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);