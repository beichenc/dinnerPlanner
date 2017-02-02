var Event = function(sender) {
  this.listeners = [];

  this.attach = function(listener) {
    this.listeners.push(listener);
  }

  this.notify = function(args) {
    for (var i = 0; i < this.listeners.length; i++) {
      this.listeners[i](sender, args);
    }
  }
}
