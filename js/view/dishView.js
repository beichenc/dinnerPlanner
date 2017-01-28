var DishView = function(container, model, dishID) {

  this.course = model.getDish(dishID);
  this.courseName = container.find("#dishName");
  this.dishPic = container.find(".dishPic");
  this.dishDesc = container.find(".dishDesc");
  this.ingredients = model.getIngredients(dishID);
  this.ingredientList = container.find(".dishIngredients");
  this.instructions = container.find(".dishInstructions");
  this.ingredientsPrice = container.find(".ingredientsPrice");
  this.ingredientsPriceTotal = container.find(".ingredientsPriceTotal");
  this.addDishButton = container.find("#addDishButton");
  this.backButton = container.find("#backButton");

  // Displaying the title, image, and description
  this.courseName.html(this.course.name);
  this.dishPic.append("<img src='images/" + this.course.image + "' id='" + this.course.name + "' width='250' height='250'>");
  this.dishDesc.append("<p>" + this.course.description +"</p>")

  // Displaying the ingredients
  for (key in this.ingredients) {
    var ingredient = this.ingredients[key];
    this.ingredientList.append("<p align='left'>" + ingredient["name"] + " " + ingredient["quantity"] + " " + ingredient["unit"] + "</p>");
    this.ingredientsPrice.append("<p align='left'>" + ingredient["price"].toFixed(2) + " SEK</p>");
  }
  // Displaying the total
  this.ingredientList.append("<p align='left' style='font-weight: 400; margin-top: 20px'>" + "All ingredients" + "</p>");
  this.ingredientsPrice.append("<p align='left' style='font-weight: 400; margin-top: 20px'>" + model.getPrice(dishID).toFixed(2) + " SEK</p>");


  // Displaying the instructions
  this.instructions.append("<h1 align='left' style='margin-bottom: 20px'>Instructions</h1>");
  this.instructions.append("<p align='left'>" + this.course.instructions + "</p>");

  // Attach listeners to HTML controls - question: is this supposed to be here or in the view controller
  this.addDishButton.click(function() {
    model.addDishToMenu(dishID);
    // Now how do I update the sideBarView to display this menu?
  });
}
