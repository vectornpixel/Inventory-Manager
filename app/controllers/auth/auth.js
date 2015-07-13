App.controller("AuthController",["$scope", "$http", "$location", function($scope, $http, $location){


    $scope.userInfo = {
        email: "test@vnp.com",
        password: "demo"
    };

   $scope.SignIn =  function(){

       var username = $scope.userInfo.email;
       var password = $scope.userInfo.password;
        $http.post({
            username: username,
            password: password
        }).then(function(){
            console.log("login successful");
            $location.path("/inventory");
        }, function(error){
            console.log("login failed");
        })
    }

}]);