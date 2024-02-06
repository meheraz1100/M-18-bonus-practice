// filter an array

const purchaseHistory = [100, 300, 500, 150, 125];
// Using loop
const filterpurchasehistory = [];

for( let i = 0; i < purchaseHistory.length; i++){
    const currentElement = purchaseHistory[i];
    if(currentElement <= 200){
        filterpurchasehistory.push(currentElement);
    }
}

// using .filter()
const filterpurchasehistory2 = purchaseHistory.filter(function(currentElement){
    return currentElement <= 200;
})

console.log(filterpurchasehistory2);


