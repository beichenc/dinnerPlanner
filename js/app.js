$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	//Are we supposed to have different views for the different recipes?
	var sideBarView = new SideBarView($("#sideBarView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var MD2View = new DishView($("#MD2View"), model, 101, sideBarView);
	var meatballsView = new DishView($("#meatballsView"), model, 100, sideBarView);

	var meatballsController = new viewController(model, meatballsView, MD2View, sideBarView);
	//var dishViewController = new viewController(model, meatballsView);
	// When I added the following controller, every time i pressed the increase number of guests button it increased by 2.
	//var MD2Controller = new viewController(model, MD2View, sideBarView);

});
