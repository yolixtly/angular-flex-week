describe('MyCtrl3', function(){
	beforeEach(module('myApp'));

	it('should create a property of title', inject(function($controller){
		var scope = {};
		var ctrl = $controller('MyCtrl3', {$scope: scope});

		expect(scope.title).toBe('$apply');
	}))

});




/*

// for controllers available in the Global Namespace:

describe('MyCtrl3', function(){
	it('should have a title property', function(){
		var scope = {};
		var ctrl = new MyCtrl3(scope);

		expect(scope.title).toBe('$apply');
	});
});
*/