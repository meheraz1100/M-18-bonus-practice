// find an array element

const fruits = ['Apple', 'banana', 'Coconuts', 'grape','mango'];

const target = 'jackfruit';
let foundIndex = -1;
for(let i = 0; i < fruits.length; i++) {
    const currentFruits = fruits[i];
    if(currentFruits == target){
        foundIndex = i;
    }
}

if(foundIndex > -1){
    console.log(foundIndex, 'founded');
}
else{
    console.log('not found');
}