$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	//Are we supposed to have different views for the different recipes?
	var sideBarView = new SideBarView($("#sideBarView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	//var MD2View = new DishView($("#MD2View"), model, 101, sideBarView);
	var dishView = new DishView($("#dishView"), model, sideBarView);

	//var controller = new viewController(model, selectDishView, dishView, sideBarView);
	var overviewView = new OverviewView($("#overviewView"), model);
	//var dishViewController = new viewController(model, meatballsView);
	//var MD2Controller = new viewController(model, MD2View, sideBarView);
	var preparationView = new PreparationView($("#preparationView"), model);

});
