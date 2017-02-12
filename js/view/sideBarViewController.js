var SideBarViewController = function(model, sideBarView) {

  sideBarView.plusButtonClicked.attach(function() {
    model.increaseNumberOfGuests();
  });

  sideBarView.minusButtonClicked.attach(function() {
    model.decreaseNumberOfGuests();
  })

}
