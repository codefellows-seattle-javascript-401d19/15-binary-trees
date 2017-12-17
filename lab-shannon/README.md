## Purpose
This program is intended to create a binary tree with methods to find a node with a specific value, output a string of all nodes in pre-order traversal order, and output an array of all node values in post-order traversal order.

## How To Use
* Run 'npm install' to install all dependencies
* Run 'npm i --save jest' to save jest for testing purposes
* To test all functions run 'npm test'

## Methods
1. treeName.find(value)- Returns the node with the value provided if it exists in the binary tree. If no element is found null will be returned. If no value argument is provided an error will occur.
  * Big O complexity
    * time = O(binary tree's height)
    * space = O(1)

2. treeName.toString(baseString)- Returns a string with all elements present in the binary tree in pre-order traversal order. Provide the string you would like the elements concatenated onto as the baseString (you may input an empty string). If no baseString is provided, or it is not a string, an error will occur.
  * Big O complexity
    * time = O(binary tree's height)
    * space = O(1)

3. treeName.toArray(baseArray)- Returns an array with all element values present in the binary tree in post-order traversal order. Provide the array you would like the elements added into (you may provide an empty array). If no baseArray is provided, or it is not an array-like object, an error will occur.
    * Big O complexity
      * time = O(binary tree's height)
      * space = O(1)

## Technologies Used
* JavaScript
* node
* jest
* eslint


## License
MIT

## Credits
* Vinicio Vladimir Sanchez Trejo & the Code Fellows curriculum provided the base .eslintrc, .eslintignore, and .gitignore files.

* My fellow 401JS classmates and Vinicio for help problem solving and debugging.
