// Is it correct to have sideBarView as a parameter so that I can change the number of guests displayed in sideBarView from this view?
var DishView = function(container, model, sideBarView) {

  var _this = this;
  this.dishID = 100;
  //console.log(this.dishID);
  this.course = model.getDish(this.dishID);
  this.courseName = container.find("#dishName");
  this.dishPic = container.find(".dishPic");
  this.dishDesc = container.find(".dishDesc");
  this.ingredients = model.getIngredients(this.dishID);
  this.ingredientList = container.find(".dishIngredients");
  this.instructions = container.find(".dishInstructions");
  this.ingredientsPrice = container.find(".ingredientsPrice");
  this.ingredientsPriceTotal = container.find(".ingredientsPriceTotal");
  this.addDishButton = container.find("#addDishButton");
  this.backButton = container.find("#backButton");
  this.container = container;

  // Events
  this.addButtonClicked = new Event(this);
  this.backButtonClicked = new Event(this);

	// Attach listeners to HTML controls - question: is this supposed to be here or in the view controller
	this.addDishButton.click(function() {
    console.log(_this.dishID);
    _this.addButtonClicked.notify(_this.dishID);
	});

  this.backButton.click(function() {
    _this.backButtonClicked.notify();
  })

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
  this.ingredientsPrice.append("<p align='left' style='font-weight: 400; margin-top: 20px'>" + model.getPrice(this.dishID).toFixed(2) + " SEK</p>");


  // Displaying the instructions
  this.instructions.append("<h1 align='left' style='margin-bottom: 20px'>Instructions</h1>");
  this.instructions.append("<p align='left'>" + this.course.instructions + "</p>");

  // Here is a simplified version of adding dish to menu. Why can't we use this one instead of going through all the .attach and .notify? This is like the updating number of guests problem.
  /*this.addDishButton.click(function() {
    model.addDishToMenu(dishID);
    // Now how do I update the sideBarView to display this menu?
  });*/
}
