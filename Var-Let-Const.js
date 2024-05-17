/*
  Variables declared with `var` keyword
  var is used to declare a variable and optionally initialising its value.

  
  Characteristics of var :
    1. Variables declared with var keyword have functional scope
*/


function foo() {
  var bar = 'hello';
  console.log(bar);
}
console.log(bar); // ReferenceError: bar is not defined

/*
  Here the variable bar does not exist outside the scope of function foo. The variable is only accessible within the scope of the function, 
  when accessed outside of the functional scope will throw reference error.

  P.S. — variables defined with var keyword are not block scoped.
*/

function foo() {
  if (true) {
    var bar = 'hello';
  }
  console.log(bar);
}
foo(); // prints hello


/*
2. Variables declared with var keyword are hoisted.

Hoisting is JavaScript’s default behaviour of moving declarations to the top and initialised with undefined.
*/

function foo() {
  if (false) {
    var bar = 'hello';
  }
  console.log(bar);
}
foo(); // prints undefined

/*
  The variable bar defined inside if block is visible to the outside block but within the function foo’s scope. 
  This is because the JavaScript engine read the above code as following:
*/

function foo() {
  var bar; // hoisted the declaration but not assignment
  if (false) {
    bar = 'hello';
  }
  console.log(bar); // undefined but no reference error
}
foo(); // prints undefined

// P.S. — Only the declaration gets raised and not the assignment


/*
  3. Variables defined with var keywords can be redeclared in the same scope
*/

function foo() {
 var bar = 'hello';
 if (true) {
   var bar = 'hi'; // no error !! replaced easily
 }
 console.log(bar);
}
foo(); // prints hi


// Variables declared with `let` & `const` keyword

/*

let is similar to var scope and it allows the variable’s value to be changed during the course of the program execution.
let is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. 
It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.

However, a const variable as the name suggest is used to define a constant in a program. 
const is a signal that the identifier won’t be reassigned. Any attempt made to change the const variable’s value will result in an error 


*/

// Characteristics of let & const:

/*
  1. Variables declared with let & const keyword are visible only inside the block in which it’s defined.
*/


function foo () {
  if(true) {
    const baz = 'hi';
    let bar = 'hello';
    console.log(baz, bar); // prints hello hi
  }
  console.log(baz, bar); // ReferenceError: baz is not defined
}
foo();

/*
  Here the variable bar in the second statement let bar = 'hello'; is defined within the if block scope. Thus trying to access it outside if block will throw reference error.
  The variable is only accessible with the block scope(may be a functional block or conditional block etc). Each assignment is scoped to its own block.

  2. Variables declared with let & const keyword are not subjected to hoisting.
*/

function foo () {
  console.log(bar); // ReferenceError: bar is not defined
  let bar = 'hello';
}
foo();

/*
These variables are NOT initialised with undefined. They fall into what is known as the Temporal Dead Zone until they are initialised. This leads to a ReferenceError 


3. Variables defined with let & const keywords cannot be redeclared in the same block scope.
*/

function foo () {
  let bar = 'hello';
  const bar = 'hi';
}
foo(); // SyntaxError: Identifier 'bar' has already been declared

/*
But a variable can be redeclared in function scope, given its declared within a different block scope.
Here in the below example let bar = 'hello'; the variable bar belongs to the function scope (outer block) and let bar = 'hi';
the variable bar belongs to the if block scope. Thus, it results in no error

*/

function foo () {
  let bar = 'hello';
  if(true) {
    let bar = 'hi';
    console.log(bar); // prints hi
  }
  console.log(bar); // prints hello 
}
/*
  We should use all three keyword — var , let & const keyword based on the intention 💁:
- Use var in places where you intend to use the variable across a lot of scopes.
- Use let in places where you are stylistically signalling that you want to contain it to the block.
- Use const in places where you want to define a constant.
*/
