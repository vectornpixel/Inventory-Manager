App.controller("OrdersController",["$scope","Orders",function(r,e){r.getOrders=function(){e.success(function(e){r.data=e})},r.getOrders()}]).factory("Orders",function(r){return r.get("app/models/orders.json")});