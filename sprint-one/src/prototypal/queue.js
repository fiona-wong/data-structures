var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;
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
