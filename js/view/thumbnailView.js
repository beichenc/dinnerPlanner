var ThumbnailView = function(container, model, dish) {

  var _this = this;
  this.container = container;
  this.dish = dish;

  container.append("<div class='inline' style='word-wrap: break-word; width: 150px'>" + "<img src='images/" + dish.image + "' id='" + dish.name.replace(/\s+/g, '') + "'>" + "</div>");

  this.img = container.find("#"+ dish.name.replace(/\s+/g, ''));
};
