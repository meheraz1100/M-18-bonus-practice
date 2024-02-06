// find min and max numbers

const numbers = [45, 23, 4, 38, 30, 234];

let maxNum = numbers[0];
let minNum = numbers[0];

for(let i = 0; i < numbers.length; i++){
    const currentNumbers = numbers[i];

    if(maxNum < currentNumbers){
        maxNum = currentNumbers;
    }

    if(minNum > currentNumbers){
        minNum = currentNumbers;
    }
}

console.log(maxNum, minNum);