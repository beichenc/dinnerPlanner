var viewController = function(model, indexView, sideBarView, selectDishView, dishView, overviewView, preparationView) {

  $(document).ready(function() {
    selectDishView.container[0].style.display = "none";
    sideBarView.container[0].style.display = "none";
    dishView.container[0].style.display = "none";
    overviewView.container[0].style.display = "none";
    preparationView.container[0].style.display = "none";

    $(".dishes").on("mouseenter", "img", function(){
      $(this).animate({"opacity": 0.7}, 500);
    });

    $(".dishes").on("mouseleave", "img", function(){
      $(this).animate({"opacity": 1}, 500);
    });
  });

  indexView.createDinnerButton.click(function() {
    indexView.container[0].style.display = "none";
    selectDishView.container[0].style.display = "block";
    sideBarView.container[0].style.display = "block";
  })

  selectDishView.dishesPics.on("click", "img", function() {
    selectDishView.container[0].style.display = "none";
    var dishID = $(this).attr('dishID');
    dishView.dishID = dishID;
    dishView.buildPage();
    dishView.container[0].style.display = "block";
  });

  dishView.backButton.click(function() {
    dishView.container[0].style.display = "none";
    selectDishView.container[0].style.display = "block";
  })

  sideBarView.confirmDinnerButton.click(function() {
    dishView.container[0].style.display = "none";
    selectDishView.container[0].style.display = "none";
    sideBarView.container[0].style.display = "none";
    overviewView.buildPage();
    overviewView.container[0].style.display = "block";
  })

  overviewView.backButtonOverview.click(function() {
    selectDishView.container[0].style.display = "block";
    sideBarView.container[0].style.display = "block";
    overviewView.container[0].style.display = "none";
  })

  overviewView.printFullRecipeButton.click(function() {
    overviewView.container[0].style.display = "none";
    preparationView.buildPage();
    preparationView.container[0].style.display = "block";
  })

  preparationView.backButtonPrep.click(function() {
    preparationView.container[0].style.display = "none";
    overviewView.container[0].style.display = "block";
  })



}
