var DishView = function(container, model, dishID) {

  this.course = model.getDish(dishID);
  this.courseName = container.find("#dishName");
  this.dishPic = container.find(".dishPic");
  this.dishDesc = container.find(".dishDesc");

  this.courseName.html(this.course.name);
  this.dishPic.append("<img src='images/" + this.course.image + "' id='" + this.course.name + "' width='250' height='250'>");
  this.dishDesc.append("<p>" + this.course.description +"</p>")
}
