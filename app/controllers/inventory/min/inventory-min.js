App.controller("InventoryController",["$scope","$http","Inventory",function(n,t,o){n.getInventory=function(){o.success(function(t){n.data=t})},n.getInventory()}]).factory("Inventory",function(n){return n.get("app/models/inventory.json")});