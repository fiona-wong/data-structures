var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  
  someInstance.enqueue = function(value) {
    //adds item to the back of the queue
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    //removes item from the front of the queue
    var frontOfStack = storage[Object.keys(storage).length - 1];
    delete storage[0];
    return frontOfStack;
    

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
