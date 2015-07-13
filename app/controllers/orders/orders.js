App.controller("OrdersController",["$scope", "Orders", function($scope, Orders){

    $scope.getOrders = function(){
        Orders.success(function(data){
            $scope.data = data;

        });
    };
    $scope.getOrders();

}]).factory("Orders", function($http){

    return $http.get('app/models/orders.json');

});