// Not sure if the view controller is supposed to have two views as its parameters, or if theres supposed to be two separate view controllers. (main view and sideBarView). Not sure either if its supposed to take two different main views as parameters.
var viewController = function(model, selectDishView, dishView, sideBarView) {

  $(document).ready(function() {
    document.getElementById("dishView").style.display = "none";
  });

  sideBarView.plusButtonClicked.attach(function() {
    model.increaseNumberOfGuests();
  });

  /*mainView.addButtonClicked.attach(function() {
    console.log(mainView.course.id);
    model.addDishToMenu(mainView.course.id);
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


  selectDishView.dishClicked.attach(function(dishID) {
    document.getElementById("selectDishView").style.display = "none";
    // Here I want to set dishView.dishID to dishID but dishID is not a number, it is SelectDishView!!! Why?!
    // In selectDishView.js, I pass course.id to this method and course.id is a number, but when it comes to
    // this method it becomes SelectDishView... I have spent hours trying to solve this but it will not work.
    dishView.dishID = 101;
    console.log(dishID);
    document.getElementById("dishView").style.display = "block";
    //document.getElementById(view.container[0].id).innerHTML = dishView.container[0];

  });

  /*selectDishView.dishClicked.attach(function(selectedView, dishID) {
    //console.log(view.container[0].id);
    document.getElementById(selectedView.container[0].id).style.display = "none";
    //console.log(dishView.container[0]);
    //dishView.dishID = dishID;
    //console.log(dishID);
    document.getElementById("dishView").style.display = "block";
    //document.getElementById(view.container[0].id).innerHTML = dishView.container[0];

  });*/

  dishView.backButtonClicked.attach(function() {
    document.getElementById("dishView").style.display = "none";
    document.getElementById("selectDishView").style.display = "block";
  });

}
