const fruits = ['Apple', 'banana', 'Coconuts', 'grape', 'mango'];


const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const currentNumbers = numbers[i];
    sum = sum + currentNumbers;
    console.log(sum);
}