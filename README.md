![cf](http://i.imgur.com/7v5ASc8.png) Trees
====

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Requirements  
#### Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include  
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **test/** -- directory for holding your programs unit and integration tests


####  Documentation  
  * in your README, write documentation for you data structures
  * your documentation should includes code block usage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks  
* Implement a BinaryTree Constructor (__not an ES6 class__)
* implement the following prototype methods
  * `find(value)` should iterate over all child nodes using an in-order traversal and return the first node that has that value, it should return null if a node with the value is not found
  * `toString()` should iterate over all child nodes using a pre-order traversal and concatenate their values separated by newlines in to a string
  * `.toArray(array)` should use a post-order traversal and push all the tree's elements into an array.
  
##### Big O
  In the `readme.md` of your application, include the Big O complexity (time and space) for all the implemented methods.


#### Testing  
  * Write at least 3 unit tests (2 normal cases and one edge case) for every implemented method.
  * Organize your tests into appropriate describe/it blocks for test output readability

#### Bonus (1 point)
Implement the `.toArray` method with the following signature `.toArray()`