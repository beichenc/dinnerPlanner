var DishViewController = function(model, dishView) {

  //this.backButtonClicked = new Event(this);
  var _this = this;
  this.dishView = dishView;

  // Can someone explain the sender part and why it can take two arguments when the attach function is defined so it takes one
  dishView.addButtonClicked.attach(function(sender, dishID) {
    //console.log(dishID);
    model.addDishToMenu(dishID);
  });


  /*dishView.backButtonClicked.attach(function() {
    _this.backButtonClicked.notify();
  });*/
}
