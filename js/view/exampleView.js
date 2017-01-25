//ExampleView Object constructor
var ExampleView = function (container, model) {

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.numberOfGuests.html(model.getNumberOfGuests());

	/*this.mainCourses = model.getAllDishes("main dish");

	this.dishesPics = container.find(".dishes");
	for (course in this.mainCourses) {
		this.dishesPics.append("<img src='course.image'>");
		this.dishesPics.append("<p>Hello</p>");
	}*/

	this.toast = model.getDish(1);

	this.dishesPics = container.find(".dishes");
	this.dishesPics.append("<p>Hello</p>");
}
