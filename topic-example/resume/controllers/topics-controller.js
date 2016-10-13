angular.module('myApp').
controller('Topics', ['$scope', function($scope) {
    $scope.appTitle = 'FlexWeek';
    $scope.topics = [{
        route: 'setTimeoutVanilla',
        title: 'VanillaJS'
    }, {
        route: 'setTimeoutDigest',
        title: '$digest'
    }, {
        route: 'setTimeoutApply',
        title: '$apply'
    }, {
        route: 'setTimeoutService',
        title: '$setTimeout'
    }, ];
}]);