angular.module('myapp', [])
  .controller('MainController', ['$scope', function($scope){
      $scope.users = [
          {"name": "tanaka", "score":43.65},
          {"name": "sato", "score":84.32},
          {"name": "kobayashi", "score":67.89},
          {"name": "tanaka2", "score":43.65},
          {"name": "sato2", "score":84.32},
          {"name": "kobayashi2", "score":67.89},
          {"name": "tanaka3", "score":43.65},
          {"name": "sato3", "score":84.32},
          {"name": "kobayashi3", "score":67.89},
      ];
  }]);