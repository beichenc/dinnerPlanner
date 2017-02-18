var SelectDishView = function(container, model) {

  var _this = this;

  // Finding the elements in the view HTML.
  this.dishesPics = container.find(".dishesPics"); //dishPics also include dishDesc in selectDishView;
  //this.dishesDesc = container.find(".dishesDesc");
  this.container = container;
  this.appetizerChoice = container.find("#appetizerChoice");
  this.maindishChoice = container.find("#maindishChoice");
  this.dessertChoice = container.find("#dessertChoice");
  this.searchField = container.find("#searchField");

  // Build page function that is called every time the page needs to update.
  this.buildPage = function(type, filter) {

    //Erasing page
    this.dishesPics.html("");
    //this.dishesDesc.html("");

    //If first time loaded
    if (type === "") {
      this.dishesPics.append("<p id='pleaseSelect'>Please select a dish type</p>");
    };

    // Getting data from the model.
    // To implement later: this data should change depending on what type the user selects in the view.
    
    var cb = function(dataResults){
      console.log(dataResults);
      console.log("333");

      for (key in dataResults){
        var dish = dataResults[key];
        _this.dishesPics.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<div>" + "<p> <img width = '150'; height = '150'; dishID='" + dish.id + "' src = https://spoonacular.com/recipeImages/'" + dish.imageUrls[0] + "' id='" + dish.title.replace(/\s+/g, '') + "'> </p>" + "<p>" + dish.title + "</p>" + "<p>" + dish.description +"</p>"+ "</div>" +"</div>");
        //_this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<p>" + dish.title + "</p>" + "<p>" + dish.description +"</p>" + "</div>")
        console.log("444");
      };

    };



    this.dishes = model.getAllDishes(type, filter, cb);


    // Populating the view with images and descriptions 
    // CMD + / 
  //   for (key in this.dishes) {

  //     var dish = this.dishes[key];

  //     this.dishesPics.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<img dishID='" + dish.id + "' src='images/" + dish.image + "' id='" + dish.name.replace(/\s+/g, '') + "'>" + "</div>");
  //     this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<p>" + dish.title + "</p>" + "<p>" + dish.description +"</p>" + "</div>");
  //     console.log("444?");
  //   };
   };

  this.buildPage("");
};
