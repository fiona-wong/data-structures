var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  var count = 0;
  // Implement the methods below
  
  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {

    var keys = Object.keys(storage)[0];
    var frontOfStack = storage[keys];
    delete storage[keys];
    return frontOfStack;
    

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
