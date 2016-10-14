angular.module('myApp').
factory('topicsFactory', ['$http', function($http){
	return $http.get('./assets/topics.json').then(function(data){
			console.log('Data Success! ', data);
			return data;
	}).catch(function(error){
		console.log('error: ', error);
	});
}]);