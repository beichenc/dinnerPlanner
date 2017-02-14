$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var sideBarView = new SideBarView($("#sideBarView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var dishView = new DishView($("#dishView"), model, sideBarView);
	var overviewView = new OverviewView($("#overviewView"), model);
	var preparationView = new PreparationView($("#preparationView"), model);

	//var controller = new viewController(model, selectDishView, dishView, sideBarView);


});
