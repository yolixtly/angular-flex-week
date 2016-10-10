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
			element.bind('click', function(){
				console.log("removed item");
				// element.remove();
			});
			console.log("removed item");
		}
	};
});