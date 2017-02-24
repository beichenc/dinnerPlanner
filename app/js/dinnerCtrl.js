// Dinner controller that we use whenever we have view that needs to
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  

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

  /*$scope.addDishToMenu = function(dishId) {
    Dinner.addDishToMenu(dishId);
  }*/

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
