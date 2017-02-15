
// Problem: this view controller has to known about two views. Is that ok?
var SelectDishViewController = function(model, selectDishView, dishView) {

  // What does "sender" mean?
  selectDishView.dishClicked.attach(function(sender, dish) {
    document.getElementById("selectDishView").style.display = "none";
    var dishID = $("#"+dish.name.replace(/\s+/g, '')).attr('dishID');
    console.log(dishID);
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
    console.log(args[1]);
    var filter = args[1];
    selectDishView.buildPage(type, filter)
  });

}
