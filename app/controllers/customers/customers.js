App.controller("CustomersController",["$scope","Users", function($scope, Users){

    $scope.getUsers = function(){
        Users.success(function(data){
            $scope.data = data;

        });
    };
    $scope.getUsers();

}]).factory("Users", function($http){

    return $http.get('app/models/users.json');

});