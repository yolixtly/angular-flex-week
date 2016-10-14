app.controller('Topics', ['$scope', 'topicsFactory', function($scope, topicsFactory) {
    $scope.appTitle = 'FlexWeek';
    topicsFactory.then(function(api){
        $scope.topics = api.data;
    });
}]);    