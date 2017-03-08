dinnerPlannerApp.controller('OverviewCtrl', function ($scope,Dinner) {

  $scope.loading = true;

  $scope.menu = Dinner.getFullMenu();

});
