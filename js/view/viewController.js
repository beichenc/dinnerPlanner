var viewController = function(model, sideBarViewController, selectDishViewController, dishViewController) {

  $(document).ready(function() {
    document.getElementById("dishView").style.display = "none";
  });

  // Is it ok to "access" the dishView like this? Or should I send some message from the dishViewController instead? How would I do that without having to create ANOTHER new Event? In that case the dishViewController will be observing the dishView, and the viewController would be observing the dishViewController...
  dishViewController.dishView.backButtonClicked.attach(function() {
    document.getElementById("dishView").style.display = "none";
    document.getElementById("selectDishView").style.display = "block";
  })




}
