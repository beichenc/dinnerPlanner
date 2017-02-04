var SelectDishView = function(container, model) {

  /*$(document).ready(function() {
    for (key in this.dishes) {
      var dish = this.dishes[key];
      $("#"+ dish.name.replace(/\s+/g, '')).click(createCallBack(dish.id));
    }
  });

  var createCallBack = function(dish.id) {
    return function() {
        _this.dishClicked.notify(dish.id);
      };
  };*/

  var _this = this;
  this.type = "main dish"; //Default as main dish

  // Finding the elements in the view HTML.
  this.dishesPics = container.find(".dishesPics");
  this.dishesDesc = container.find(".dishesDesc");
  this.container = container;
  this.appetizerChoice = container.find("#appetizerChoice");
  this.maindishChoice = container.find("#maindishChoice");
  this.dessertChoice = container.find("#dessertChoice");
  this.searchField = container.find("#searchField");
  //this.picsIdList = {};

  // Events
  this.dishClicked = new Event(this);
  this.appetizerClicked = new Event(this);
  this.maindishClicked = new Event(this);
  this.dessertClicked = new Event(this);
  this.searchChanged = new Event(this);

  // Attach listeners to HTML controls - question: is this supposed to be here or in the view controller
  this.appetizerChoice.click(function() {
    _this.appetizerClicked.notify("starter");
    _this.type = "starter";
  })

  this.maindishChoice.click(function() {
    _this.maindishClicked.notify("main dish");
    _this.type = "main dish";
  })

  this.dessertChoice.click(function() {
    _this.dessertClicked.notify("dessert");
    _this.type = "dessert";
  })

  this.searchField.change(function() {
    var value = $(this).val();
    console.log(value);
    //console.log(_this.type);
    _this.searchChanged.notify([_this.type, value]);
  }).keyup(function() {
    $(this).change();
  })


  this.buildPage = function(type, filter) {

    //Erasing page
    this.dishesPics.html("");
    this.dishesDesc.html("");

    // Getting data from the model.
    // To implement later: this data should change depending on what type the user selects in the view.
    this.dishes = model.getAllDishes(type, filter);
    console.log(this.dishes);

    //var i = 0;
    // Populating the view with images and descriptions
    for (key in this.dishes) {

      var dish = this.dishes[key];
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

    //console.log(dish.id);

  }

  this.buildPage("main dish");

  // Testing


  /*this.dishesPics.click(function() {
    _this.dishClicked.notify(this);
  })*/

  /*for (key in this.picsIdList) {
    var id = this.picsIdList[key];
    console.log(id);
  }*/
}
