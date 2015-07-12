App.controller("OrdersController",["$scope", "$http", function($scope, $http){

    $http.get('js/data/projects.json').success(function(data) {
        $scope.projectsinfo = data;
    });

}]);