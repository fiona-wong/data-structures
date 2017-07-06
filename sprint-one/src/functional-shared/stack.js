var Stack = function() {
  var newStack = {};
  newStack.values = {};
  return _.extend(newStack, stackMethods);
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.values[Object.keys(this.values).length] = value;
};

stackMethods.pop = function() {
  var popped = this.values[Object.keys(this.values).length - 1];
  delete this.values[Object.keys(this.values).length - 1];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.values).length;
};