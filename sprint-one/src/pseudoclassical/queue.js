var Queue = function() {
  this.storage = {};
  this.count = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage)[0];
  var frontOfStack = this.storage[keys];
  delete this.storage[keys];
  return frontOfStack;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};