angular.module('myapp', [])
    .controller('MainController', ['$scope', function ($scope) {
        $scope.users = [
            { "name": "sato", "score": 52.22 },
            { "name": "tanaka", "score": 38.22 },
            { "name": "yamada", "score": 11.11 },
            { "name": "hayashi", "score": 5.25 },
            { "name": "higuchi", "score": 82.4 },
            { "name": "yasuda", "score": 55.21 },
            { "name": "minami", "score": 32.8 },
            { "name": "yanagi", "score": 72.2 }
        ];
    }])
    .controller('UserItemController', ['$scope', function ($scope) {
        $scope.increment = function () {
            $scope.user.score++;
        };
    }]);