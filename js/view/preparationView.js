var PreparationView = function (container, model) {

model.addDishToMenu(100);
model.addDishToMenu(201);
model.addDishToMenu(2);

var menu = model.getFullMenu();

container.find("#numberOfGuests").html(model.getNumberOfGuests());

this.preparationList = container.find("#preparationList");

for(key in menu){
	var dish = menu[key];
	this.preparationList.append("<div><div class='col-lg-2'> <div class='inline' style='word-wrap: break-word; width: 150px'> <img src= 'images/" + dish.image + "'> </div></div> <div class='col-lg-4'> <div class='inline' style='word-wrap: break-word; width: 250px'> <p style='font-size: 28px' ><b>"+ dish.name +"</b></p> <p>" + dish.description + "</p> </div></div> <div class='col-lg-6'> <div class='inline' style='word-wrap: break-word; width: 400px'> <p style='font-size: 20px'>Preparation</p> <p>" + dish.instructions +"</p></div></div></div>"); 
	

}

					


}


