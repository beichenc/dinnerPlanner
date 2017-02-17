//Side Bar View Object constructor
var SideBarView = function (container, model) {

	var _this = this;
	//model.addObserver(this);

	// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmDinnerButton = container.find("#confirmDinner");
	this.entry = container.find(".nameAndCostEntry");
	this.total = container.find(".nameAndCostTotal");
	this.container = container;

	// Get relevant data from the model
	this.fullMenu = model.getFullMenu();
	this.totalCost = model.getTotalMenuPrice();

	// Attach model listeners
	model.numberOfGuestsChanged.attach(function() {
		_this.redisplayNumberOfGuests();
		_this.redisplayTotalCost()
	});

	model.dishAdded.attach(function() {
    	_this.redisplayDishes();
		_this.redisplayTotalCost();

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

	// Methods
	this.redisplayNumberOfGuests = function() {
		_this.numberOfGuests.html(model.getNumberOfGuests());
	}

	this.redisplayDishes = function() {
		// Erase existing dishes
		_this.entry.html("");

		// Redisplay updated dishes
		for (key in this.fullMenu) {
			var dish = this.fullMenu[key];
			var price = model.getPrice(dish.id);
			_this.entry.append("<div class='col-lg-6'><p>" + dish.name + "</p></div><div id='cost'><p>" + price.toFixed(2) + "</p></div>");
		}

	}

	this.redisplayTotalCost = function() {
		_this.totalCost = model.getTotalMenuPrice();
		_this.totalNumber[0].innerHTML = "SEK " + _this.totalCost.toFixed(2);
	}

	/*this.update = function() {
		_this.numberOfGuests.html(model.getNumberOfGuests());
	}*/



}
