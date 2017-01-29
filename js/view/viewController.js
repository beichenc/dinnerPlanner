var viewController = function(model, view) {
  view.plusButtonClicked.attach(function() {
    model.increaseNumberOfGuests();
  });
};
