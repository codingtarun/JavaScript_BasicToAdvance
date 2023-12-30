# JavaScript Key Notes

### Javascript is a High-level, Object-Oriented , Multi-Paradigm programming language.

1. High-level : We don't need to worry about the complex stuff like memory management , garbage collection etc, JS will automatically take care of it.
                Independent of the machine architecture.
2. Object Oriented : Uses concept of objects for storing most kinds of data.
                     Objects encapsulate data and behavior into a single unit.
3. Multi-Paradigm : We can use different types of programming methods like procedural, object-oriented and functional programming style.

### Role in web development : 

1. Making web pages Dynamic , interactive.
2. DOM manipulation
3. Event Handling

### Difference between VAR, LET & CONST
1. VAR
    1.1. 'var' variables are function scoped variables are declared with 'var'.
    1.2. 'var' variables are hoisted to the top of their scope , it means you can use them before it is declared , but it will be initialized with 'unidentified'.
    1.3. 'var' variables can be re-declared within the same scope.
    1.4. 'var' variables can be re-assigned.

2. LET : 
    2.1. 'let' variables are block scoped i.e within curly braces.
    2.2. 'let' variables are also hoisted but unlike 'var' variable are not initialized until the interprater reaches the declaration in the code.This is known as the 'temporal dead zone'(TDZ).
    2.3. 'let' variables cannot be redeclared in the same scope.
    2.4. 'let' variables can be re-assigned.

3. CONST : 
    3.1. 'const' are also block-scoped.
    3.2. 'const' variables must be initialied when declared and their value cannot be changed.
    3.3. 'const' variables are also hoisted but are not declared until interpreter reaches the declaration.
    3.4. 'const' cannot be re-declared & re-assigned.

### Datatypes : Javascript has dynamic typing i.e we don't need to manually define the datatype of the variable.
[ VALUE HAS TYPE NOT THE VARIABLE ]
1. Object 
2. Premitive Datatypes
    2.1. Number : Float point number
    2.2. String : Sequence of character
    2.3. Boolean : true / false
    2.4. Null : Empty value
    2.5. Undefined : when value is not assigned to a variable
    2.6  Symbol(ES2020) : unique & can't be changed.
    2.7. Bigint(ES2020) : Larger number values which 'Number' can't hold.

### Templateletreal : 
let name = 'John';
let greeting = `Hello, ${name}!`;

### Type Conversion & Coercion 
1. Type conversion is the explicit conversion of a value from one data type to another.Developers perform type conversion using functions or operators.
    let numString = "42";
    let convertedNum = Number(numString);

2. Type coercion is the implicit conversion of a value from one data type to another that occurs during operations or comparisons. JavaScript performs type coercion automatically
    let result = "5" + 3;
    console.log(result); 

### Statement & Expression
    1. Statements : A statement is a complete line of code that performs a specific action. Statements are typically terminated by a semicolon ;. Some statements may span multiple lines and end with a semicolon.
        
            let x = 5;  // Variable declaration statement
            console.log(x);  // Function call statement
            if (x > 0) {  // Conditional statement
            console.log("Positive");
            } else {
            console.log("Non-positive");
            }

        
    2. An expression is a piece of code that produces a value. It can be a single value, a variable, or a combination of values and operators. Expressions can be part of statements.
    
    let a = 3;  // Assignment expression
    let b = 2 * a;  // Arithmetic expression
    let isPositive = a > 0;  // Comparison expression

    
### Ternary Operator : a concise way to write conditional expressions in JavaScript.
    condition ? expressionIfTrue : expressionIfFalse;
    let message = (age >= 18) ? "You are an adult" : "You are a minor";









