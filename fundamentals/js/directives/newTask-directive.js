app.directive('appTask', function(){
	return {
		restrict: 'E',
		scope: {
			task: '='
		},
		templateUrl:
		'js/directives/newTask-directive.html',
		//#TODO: make this work with ng-click
		removeItem: function(scope, element, attrs) {
			console.log("removed item");
		}
	};
});