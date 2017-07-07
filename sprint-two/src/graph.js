

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
  //add node property into Graph, giving it an empty edge
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //return if the nodes object has the 'node ' property
  return this.nodes.hasOwnProperty(node);    
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //remove node from the nodes object
  delete this.nodes[node];
  
  for (var keys in this.nodes) {
    if (this.nodes[keys].length > 0) {
      for (var i = 0; i < this.nodes[keys].length; i++) {
        if (this.nodes[keys][i] === node) {
          this.nodes[keys].splice(i, 1);
        }
      }
    }
  }
  //iterate through the keys for everything that has a length that's longer than 1
  //iterate through the array to check for anything that matches the node
  //if it matches then splice out the node in the array
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //loop throught node object 
    //check to see if it has Edge
      //if edge return true
  
  for (var i = 0; i < this.nodes[fromNode].length; i++) {
    if (this.nodes[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //push toNode into fromNode edge array
  //push fromNode into toNode edge array
  this.nodes[fromNode] = this.nodes[fromNode].concat(toNode);
  this.nodes[toNode] = this.nodes[toNode].concat(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes[fromNode].length; i++) {
    if (this.nodes[fromNode][i] === toNode) {
      this.nodes[fromNode].splice(i, 1);
    }
  }
  //loop through fromNode edges array
    //if edges array has the toNode then splice at that index
  //loop through the toNode edges array
    //if edges array has the fromNode then we splice at that index
  for (var i = 0; i < this.nodes[toNode].length; i++) {
    if (this.nodes[toNode][i] === fromNode) {
      this.nodes[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    key = cb(key); 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


