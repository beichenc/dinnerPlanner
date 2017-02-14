var OverviewView = function (container, model) {


//document.getElementById("numberOfGuests").innerHTML = model.getNumberOfGuests(); //

model.addDishToMenu(101);
model.addDishToMenu(201);
model.addDishToMenu(2);
model.increaseNumberOfGuests();
model.increaseNumberOfGuests();
model.increaseNumberOfGuests();
model.increaseNumberOfGuests();

//Show pics and description
var menu = model.getFullMenu();
//console.log(menu);

this.dishesPics = container.find(".dishesPics");
this.dishesDesc = container.find(".dishesDesc");

for (key in menu) {
	var dish = menu[key];
	this.dishesPics.append( "<div class='inline' style='word-wrap: break-word; width: 150px'> <img src= 'images/" + dish.image + "'> </div>");
	this.dishesDesc.append("<div class='inline' style='word-wrap: break-word; width: 150px'> <p>" + dish.description + "</p> <p> SEK " + (model.getPrice(dish.id) * model.getNumberOfGuests()).toFixed(2) + "</p> </div>");
}

//Show the number of Guests；
container.find("#numberOfGuests").html(model.getNumberOfGuests());

//Show total
this.totalCostDiv = container.find("#totalCostInOverviewDiv");
console.log(this.totalCostDiv);
this.totalCostDiv.append("<p id='totalCostInOverview'>Total: SEK "+ model.getTotalMenuPrice() + "</p>");

}
