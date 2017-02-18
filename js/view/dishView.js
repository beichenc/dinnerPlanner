// Is it correct to have sideBarView as a parameter so that I can change the number of guests displayed in sideBarView from this view?
var DishView = function(container, model) {

  var _this = this;
  this.dishID = 100; // default so there is no error message upon page load
  console.log(this.dishID);

  this.dishName = container.find("#dishName");
  this.dishPic = container.find(".dishPic");
  this.dishDesc = container.find(".dishDesc");
  this.ingredientList = container.find(".dishIngredients");
  this.instructions = container.find(".dishInstructions");
  this.ingredientsPrice = container.find(".ingredientsPrice");
  this.ingredientsPriceTotal = container.find(".ingredientsPriceTotal");
  this.addDishButton = container.find("#addDishButton");
  this.backButton = container.find("#backButton");
  this.container = container;

  // Build page every time the page needs to be updated.
  this.buildPage = function() {
    // Erasing the page
    this.dishPic.html("");
    this.dishDesc.html("");
    this.ingredientList.html("");
    this.ingredientsPrice.html("");
    this.instructions.html("");

    // Getting info from model
    model.getIngredients(this.dishID, function(ingredientsResults) {
      _this.ingredients = ingredientsResults;
    });

    model.getDish(this.dishID, function(dishResults) {
      _this.dish = dishResults;

      // Displaying the title, image, and description
      _this.dishName.html(_this.dish.title);
      _this.dishPic.append("<img src='" + _this.dish.image + "' id='" + _this.dish.title + "' width='250' height='250'>");
      _this.dishDesc.append("<p>" + _this.dish.description +"</p>");

      // Displaying the ingredients
      for (key in _this.ingredients) {
        var ingredient = _this.ingredients[key];
        _this.ingredientList.append("<p align='left'>" + ingredient.name + " " + ingredient.amount + " " + ingredient.unit + "</p>");
        _this.ingredientsPrice.append("<p align='left'>" + ingredient.amount.toFixed(2) + " SEK</p>");
      }
      // Displaying the total
      _this.ingredientList.append("<p align='left' style='font-weight: 400; margin-top: 20px'>" + "All ingredients" + "</p>");

      model.getPrice(_this.dishID, function(totalPrice) {
        _this.totalPrice = totalPrice;
        _this.ingredientsPrice.append("<p align='left' style='font-weight: 400; margin-top: 20px'>" + _this.totalPrice.toFixed(2) + " SEK</p>");
      })

      // Displaying the instructions
      _this.instructions.append("<h1 align='left' style='margin-bottom: 20px'>Instructions</h1>");
      _this.instructions.append("<p align='left'>" + _this.dish.instructions + "</p>");

    });

    //console.log(_this.dish);
    //console.log(_this.ingredients);

  }

  this.buildPage();

}
