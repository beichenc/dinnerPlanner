var SelectDishView = function(container, model) {

  /*$(document).ready(function() {
    for (key in this.mainDishes) {
      var dish = this.mainDishes[key];
      $("#"+ dish.name.replace(/\s+/g, '')).click(createCallBack(dish.id));
    }
  });

  var createCallBack = function(dish.id) {
    return function() {
        _this.dishClicked.notify(dish.id);
      };
  };*/

  var _this = this;

  // Getting data from the model.
  // To implement later: this data should change depending on what type the user selects in the view.
  this.mainDishes = model.getAllDishes("main dish");

  // Finding the elements in the view HTML.
  this.dishesPics = container.find(".dishesPics");
  this.dishesDesc = container.find(".dishesDesc");
  this.container = container;
  //this.picsIdList = {};

  //var i = 0;
  // Populating the view with images and descriptions
  for (key in this.mainDishes) {

    var dish = this.mainDishes[key];
    this.dishesPics.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<img src='images/" + dish.image + "' id='" + dish.name.replace(/\s+/g, '') + "'>" + "</div>");
    //this.picsIdList[i] =  dish.name;
    this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<p>" + dish.name + "</p>" + "<p>" + dish.description +"</p>" + "</div>")
    //i++;
    //console.log(this.picsIdList);
    //console.log(dish.name);

    $("#"+ dish.name.replace(/\s+/g, '')).click(function() {
      //console.log(dish.id);
        _this.dishClicked.notify(dish.id);
    });

    console.log(dish.id);
  };

  console.log(dish.id);

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
