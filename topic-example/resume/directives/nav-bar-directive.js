angular.module('myApp').
directive('navigationBar', function() {
    return {
        restrict: 'E',
        scope: {},
        transclude: true,
        templateUrl: './views/nav-bar.html',
        // controller: './controllers/topics-controller.js'
        controller: function($scope) {
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
        }
    };
});