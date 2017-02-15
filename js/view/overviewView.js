var OverviewView = function (container, model) {

	/*model.addDishToMenu(101);
	model.addDishToMenu(201);
	model.addDishToMenu(2);
	model.increaseNumberOfGuests();
	model.increaseNumberOfGuests();
	model.increaseNumberOfGuests();
	model.increaseNumberOfGuests();*/

	this.container = container;

	//Show pics and description
	//console.log(menu);

	this.dishesPics = container.find(".dishesPics");
	this.dishesDesc = container.find(".dishesDesc");
	this.backButtonOverview = container.find("#backButtonOverview");
	this.printFullRecipeButton = container.find("#printFullRecipeButton");
	this.totalCostDiv = container.find("#totalCostInOverviewDiv");


	this.buildPage = function() {

		//Erase existing page
		this.dishesPics.html("");
		this.dishesDesc.html("");
		this.totalCostDiv.html("");

		// Get data from model
		var menu = model.getFullMenu();

		// Update new page
		for (key in menu) {
			var dish = menu[key];
			this.dishesPics.append( "<div class='inline' style='word-wrap: break-word; width: 150px'> <img src= 'images/" + dish.image + "'> </div>");
			this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'> <p>" + dish.description + "</p> <p> SEK " + (model.getPrice(dish.id) * model.getNumberOfGuests()).toFixed(2) + "</p> </div>");
		}

		//Show the number of Guests；
		container.find("#numberOfGuests").html(model.getNumberOfGuests());

		//Show total
		this.totalCostDiv.append("<p id='totalCostInOverview'>Total: SEK "+ model.getTotalMenuPrice() + "</p>");
	}

}
