App.controller("InventoryController",["$scope", "$http", "Inventory", function($scope, $http, Inventory){

    $scope.getInventory = function(){
        Inventory.success(function(data){
            $scope.data = data;

        });
    };
    $scope.getInventory();

    /*$http.get('models/inventory.json').success(function(data) {
        $scope.projectsinfo = data;
    });*/


}]).factory("Inventory", function($http){

    return $http.get('app/models/inventory.json');

});