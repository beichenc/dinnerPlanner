var SideBarViewController = function(model, sideBarView) {

  sideBarView.plusButton.click(function() {
    model.increaseNumberOfGuests();
  });

  sideBarView.minusButton.click(function() {
    model.decreaseNumberOfGuests();
  })

}
