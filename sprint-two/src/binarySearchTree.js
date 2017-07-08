var BinarySearchTree = function(value) {
  var tree = {};
  
  tree.value = value;
  
  tree.left = null;
  
  tree.right = null;

  tree.insert = function(val) {
    var inserted = BinarySearchTree(val);
    //check if value passed into insert is lower than tree value
      //if it is lower check if left is null or contains value
    //if left contains value check if val is lower or higher
     //if left va
    if (inserted.value > tree.value) { 
      if (tree.right === null) {
        tree.right = inserted;
      } else {
        tree.right.insert(val);
      }
    } else if (inserted.value < tree.value) {
      if (tree.left === null) {
        tree.left = inserted;
      } else {
        tree.left.insert(val);
      }
    }
    
  };

  tree.contains = function(val) {
    if (tree.value === val) {
      return true;
    } else if (val < tree.value && tree.left !== null) {
      return tree.left.contains(val);
    } else if (val > tree.value && tree.right !== null) {
      return tree.right.contains(val);
    } else {
      return false;
    }
    
  };
  
  tree.depthFirstLog = function(cb) {
    cb (this.value);
    if (this.left) {
      //if value has a this .left
      //go to its value and run recursive function
      this.left.depthFirstLog(cb);
    }

    if (this.right) {
      this.right.depthFirstLog(cb);
    }

  };


  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
