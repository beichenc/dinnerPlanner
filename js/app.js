$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var sideBarView = new SideBarView($("#sideBarView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var MD2View = new DishView($("#MD2View"), model, 101);
	var meatballsView = new DishView($("#meatballsView"), model, 100);

});
