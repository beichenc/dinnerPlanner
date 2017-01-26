//Side Bar View Object constructor
var SideBarView = function (container, model) {

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.numberOfGuests.html(model.getNumberOfGuests());

	this.mainCourses = model.getAllDishes("main dish");

	//this.dishesPics = container.find(".ggg");
	/*for (course in this.mainCourses) {
		this.dishesPics.append("<img src='course.image'>");
		this.dishesPics.append("<p>Hello</p>");
	}*/
	//console.log(this.mainCourses[0].image);
	//this.dishesPics.html("<img src='images/"+this.mainCourses[0].image+"'>");
}
