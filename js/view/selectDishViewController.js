
// Problem: this view controller has to known about two views. Is that ok?
var SelectDishViewController = function(model, selectDishView) {


  selectDishView.appetizerChoice.click(function() {
    selectDishView.buildPage("starter", selectDishView.filter);
    selectDishView.type = "starter";
  });

  selectDishView.maindishChoice.click(function() {
    selectDishView.buildPage("main course", selectDishView.filter);
    selectDishView.type = "main course";
  });

  selectDishView.dessertChoice.click(function() {
    selectDishView.buildPage("dessert", selectDishView.filter);
    selectDishView.type = "dessert";
  });

  selectDishView.searchField.change(function() {
    var filter = selectDishView.searchField.val();
    var type = selectDishView.type;
    selectDishView.buildPage(type, filter);
    selectDishView.filter = filter;
  }).keyup(function() {
    delay(function() {
      selectDishView.searchField.change();
    }, 600);

  });

  var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    }
  })();


}
