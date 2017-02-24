// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {

  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

  $scope.dishId = $routeParams.dishId;
  $scope.loading = true;


  $scope.getDish = function() {
    console.log("searched for a single dish");
    $scope.status = "Loading...";
    Dinner.getDish.get({id: $scope.dishId}, function(data) {
      $scope.dish = data;
      $scope.ingredients = data.extendedIngredients;
      $scope.status = "";
      $scope.loading = false;
    }, function(data) {
      $scope.status = "There was an error";
      $scope.loading = false;
    })
  }

  $scope.addDishToMenu = function() {
    Dinner.addDishToMenu($scope.dishId);
  }

  $scope.getPrice = function() {
    return Dinner.getPrice($scope.dish);
  }


  // Call the getDish method.
  $scope.getDish();

});
