// swap array elements 



const fruits = ['Apple', 'banana', 'Coconuts', 'grape','mango'];

const numbers = [10, 20, 30, 40, 50];

const temp = numbers[3];

numbers[3] = numbers[1];
numbers[1] = temp;

console.log(numbers);