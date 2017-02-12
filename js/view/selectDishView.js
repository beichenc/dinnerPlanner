var SelectDishView = function(container, model) {

  var _this = this;
  //this.type = "main dish"; //Default as main dish

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

    //If first time loaded
    if (type === "") {
      this.dishesPics.append("<p align='left' id='pleaseSelect'>Please select a dish type</p>");
    }

    // Getting data from the model.
    // To implement later: this data should change depending on what type the user selects in the view.
    this.dishes = model.getAllDishes(type, filter);

    // Populating the view with images and descriptions
    for (key in this.dishes) {

      var dish = this.dishes[key];
      var thumbnailView = new ThumbnailView($(".dishesPics"), model, dish);
      //var thumbnailViewController = new ThumbnailViewController(model, thumbnailView);

      //this.dishesPics.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<img src='images/" + dish.image + "' id='" + dish.name.replace(/\s+/g, '') + "'>" + "</div>");
      this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<p>" + dish.name + "</p>" + "<p>" + dish.description +"</p>" + "</div>")


      /*thumbnailView.img.click(function() {
        console.log(thumbnailView.dish.id);
        _this.dishClicked.notify(thumbnailView.dish.id);
      });*/

      container.find("#"+ dish.name.replace(/\s+/g, '')).click(function() {
        //console.log(dish.id);
          _this.dishClicked.notify(dish.id);
      });
      
    };
  };

  this.buildPage("");
};
