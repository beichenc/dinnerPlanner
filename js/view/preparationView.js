var PreparationView = function (container, model) {

/*model.addDishToMenu(100);
model.addDishToMenu(201);
model.addDishToMenu(2);*/
this.container = container;
this.backButtonPrep = container.find("#backButtonPrep");
this.preparationList = container.find("#preparationList");

this.buildPage = function() {

	// Erase old page
	this.preparationList.html("");

	// Getting data from model
	var menu = model.getFullMenu();

	// Updating new page
	container.find("#numberOfGuests").html(model.getNumberOfGuests());

	for(key in menu){
		var dish = menu[key];
		this.preparationList.append("<div class='clearfix'><div class='col-lg-2'> <div class='inline' style='word-wrap: break-word; width: 150px'> <img src= '" + dish.image + "' width='150px' height='150px'> </div></div> <div class='col-lg-4'> <div class='inline marginleft20' style='word-wrap: break-word; width: 250px'> <p style='font-size: 28px' ><b>"+ dish.title +"</b></p></div></div> <div class='col-lg-6'> <div class='inline' style='word-wrap: break-word; width: 400px'> <p style='font-size: 20px'>Preparation</p> <p>" + dish.instructions +"</p></div></div></div>");


	}
}





}
