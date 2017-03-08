// Dinner controller that we use whenever we have view that needs to
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.markedSelectedDishes = [];

  $scope.markASelectedDish = function(dishId, event) {
    event.preventDefault();
    console.log(event.target.parentNode.parentNode.className);
    var classN = event.target.parentNode.parentNode.className;
    if (classN === "nameAndCostEntry clearfix ng-scope") {
      event.target.parentNode.parentNode.className = "nameAndCostEntry clearfix ng-scope selected";
    }

    if (classN === "nameAndCostEntry clearfix ng-scope selected") {
      event.target.parentNode.parentNode.className = "nameAndCostEntry clearfix ng-scope"
    }

    //console.log(event.target.className);
    if (event.target.parentNode.parentNode.className == "nameAndCostEntry clearfix ng-scope selected") {
      console.log("added to marked dishes");
      // Add dish to markedSelectedDishes list.
      $scope.markedSelectedDishes.push(dishId);
    } else {
      // Remove dish from markedSelectedDishes list.
      for (var i = 0; i < $scope.markedSelectedDishes.length; i++) {
        var markedDishId = $scope.markedSelectedDishes[i];
        if (dishId === markedDishId) {
          $scope.markedSelectedDishes.splice(i,1);
        }
      }
    }
    console.log("marked dishes: " + $scope.markedSelectedDishes);
  }

  $scope.removeMarkedFromMenu = function() {
    for (var i = 0; i < $scope.markedSelectedDishes.length; i++) {
      var dishId = $scope.markedSelectedDishes[i];
      $scope.removeDishFromMenu(dishId);
    }
    $scope.markedSelectedDishes = [];
  }

  $scope.loadingFromCookies = function() {
    return Dinner.getLoadingStatus();
  }

  $scope.menu = [];

  $scope.getFullMenu = function() {
    $scope.menu = Dinner.getFullMenu();
    console.log($scope.menu);

  }

  $scope.getFullMenu();


  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuests = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.increaseNumberOfGuests = function() {
    Dinner.increaseNumberOfGuests();
  }

  $scope.decreaseNumberOfGuests = function() {
    Dinner.decreaseNumberOfGuests();
  }

  /*$scope.fullMenu = function() {
    return Dinner.getFullMenu();
  }*/


  /*$scope.getFullMenu = function() {
    $scope.fullMenu = Dinner.getFullMenu();
    console.log($scope.fullMenu);
  }*/

  $scope.getPrice = function(dish) {
    return Dinner.getPrice(dish);
  }

  $scope.getTotalMenuPrice = function() {
    return Dinner.getTotalMenuPrice();
  }

  $scope.removeDishFromMenu = function(id) {
    Dinner.removeDishFromMenu(id);
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
