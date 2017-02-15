var viewController = function(model, sideBarView, selectDishView, dishView) {

  $(document).ready(function() {
    dishView.container[0].style.display = "none";
  });

  selectDishView.dishesPics.on("click", "img", function() {
    document.getElementById("selectDishView").style.display = "none";
    var dishID = $(this).attr('dishID');
    dishView.dishID = dishID;
    dishView.buildPage();
    document.getElementById("dishView").style.display = "block";
  });

  dishView.backButton.click(function() {
    dishView.container[0].style.display = "none";
    selectDishView.container[0].style.display = "block";
  })




}
