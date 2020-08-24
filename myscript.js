angular.module('myapp', [])
  .controller('MainController', ['$scope', function($scope){
      $scope.users = [
          {"name": "tanaka", "score":43.65},
          {"name": "sato", "score":84.32},
          {"name": "kobayashi", "score":67.89},
      ];
  }]);