//Side Bar View Object constructor
var SideBarView = function (container, model) {

	var _this = this;

	// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.entry = container.find(".nameAndCostEntry");
	this.total = container.find(".nameAndCostTotal");

	// Get relevant data from the model and set some data (are we supposed to set data here?)
	this.fullMenu = model.getFullMenu();
	//model.addDishToMenu(100);
	//model.addDishToMenu(3);
	//model.setNumberOfGuests(4);
	this.totalCost = model.getTotalMenuPrice();

	// Events
	this.plusButtonClicked = new Event(this);
	this.minusButtonClicked = new Event(this);
	//console.log(typeof(this.plusButtonClicked));

	// Attach model listeners
	model.numberOfGuestsChanged.attach(function() {
		_this.redisplayNumberOfGuests();
	});

	model.dishAdded.attach(function(sender, id) {
    console.log(id);
    _this.displayDish(id);
	});

	// Attach listeners to HTML controls - question: is this supposed to be here or in the view controller

	this.plusButton.click(function() {
		//console.log(typeof(_this.plusButtonClicked));
		_this.plusButtonClicked.notify();
		_this.totalCost = model.getTotalMenuPrice();
	  _this.totalNumber[0].innerHTML = "SEK " + _this.totalCost.toFixed(2);
	});

	this.minusButton.click(function() {
		model.decreaseNumberOfGuests();
		// Now how do I update the view to display this new number?
		// Edit: now I got both the version with all the event handlers and .notify and .attach (the plus button), AND the simple version (the minus button) with this method to work. Why can't I just use the simple version here?
		_this.numberOfGuests.html(model.getNumberOfGuests());
		_this.totalCost = model.getTotalMenuPrice();
	  _this.totalNumber[0].innerHTML = "SEK " + _this.totalCost.toFixed(2);
	});

	// Populate the view

	// Number of guests
	this.numberOfGuests.html(model.getNumberOfGuests());

	// Price of each dish
	for (key in this.fullMenu) {
	  var dish = this.fullMenu[key];
		var price = model.getPrice(dish.id);
		this.entry.append("<div class='col-lg-6'><p>" + dish.name + "</p></div><div id='cost'><p>" + price.toFixed(2) + "</p></div>");
	}

	// Total price for menu
	this.total.append("<div id='totalCost'><p>SEK " + this.totalCost.toFixed(2) + "</p></div>");
  this.totalNumber = container.find("#totalCost");
	console.log(this.totalNumber[0]);

	// Methods
	this.redisplayNumberOfGuests = function() {
		_this.numberOfGuests.html(model.getNumberOfGuests());
	}

	this.displayDish = function(dishID) {
		var dish = model.getDish(dishID);
		var price = model.getPrice(dishID);
		_this.entry.append("<div class='col-lg-6'><p>" + dish.name + "</p></div><div id='cost'><p>" + price.toFixed(2) + "</p></div>");
	}

}
