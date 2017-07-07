var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
//time complexity = constant
  this._storage.push(item);
};

setPrototype.contains = function(item) {
//time complexity = linear
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    } 
  }
  return false;
};

setPrototype.remove = function(item) {
//time complexity = linear
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
    } 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
