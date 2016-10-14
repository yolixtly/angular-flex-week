describe('Topics', function(){
	beforeEach(module('myApp'));

	it('should create a property of title', inject(function($controller, $httpBackend, topicsFactory ){
		var scope = {};
		var ctrl = $controller('TopicsCtrl', {$scope: scope});
		expect(scope.appTitle).toBe('FlexWeek');
		// expect(scope.topics.length).toEqual(4);
	}));
});