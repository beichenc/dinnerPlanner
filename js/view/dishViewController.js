var dishViewController = function(model, view) {

  this._view = view;

  console.log(typeof(this._view.addButtonClicked));

  this._view.addButtonClicked.attach(function() {
    model.addDishToMenu(view.course);
  });
}
