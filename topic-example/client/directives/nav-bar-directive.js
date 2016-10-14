angular.module('myApp').
directive('navigationBar', function() {
    return {
        restrict: 'E',
        scope: {},
        transclude: true,
        templateUrl: './views/nav-bar.html',
        controller: 'Topics' //only pass the name
    };
});