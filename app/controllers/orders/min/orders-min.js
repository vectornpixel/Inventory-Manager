App.controller("OrdersController",["$scope","$http",function(o,t){t.get("js/data/projects.json").success(function(t){o.projectsinfo=t})}]);