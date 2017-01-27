var SelectDishView = function(container, model) {

  this.mainCourses = model.getAllDishes("main dish");
  this.dishesPics = container.find(".dishesPics");
  this.dishesDesc = container.find(".dishesDesc")

  for (key in this.mainCourses) {
    var course = this.mainCourses[key];
    //console.log(course.image);
    this.dishesPics.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<a href='" + course.link + "'>" + "<img src='images/" + course.image + "' id='" + course.name + "'>" + "</a></div>");

    this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<p>" + course.name + "</p>" + "<p>" + course.description +"</p>" + "</div>")
  }
}
