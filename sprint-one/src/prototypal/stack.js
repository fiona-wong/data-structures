var Stack = function() {

  var obj = Object.create(stackMethods);
  obj.storage = {};
  
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

stackMethods.pop = function() {
  var popped = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};