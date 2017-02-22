
// Problem: this view controller has to known about two views. Is that ok?
var SelectDishViewController = function(model, selectDishView) {


  selectDishView.appetizerChoice.click(function() {
    selectDishView.buildPage("starter", selectDishView.filter);
    selectDishView.type = "starter";

    //console.log("666");
  });

  selectDishView.maindishChoice.click(function() {
    selectDishView.buildPage("main dish", selectDishView.filter);
    selectDishView.type = "main dish";
  });

  selectDishView.dessertChoice.click(function() {
    selectDishView.buildPage("dessert", selectDishView.filter);
    selectDishView.type = "dessert";
  });


  var options = {
  callback: function (value) {
  console.log('TypeWatch callback: (' + (this.type || this.nodeName) + ') ' + value); 

  var filter = $(this).val();
  selectDishView.filter = filter;
  var type = selectDishView.type;
  selectDishView.buildPage(type, filter);
  },
  wait: 750,
  highlight: true,
  allowSubmit: false,
  captureLength: 2
  }

  selectDishView.searchField.typeWatch(options);


  

    
  // }).keyup(function(){
  //   $(this).change();
  // });
}




