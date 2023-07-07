In JavaScript, functions can be declared in different ways. Here are the three main ways to declare functions: function declarations, function expressions, and arrow functions.

1. Function Declaration:

   Code Example:
   ```javascript
   function greet(name) {
     console.log("Hello, " + name + "!");
   }
   
   greet("John"); // Output: Hello, John!
   ```

   Explanation:
   A function declaration starts with the `function` keyword, followed by the function name (`greet` in this example), a list of parameters (in this case, `name`), and the function body enclosed in curly braces `{}`. Function declarations are hoisted to the top of their scope, meaning they can be called before they are declared. In the code example, the `greet` function takes a `name` parameter and logs a greeting to the console.

2. Function Expression:

   Code Example:
   ```javascript
   var greet = function(name) {
     console.log("Hello, " + name + "!");
   };
   
   greet("John"); // Output: Hello, John!
   ```

   Explanation:
   Function expressions involve assigning a function to a variable. The `function` keyword is used to define an anonymous function, which is then assigned to the variable `greet`. Function expressions are not hoisted like function declarations, so they must be defined before they are called. In this example, the `greet` variable holds an anonymous function that takes a `name` parameter and logs a greeting to the console.

3. Arrow Function:

   Code Example:
   ```javascript
   var greet = (name) => {
     console.log("Hello, " + name + "!");
   };
   
   greet("John"); // Output: Hello, John!
   ```

   Explanation:
   Arrow functions provide a shorter syntax for defining functions. Instead of using the `function` keyword, an arrow (`=>`) separates the parameters and the function body. The arrow function in the example takes a `name` parameter and logs a greeting to the console. Arrow functions can be assigned to variables like function expressions.

All three ways of declaring functions allow you to define reusable blocks of code. The choice between them depends on the specific use case and personal preference. Function declarations and expressions are similar, but function expressions give you more flexibility by allowing you to assign functions to variables dynamically. Arrow functions are particularly useful for writing concise and more readable code, especially for simple functions or when working with anonymous functions.

It's important to note that function declarations and arrow functions create named functions, while function expressions can be anonymous or named. Named functions are useful for recursion or when you need to reference the function within its own scope.