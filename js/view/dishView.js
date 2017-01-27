var DishView = function(container, model, dishID) {

  this.course = model.getDish(dishID);
  this.courseName = container.find("#dishName");
  this.dishPic = container.find(".dishPic");
  this.dishDesc = container.find(".dishDesc");
  this.ingredients = model.getIngredients(dishID);
  this.ingredientList = container.find(".dishIngredients");

  this.courseName.html(this.course.name);
  this.dishPic.append("<img src='images/" + this.course.image + "' id='" + this.course.name + "' width='250' height='250'>");
  this.dishDesc.append("<p>" + this.course.description +"</p>")

  this.ingredientList.append("<h1 align='left'>Ingredients</h1>");

  for (key in this.ingredients) {
    var ingredient = this.ingredients[key];
    this.ingredientList.append("<p align='left'>" + ingredient["name"] + " " + ingredient["quantity"] + ingredient["unit"] + "</p>");
  }


  /*for (index in this.mainCourses) {
    var course = this.mainCourses[index];
    this.dishesPics.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<a href='" + course.link + "'>" + "<img src='images/" + course.image + "' id='" + course.name + "'>" + "</a></div>");

    this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<p>" + course.name + "</p>" + "<p>" + course.description +"</p>" + "</div>")
  }*/
}
