describe('topicsFactory', function(){
	beforeEach(module('myApp'));

	it('should return the topics and routes for the application', 
		inject(function(topicsFactory, $rootScope, $httpBackend){
			// console.log(topicsFactory, $rootScope, $httpBackend);
			$httpBackend.expect('GET', './assets/topics.json').respond(200, ''); 
			var status = false;
			topicsFactory.then(function(){
				status = true;
			});
			
			$rootScope.$digest();
			//this ensures that the Http request code is triggered
			$httpBackend.flush();
			console.log(status);
			expect(status).toBe(true);
			// expect(data.length).toEqual(4);

			// expect.status.toEqual(true);
			// $httpBackend.verifyNoOutstandingRequest();



		}));
});