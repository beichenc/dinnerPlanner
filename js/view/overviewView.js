var OverviewView = function (container, model) {

	var _this = this;
	this.container = container;

	//Show pics and description

	this.dishesPics = container.find(".dishesPics");
	this.dishesDesc = container.find(".dishesDesc");
	this.backButtonOverview = container.find("#backButtonOverview");
	this.printFullRecipeButton = container.find("#printFullRecipeButton");
	this.totalCostDiv = container.find("#totalCostInOverviewDiv");
	this.loadingMsg = container.find(".loadingMsg");


	this.buildPage = function() {

		//Erase existing page
		this.dishesPics.html("");
		this.dishesDesc.html("");
		this.totalCostDiv.html("");

		// Get data from model
		var menu = model.getFullMenu();


		// Update new page
		/*for (key in menu) {
			var dish = menu[key];

			model.getPrice(dish.id, function(totalPrice) {
				_this.totalPrice = totalPrice;
				_this.dishesPics.append( "<div class='inline' style='word-wrap: break-word; width: 150px'> <img width='150px' height='150px' src= '" + dish.image + "'>" + "<p class='belowPic'>" + dish.description + "</p> <p class='belowPic'> SEK " + (totalPrice * model.getNumberOfGuests()).toFixed(2) + "</p> </div>");
			})
		}*/

		// Display loading message
		this.loadingMsg.html("<h1>Loading, please wait</h1>");

		menu.forEach(function(dish, key) {
			model.getPrice(dish.id, function(totalPrice) {
				// Finished loading
				_this.loadingMsg.html("");

				_this.dishesPics.append( "<div class='inline' style='word-wrap: break-word; width: 150px'> <img width='150px' height='150px' src= '" + dish.image + "'>" + "<p class='belowPic'>" + dish.title + "</p> <p class='belowPic'> SEK " + (totalPrice * model.getNumberOfGuests()).toFixed(2) + "</p> </div>");
			})
		})

		//Show the number of Guests；
		container.find("#numberOfGuests").html(model.getNumberOfGuests());

		//Show total
		this.totalCostDiv.append("<p id='totalCostInOverview'>Total: SEK "+ model.getTotalMenuPrice().toFixed(2) + "</p>");
	}

}
