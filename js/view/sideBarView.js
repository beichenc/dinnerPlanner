//Side Bar View Object constructor
var SideBarView = function (container, model) {

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.entry = container.find(".nameAndCostEntry");

	// Get relevant data from the model
	this.fullMenu = model.getFullMenu();
	model.addDishToMenu(100);

	// Populate the view
	this.numberOfGuests.html(model.getNumberOfGuests());
	for (key in this.fullMenu) {
	  var course = this.fullMenu[key];
		var price = model.getPrice(course.id);
		this.entry.append("<div class='col-lg-6'><p>" + course.name + "</p></div><div id='cost'><p>" + price + "</p></div>");
	}
}
