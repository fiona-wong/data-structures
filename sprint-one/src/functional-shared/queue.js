var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.count = 0;
  return _.extend(newQueue, queueMethods);
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage)[0];
  var frontOfStack = this.storage[keys];
  delete this.storage[keys];
  return frontOfStack;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};