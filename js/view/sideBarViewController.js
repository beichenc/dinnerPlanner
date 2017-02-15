var SideBarViewController = function(model, sideBarView) {

  sideBarView.plusButton.click(function() {
    model.increaseNumberOfGuests();
    sideBarView.redisplayTotalCost();
  });

  sideBarView.minusButton.click(function() {
    model.decreaseNumberOfGuests();
    sideBarView.redisplayTotalCost();
  })

}
