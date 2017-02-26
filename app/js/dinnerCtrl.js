// Dinner controller that we use whenever we have view that needs to
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  /*console.log($('.nameAndCostEntries') + "yeeeeeeeees");

  $('.nameAndCostEntry').on('click', function() {
    $(this).toggleClass('selected');
    console.log("selected");
  })*/
  $scope.markedSelectedDishes = [];

  $scope.markASelectedDish = function(dishId) {
    $('#'+dishId+'Entry').toggleClass('selected');
    if ($('#'+dishId+'Entry').hasClass('selected')) {
      $scope.markedSelectedDishes.push(dishId);
    } else {
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
    console.log($scope.markedSelectedDishes.length);
    for (var i = 0; i < $scope.markedSelectedDishes.length; i++) {
      var dishId = $scope.markedSelectedDishes[i];
      console.log(dishId);
      $scope.removeDishFromMenu(dishId);
    }
    $scope.markedSelectedDishes = [];
  }


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

  $scope.getFullMenu = function() {
    return Dinner.getFullMenu();
  }

  $scope.getPrice = function(dish) {
    return Dinner.getPrice(dish);
  }

  $scope.getTotalMenuPrice = function() {
    return Dinner.getTotalMenuPrice();
  }

  $scope.removeDishFromMenu = function(id) {
    Dinner.removeDishFromMenu(id);
  }

  /*$scope.addDishToMenu = function(dishId) {
    Dinner.addDishToMenu(dishId);
  }*/

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
