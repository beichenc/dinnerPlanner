var DishView = function(container, model, dishID) {

  this.course = model.getDish(dishID);
  this.courseName = container.find("#dishName");
  this.dishPic = container.find(".dishPic");
  this.dishDesc = container.find(".dishDesc");

  console.log(this.course);
  this.courseName.html(this.course.name);
  this.dishPic.append("<img src='images/" + this.course.image + "' id='" + this.course.name + "' width='250' height='250'>");
  this.dishDesc.append("<p>" + this.course.description +"</p>")

  /*for (index in this.mainCourses) {
    var course = this.mainCourses[index];
    this.dishesPics.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<a href='" + course.link + "'>" + "<img src='images/" + course.image + "' id='" + course.name + "'>" + "</a></div>");

    this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<p>" + course.name + "</p>" + "<p>" + course.description +"</p>" + "</div>")
  }*/
}
