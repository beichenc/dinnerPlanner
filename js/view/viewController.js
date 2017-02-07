// Not sure if the view controller is supposed to have two views as its parameters, or if theres supposed to be two separate view controllers.
var viewController = function(model, selectDishView, dishView, sideBarView) {

  $(document).ready(function() {
    document.getElementById("dishView").style.display = "none";
  });

  sideBarView.plusButtonClicked.attach(function() {
    model.increaseNumberOfGuests();
  });

  // What does "sender" mean?
  selectDishView.dishClicked.attach(function(sender, dishID) {
    document.getElementById("selectDishView").style.display = "none";
    // Here it doesn't work to set dishView.dishID to dishID. The dishView still displays the meatballs view even though the dishID gives the bakedbrie.
    dishView.dishID = dishID;
    console.log(dishView.dishID);
    dishView.buildPage();
    document.getElementById("dishView").style.display = "block";
  });

  selectDishView.appetizerClicked.attach(function(sender, type) {
    selectDishView.buildPage(type);
  });

  selectDishView.maindishClicked.attach(function(sender, type) {
    selectDishView.buildPage(type);
  });

  selectDishView.dessertClicked.attach(function(sender, type) {
    selectDishView.buildPage(type);
  });

  selectDishView.searchChanged.attach(function(sender, args) {
    console.log(args[0]);
    var type = args[0];
    // Why is filter undefined here?
    console.log(args[1]);
    var filter = args[1];
    selectDishView.buildPage(type, filter)
  });

  // Can someone explain the sender part and why it can take two arguments when the attach function is defined so it takes one
  dishView.addButtonClicked.attach(function(sender, dishID) {
    console.log(dishID);
    model.addDishToMenu(dishID);
  });

  dishView.backButtonClicked.attach(function() {
    document.getElementById("dishView").style.display = "none";
    document.getElementById("selectDishView").style.display = "block";
  });



}
