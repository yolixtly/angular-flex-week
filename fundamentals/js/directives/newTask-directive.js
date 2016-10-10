app.directive('appTask', function(){
	return {
		restrict: 'E',
		scope: {
			task: '='
		},
		templateUrl:
		'js/directives/newTask-directive.html'
	};
});