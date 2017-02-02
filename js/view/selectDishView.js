var SelectDishView = function(container, model) {

  var _this = this;

  this.mainCourses = model.getAllDishes("main dish");
  this.dishesPics = container.find(".dishesPics");
  this.dishesDesc = container.find(".dishesDesc");
  this.container = container;
  //this.picsIdList = {};

  //var i = 0;
  // Populating the view with images and descriptions
  for (key in this.mainCourses) {

    var course = this.mainCourses[key];
    this.dishesPics.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<img src='images/" + course.image + "' id='" + course.name.replace(/\s+/g, '') + "'>" + "</div>");
    //this.picsIdList[i] =  course.name;
    this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<p>" + course.name + "</p>" + "<p>" + course.description +"</p>" + "</div>")
    //i++;
    //console.log(this.picsIdList);
    //console.log(course.name);

    //console.log("#" + course.name.replace(/\s+/g, ''));
    $("#"+ course.name.replace(/\s+/g, '')).click(function() {
      console.log(course.id);
      //_this.dishClicked.notify(_this, course.id);
      _this.dishClicked.notify(course.id);
    });

    console.log(course.id);
  };

  console.log(course.id);

  // Testing
  this.dishClicked = new Event(this);

  /*this.dishesPics.click(function() {
    _this.dishClicked.notify(this);
  })*/

  /*for (key in this.picsIdList) {
    var id = this.picsIdList[key];
    console.log(id);
  }*/
}
