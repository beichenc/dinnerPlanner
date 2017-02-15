$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var indexView = new IndexView($("#indexView"), model);
	var sideBarView = new SideBarView($("#sideBarView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
  var dishView = new DishView($("#dishView"), model);
	var overviewView = new OverviewView($("#overviewView"), model);
	var preparationView = new PreparationView($("#preparationView"), model);

	var sideBarViewController = new SideBarViewController(model, sideBarView);
	var selectDishViewController = new SelectDishViewController(model, selectDishView);
	var dishViewController = new DishViewController(model, dishView);
	var controller = new viewController(model, indexView, sideBarView, selectDishView, dishView, overviewView, preparationView);



});
