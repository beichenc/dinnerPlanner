// Here we create an Angular service that we will use for our
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {

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
  var menuIds = [];

  var loading = true;

  // Don't know if we're supposed to do the following, it's a test:
  var type;

  // Methods
  this.init = function() {
    if ($cookieStore.get('numberOfGuests') !== undefined) {
      numberOfGuests = $cookieStore.get('numberOfGuests');
      console.log(numberOfGuests);
    }
    if ($cookieStore.get('menuIds') !== undefined) {
      menuIds = $cookieStore.get('menuIds');
      console.log(menuIds);
      _this.loadFullMenu();
    } else {
      loading = false;
    }
  }

  this.getLoadingStatus = function() {
    console.log(loading);
    return loading;
  }

  this.getCookies = function() {
    return $cookieStore.get('menuIds');
  }

  this.setNumberOfGuests = function(num) {
    numberOfGuests = num;
  }

  this.getNumberOfGuests = function() {
    return numberOfGuests;
  }

  this.increaseNumberOfGuests = function() {
    numberOfGuests += 1;
    $cookieStore.put('numberOfGuests', numberOfGuests);
  }

  this.decreaseNumberOfGuests = function() {
    if (numberOfGuests > 0) {
      numberOfGuests -= 1;
      $cookieStore.put('numberOfGuests', numberOfGuests);
    }
  }

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
    return menu[type];
	}

  this.getFullMenu = function() {
    return menu;
  }

	//Returns all the dishes on the menu.
	this.loadFullMenu = function() {
    for (var key in menuIds) {
      var dishId = menuIds[key];
      console.log(key);

      _this.getDish.get({id: dishId}, function(index) {
        return function(data) {
          console.log(index);
        // Check if dish already in menu
          var dishAlreadyInMenu = false;
          for (i in menu) {
            var dishInMenu = menu[i];
            if (dishInMenu.id === data.id) {
              dishAlreadyInMenu = true;
            }
          }
          // Add to menu if not already in menu
          if (menu === 0 || dishAlreadyInMenu === false) {
            console.log("ADD FROM COOKIE TO MENU");
            console.log(index);
            menu[index] = data;
          }

          console.log(menuIds.length - 1);
          // If last dish has been loaded, then loading is finished
          if (parseInt(index) === (menuIds.length - 1)) {
            loading = false;
            console.log(loading);
          }
        }
      }(key), function(data) {
        // Error function
      });
    }
    if (menu !== []) {
      //console.log("returned menu");
      return menu;
    }
	}

  // Returns all the dishIds on the menu.
  this.getFullMenuIds = function() {
    return menuIds;
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

  //Returns the price of the selected dish (all ingredients)
  /*this.getPrice = function(id) {*/
  this.getPrice = function(dish) {
    // why does this hello get logged 4 times? Think this is the problem why previous solution didn't work.
    //console.log("hello");
    //console.log(dish);
    var totalPrice = 0.00;

    if (dish !== undefined) {
      var ingredients = dish.extendedIngredients;
      for (key in ingredients) {
        var ingredient = ingredients[key];
        var price = ingredient.amount; //simplification here, we say price is equal to amount.
        totalPrice += price;
      }
    }

    //console.log(totalPrice);
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

    this.getDish.get({id: id}, function(data) {
      var dish = data;

      var dishAlreadyInMenu = false;

      // Add to the menu array
      for (key in menu) {
        var dishInMenu = menu[key];
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

      // Add to menuIds array.
      var dishIdAlreadyInMenuIds = false;

      for (key in menuIds) {
        var dishInMenuId = menuIds[key];
        if (dishInMenuId === dish.id) {
          dishIdAlreadyInMenuIds = true;
        }
      }

      if (menuIds === 0 || dishIdAlreadyInMenuIds === false) {
          menuIds.push(dish.id);
          console.log(menuIds);
          $cookieStore.put('menuIds', menuIds);
      }

      //_this.getFullMenu();
    }, function(data) {
      // Error
    });

	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
    console.log("removed");
    for (var i = 0; i < menu.length; i++) {
      var dish = menu[i];
      if (dish.id === id) {
        menu.splice(i,1);
        // Update cookies
        menuIds.splice(i,1);
        $cookieStore.put('menuIds', menuIds);
      }
    }
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
  this.getAllDishes = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search', {}, {
    get: {
      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
      }
    }
  });

	//function that returns a dish of specific ID
  this.getDish = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/:id/information', {}, {
    get: {
      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
      }
    }
  });


  this.init();
  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
