var SelectDishView = function(container, model) {

  var _this = this;
  var filter = "";

  // Finding the elements in the view HTML.
  this.dishesPics = container.find(".dishesPics");
  this.dishesDesc = container.find(".dishesDesc");
  this.container = container;
  this.appetizerChoice = container.find("#appetizerChoice");
  this.maindishChoice = container.find("#maindishChoice");
  this.dessertChoice = container.find("#dessertChoice");
  this.searchField = container.find("#searchField");
  this.loadingMsg = container.find(".loadingMsg");

  // Build page function that is called every time the page needs to update.
  this.buildPage = function(type, filter) {

    //If first time loaded
    if (type === "") {
      this.dishesPics.append("<p id='pleaseSelect'>Please select a dish type</p>");
    }

    else {

      // Erase page
      this.dishesPics.html("");

      // Display loading message
      this.loadingMsg.html("<h1 align='left' style='margin-left: 20px'>Loading, please wait</h1>");

      // Getting data from the model.
      model.getAllDishes(type, filter, function(api_results) {

        //Erasing page
        _this.dishesPics.html("");
        _this.dishesDesc.html("");

        // Finished loading
        _this.loadingMsg.html("");

        _this.dishes = api_results;

        // Populating the view with images and descriptions
        for (key in _this.dishes) {

          var dish = _this.dishes[key];

          _this.dishesPics.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<img dishID='" + dish.id + "' src='https://spoonacular.com/recipeImages/" + dish.image + "' id='" + dish.title.replace(/\s+/g, '') + "' height='150px' width='150px'>" + "<p class='belowPic'>" + dish.title + "</p>" + "</div>");
          /*_this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<p>" + dish.title + "</p>" + "<p>" + dish.description +"</p>" + "</div>")*/

        };
      }, function() {
        _this.loadingMsg.html("");
        _this.dishesPics.append("<h1>There was some error, uh oh...</h1>");
      });
    }

  };

  this.buildPage("");
};
