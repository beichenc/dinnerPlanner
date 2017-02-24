// Here we create an Angular service that we will use for our
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes)
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

  var _this = this;
  // Initially number of guests will be 0
  var numberOfGuests = 0;
  // Initially menu will be an empty dictionary where the key is the type and value is the dish object.
  var menu = [];

  var api_results;
  var ingredientsResults;
  var dishResult;

  // Don't know if we're supposed to do the following, it's a test:
  var type;
  //var query;

  // Methods

  this.setNumberOfGuests = function(num) {
    numberOfGuests = num;
  }

  this.getNumberOfGuests = function() {
    return numberOfGuests;
  }

  this.increaseNumberOfGuests = function() {
    numberOfGuests += 1;
    console.log(numberOfGuests);
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
  this.getIngredients = function(id, callBack) {
    $.ajax( {
       url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ id + '/information',
       headers: {
         'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
       },
       data: {
         'id' : id
       },
       success: function(data) {
         console.log(id);
         console.log(data.extendedIngredients);
         ingredientsResults = data.extendedIngredients;
         callBack(ingredientsResults);
         //this.apiResultsObtained.notify(api_results);
       },
       error: function(data) {
         console.log(data)
       }
     })


    /*var dish = this.getDish(id);
    var ingredients = dish.ingredients;
    return ingredients;*/
  }

  //Returns the price of the selected dish (all ingredients)
  // TESTED
  /*this.getPrice = function(id, callBack) {
    var totalPrice = 0.00;
    var dish;

    this.getDish(id, function(dishResults) {
      dish = dishResults;
      var ingredients = dish.extendedIngredients;
      for (key in ingredients) {
        var ingredient = ingredients[key];
        var price = ingredient.amount; //simplification here, we say price is equal to amount.
        totalPrice += price;
      }
      callBack(totalPrice);
    })

  }*/

  //Returns the price of the selected dish (all ingredients)
  /*this.getPrice = function(id) {*/
    this.getPrice = function(dish) {
    // why does this hello get logged 4 times? Think this is the problem why previous solution didn't work.
    console.log("hello");
    console.log(dish);
    var totalPrice = 0.00;

    var ingredients = dish.extendedIngredients;
    for (key in ingredients) {
      var ingredient = ingredients[key];
      var price = ingredient.amount; //simplification here, we say price is equal to amount.
      totalPrice += price;
    }

    /*var dish = this.getDish.get({id: id});
    var ingredients = dish.extendedIngredients;
    for (key in ingredients) {
      var ingredient = ingredients[key];
      var price = ingredient.amount; //simplification here, we say price is equal to amount.
      totalPrice += price;
    }
    console.log(totalPrice);*/
    return totalPrice;
  }

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
    var TotalMenuPrice = 0.00;

    for (index in menu) {
      var dish = menu[index];
      var ingredients = dish.extendedIngredients;
      for (key in ingredients) {
        var ingredient = ingredients[key];
        var price = ingredient.amount;
        TotalMenuPrice += price;
      }
    }

    TotalMenuPrice *= numberOfGuests;
    return TotalMenuPrice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
  // EDIT: Removing this type-check function because the dishes on Spoonacular have many types.
	this.addDishToMenu = function(id) {
    console.log(id);

    var dish = this.getDish.get({id: id});
    var dishAlreadyInMenu = false;

    for (key in menu) {
      var dishInMenu = menu[key];
      console.log(dish.id);
      console.log(dishInMenu.id);
      if (dishInMenu.id === dish.id) {
        // Do nothing, dish already in menu;
        dishAlreadyInMenu = true;
      }
    }

    if (menu.length === 0 || dishAlreadyInMenu === false) {
        // Add to menu
        menu[menu.length] = dish;
        console.log("added to menu");
        console.log(menu);
    }

    // Below is the code before change to Angular

    /*this.getDish(id, function(dishResults) {
      var dish = dishResults;
      var dishAlreadyInMenu = false;

      for (key in menu) {
        var dishInMenu = menu[key];
        console.log(dish.id);
        console.log(dishInMenu.id);
        if (dishInMenu.id === dish.id) {
          // Do nothing, dish already in menu;
          dishAlreadyInMenu = true;
        }
      }

      if (menu.length === 0 || dishAlreadyInMenu === false) {
          // Add to menu
          menu[menu.length] = dish;
          _this.dishAdded.notify();
      }
    })*/
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
	/*this.getAllDishes = function (type, filter, callBack, errorCallBack) {
		$.ajax( {
		   url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',
		   headers: {
		     'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
		   },
		   data: {
		   	 'type' : type,
         'query' : filter,
		   },
		   success: function(data) {
		     api_results = data.results;
         callBack(api_results);
		   },
		   error: function(data) {
		     console.log(data)
         errorCallBack();
		   }
		 })
	}*/

  // Method substituting getAllDishes()
  this.getAllDishes = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search', {}, {
    get: {
      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
      }
    }
  });

	//function that returns a dish of specific ID
  //TESTED
	/*this.getDish = function (id, callBack) {
    $.ajax( {
       url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ id + '/information',
       headers: {
         'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
       },
       data: {
         'id' : id
       },
       success: function(data) {
         //console.log(id);
         console.log(data);
         dishResults = data;
         callBack(dishResults);
       },
       error: function(data) {
         console.log(data)
       }
     })
	}*/

  // Method substituting getDish()
  this.getDish = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/:id/information', {}, {
    get: {
      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
      }
    }
  });



  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
