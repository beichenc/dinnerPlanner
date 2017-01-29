//DinnerModel Object constructor
var DinnerModel = function() {

	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

  // Initially number of guests will be 0
  var numberOfGuests = 0;
  // Initially menu will be an empty dictionary where the key is the type and value is the dish object.
  var menu = {
      /*"starter": null,
      "main dish": null,
      "dessert": null,
      "drink": null*/
  };

  // Events
  this.numberOfGuestsChanged = new Event(this);
  this.courseAdded = new Event(this);

  // Methods
	this.setNumberOfGuests = function(num) {
    numberOfGuests = num;
	}

	// should return
  // TESTED
	this.getNumberOfGuests = function() {
    return numberOfGuests;
	}

  this.increaseNumberOfGuests = function() {
    numberOfGuests += 1;
    console.log(numberOfGuests);
    this.numberOfGuestsChanged.notify();
  }

  this.decreaseNumberOfGuests = function() {
    if (numberOfGuests > 0) {
      numberOfGuests -= 1;
      console.log(numberOfGuests);
    }
  }

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
    return menu[type];
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
    return menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
    var allIngredients = {};
    var i = 0;

    for (var type in menu) {
      var dish = menu[type];
      allIngredients[i] = dish.ingredients;
      i++;
    };
    return allIngredients;
	}


  // Returns all ingredients for a single dish by ID
  this.getIngredients = function(id) {
    var dish = this.getDish(id);
    var ingredients = dish.ingredients;
    return ingredients;
  }

  //Returns the price of the selected dish (all ingredients)
  // TESTED
  this.getPrice = function(id) {
    var totalPrice = 0.00;
    var dish = this.getDish(id);
    var ingredients = dish.ingredients;
    for (key in ingredients) {
      var ingredient = ingredients[key];
      var price = ingredient.price;
      totalPrice += price;
    }
    return totalPrice;
  }

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
    var TotalMenuPrice = 0.00;

    for (type in menu) {
      var dish = menu[type];
      var ingredients = dish.ingredients;
      for (key in ingredients) {
        var ingredient = ingredients[key];
        var price = ingredient.price;
        TotalMenuPrice += price;
      }
    }

    TotalMenuPrice *= numberOfGuests;
    return TotalMenuPrice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
    var type = this.getDish(id).type;

    //Edit: don't need to check because if it is on the menu it is automatically overwritten.
    //Check if dish of the type is already on the menu, if it is, remove the old dish.
    /*if (!menu[type].isEmpty()) {
      menu[type] === "";
    }*/
    // Add the dish
    menu[type] = this.getDish(id);
    console.log(menu);
    this.courseAdded.notify(id);
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
    var type = getDish(id).type;
    menu[type] === "";
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
  // TESTED
	this.getAllDishes = function (type,filter) {
	  return dishes.filter(function(dish) {
		var found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });
	}

	//function that returns a dish of specific ID
  //TESTED
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}


	// the dishes variable contains an array of all the
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
    'link':'toast.html',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
    'link':'sourdough.html',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
    'link':'bakedbrie.html',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
    'link':'meatballs.html',
		'description':"Yummy meatballs Swedish style. Perfect for combining with spaghetti or potatoes.",
    'instructions': 'Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.',
    'ingredients':[{
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
    'link':'MD2.html',
    'description': 'Main dish 2 - here is the description',
		'instructions':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
    'link':'meatballs.html',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
    'link':'meatballs.html',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
    'link':'icecream.html',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
    'link':'icecream.html',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];
}
