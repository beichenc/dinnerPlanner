// Is it correct to have sideBarView as a parameter so that I can change the number of guests displayed in sideBarView from this view?
var DishView = function(container, model) {

  var _this = this;
  this.dishID = 100;   //723984; // default so there is no error message upon page load
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
    this.dish = model.getDish(this.dishID);
    this.ingredients = model.getIngredients(this.dishID);

    // Displaying the title, image, and description
    this.dishName.html(this.dish.name);
    this.dishPic.append("<img src='images/" + this.dish.image + "' id='" + this.dish.name + "' width='250' height='250'>");
    this.dishDesc.append("<p>" + this.dish.description +"</p>")

    // Displaying the ingredients
    for (key in this.ingredients) {
      var ingredient = this.ingredients[key];
      this.ingredientList.append("<p align='left'>" + ingredient["name"] + " " + ingredient["quantity"] + " " + ingredient["unit"] + "</p>");
      this.ingredientsPrice.append("<p align='left'>" + ingredient["price"].toFixed(2) + " SEK</p>");
    }
    // Displaying the total
    this.ingredientList.append("<p align='left' style='font-weight: 400; margin-top: 20px'>" + "All ingredients" + "</p>");
    this.ingredientsPrice.append("<p align='left' style='font-weight: 400; margin-top: 20px'>" + model.getPrice(this.dishID).toFixed(2) + " SEK</p>");


    // Displaying the instructions
    this.instructions.append("<h1 align='left' style='margin-bottom: 20px'>Instructions</h1>");
    this.instructions.append("<p align='left'>" + this.dish.instructions + "</p>");
  }

  this.buildPage();

}
