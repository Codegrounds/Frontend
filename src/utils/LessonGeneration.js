
export function generateLesson(lessonName) {

	switch (lessonName) {
		case 'Lesson 1':
			return `# Lesson 1: Variables

In javascript there are several different types of variables: integer, double, boolean, and string 

(there are more than these, but these are the main ones):

**integer:** a whole number like 1 or -4

**double:** any number whole or non-whole like 4.31

**boolean:** a variable that has two states true or false

**string:** a bunch of characters together like “this is a string”

In order to create one first write 
let (variable name) = (value);
in order to create a string the letters used must be surrounded in quotes

here are some further examples

(**integer**)
let iAmAnInt = 5;

(**double**)
let iAmADouble = 2.3;

(**boolean**)
let iAmABoolean = true;

(**string**)
let iAmAString = “hello world”;`


		case 'Lesson 2':
			return `# Lesson 2: Operations 
One thing all programming languages have in common are some of the basic math operations. 

These operations are +, -, *, /. Like in math + adds two numbers, - subtracts one number from another, * multiples numbers, 

and / divides one number from another. 
			
x = 5.0

y = 2.0
			
x + y = 7

y - x = -3

y * x = 10

x / y = 2.5
			
However, when one integer is dividing another integer an interesting thing occurs:

5 / 2 = 2

8 / 3 = 2

1 / 5 = 0

What’s happening here?
			
When one integer divides another, and there is a remainder the output will the be the truncated version of the proper answer. 

Truncated means that anything after the decimal place will be cut off

2.34 => 2

-121.543 => -121
			
While integer division might seem annoying it has a variety of useful uses in programming.`

		case 'Lesson 3':
			return `# Lesson 3: Conditionals and if statements

In addition to the math operations JavaScript has something known as conditional operators: <, >, <=, and >=. 

all of the operators are each true or false, outputting a boolean
			
let x = 4 < 2;
let y = 3 <= 3
let z = 2 < 1
			
x = true
y = true
z = false
			
These conditionals are mainly used in if statements. An If statement will only run if the conditional inside is true. 

If statements are made by writing 
			
if (conditional statement inside) { 
code you want to run 
}
			
some examples are below:
			
if (10 > 4) {
			
this code will run
			
}
			
let x = 2;
			
if (x > 10) {

this code won't run

}`
		default:
			return `nothing to see here`
	}
}
