var Event = function(sender) {
  this.listeners = [];

  this.attach = function(listener) {
    this.listeners.push(listener);
  }

  this.notify = function(args) {
    for (var i = 0; i < this.listeners.length; i++) {
      // What does this mean?
      this.listeners[i](sender, args);
    }
  }
}
