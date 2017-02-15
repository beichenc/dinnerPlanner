
// Problem: this view controller has to known about two views. Is that ok?
var SelectDishViewController = function(model, selectDishView) {


  selectDishView.appetizerChoice.click(function() {
    selectDishView.buildPage("starter");
    selectDishView.type = "starter";
  });

  selectDishView.maindishChoice.click(function() {
    selectDishView.buildPage("main dish");
    selectDishView.type = "main dish";
  });

  selectDishView.dessertChoice.click(function() {
    selectDishView.buildPage("dessert");
    selectDishView.type = "dessert";
  });

  selectDishView.searchField.change(function() {
    var filter = $(this).val();
    var type = selectDishView.type;
    selectDishView.buildPage(type, filter);
  }).keyup(function() {
    $(this).change();
  })

}
