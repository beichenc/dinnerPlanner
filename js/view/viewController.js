// Not sure if the view controller is supposed to have two views as its parameters, or if theres supposed to be two separate view controllers. (main view and sideBarView). Not sure either if its supposed to take two different main views as parameters.
var viewController = function(model, meatballsView, MD2View, sideBarView) {

  sideBarView.plusButtonClicked.attach(function() {
    model.increaseNumberOfGuests();
  });

  /*mainView.addButtonClicked.attach(function() {
    console.log(mainView.course.id);
    model.addDishToMenu(mainView.course.id);
  });*/

  // Can someone explain the sender part and why it can take two arguments when the attach function is defined so it takes one
  meatballsView.addButtonClicked.attach(function(sender, dishID) {
    console.log(dishID);
    model.addDishToMenu(dishID);
  });

  // Am I supposed to "repeat code" here...
  MD2View.addButtonClicked.attach(function(sender, dishID) {
    console.log(dishID);
    model.addDishToMenu(dishID);
  });

};
