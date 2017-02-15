var DishViewController = function(model, dishView) {

  dishView.addDishButton.click(function() {
    var dishID = dishView.dishID;
    model.addDishToMenu(dishID);
  });

}
