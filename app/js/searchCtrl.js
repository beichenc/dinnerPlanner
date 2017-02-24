// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.

  $scope.query = "";
  $scope.loading = false;

  $scope.setLoadingToTrue = function() {
    $scope.loading = true;
  }

  $scope.search = function(query, type) {
    console.log("searched " + query + " " + type);
    $scope.status = "Searching...";
    $scope.loading = true;
    Dinner.getAllDishes.get({query: query, type: type}, function(data) {
      $scope.dishes = data.results;
      console.log(data.results);
      $scope.status = "Showing " + data.results.length + " results";
      console.log("success");
      $scope.loading = false;
    }, function(data) {
      $scope.status = "There was an error";
      console.log("fail");
      $scope.loading = false;
    });
  }

});
