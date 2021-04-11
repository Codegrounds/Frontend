
export function generateLesson(lessonName) {

    switch (lessonName) {
        case 'Lesson 1':
            return `# Lesson 1: Variables

In javascript there are several different types of variables: integer, double, boolean, and string (there are more than these, but these are the main ones):

**integer:** a whole number like 1 or -4

**double:** any number whole or non-whole like 4.31

**boolean:** a variable that has two states true or false

**string:** a bunch of characters together like “this is a string”

In order to create one first write 
let (variable name) = (value);
in order to create a string the letters used must be surrounded in quotes

here are some further examples

(integer)
let iAmAnInt = 5;

(double)
let iAmADouble = 2.3;

(boolean)
let iAmABoolean = true;
\n



(string)



let iAmAString = “hello world”;`
        case 'Lesson 2':
            return 'test\n\n\n\n\n\n\n\n\ning'
        default:
            return `nothing to see here`
    }
}
