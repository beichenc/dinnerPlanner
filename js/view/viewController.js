// Not sure if the view controller is supposed to have two views as its parameters, or if theres supposed to be two separate view controllers.
var viewController = function(model, selectDishView, dishView, sideBarView) {

  $(document).ready(function() {
    document.getElementById("dishView").style.display = "none";
  });

  sideBarView.plusButtonClicked.attach(function() {
    model.increaseNumberOfGuests();
  });

  /*mainView.addButtonClicked.attach(function() {
    console.log(mainView.dish.id);
    model.addDishToMenu(mainView.dish.id);
  });*/

  // Can someone explain the sender part and why it can take two arguments when the attach function is defined so it takes one
  dishView.addButtonClicked.attach(function(sender, dishID) {
    console.log(dishID);
    model.addDishToMenu(dishID);
  });

  // Am I supposed to "repeat code" here...
  /*MD2View.addButtonClicked.attach(function(sender, dishID) {
    console.log(dishID);
    model.addDishToMenu(dishID);
  });*/
  //this.updateDishView = new Event();

  // What does "sender" mean?
  selectDishView.dishClicked.attach(function(sender, dishID) {
    document.getElementById("selectDishView").style.display = "none";
    // Here it doesn't work to set dishView.dishID to dishID. The dishView still displays the meatballs view even though the dishID gives the bakedbrie.
    dishView.dishID = dishID;
    console.log(dishView.dishID);
    dishView.buildPage();
    document.getElementById("dishView").style.display = "block";
  });

  dishView.backButtonClicked.attach(function() {
    document.getElementById("dishView").style.display = "none";
    document.getElementById("selectDishView").style.display = "block";
  });

}
