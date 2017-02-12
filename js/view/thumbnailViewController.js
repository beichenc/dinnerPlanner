var ThumbnailViewController = function(model, thumbnailView) {

  this.dishClicked = new Event(this);
  var _this = this;

  thumbnailView.img.click(function() {
    console.log(thumbnailView.dish.id);
    //document.getElementById("selectDishView").style.display = "none";
    // Here it doesn't work to set dishView.dishID to dishID. The dishView still displays the meatballs view even though the dishID gives the bakedbrie.
    /*dishView.dishID = dishID;
    console.log(dishView.dishID);
    dishView.buildPage();*/
    //document.getElementById("dishView").style.display = "block";
    _this.dishClicked.notify(thumbnailView.dish.id);

  });

}
