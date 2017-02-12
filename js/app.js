$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var sideBarView = new SideBarView($("#sideBarView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var dishView = new DishView($("#dishView"), model);

	var sideBarViewController = new SideBarViewController(model, sideBarView);
	var selectDishViewController = new SelectDishViewController(model, selectDishView, dishView);
	var dishViewController = new DishViewController(model, dishView);
	var controller = new viewController(model, sideBarViewController, selectDishViewController, dishViewController);


});
