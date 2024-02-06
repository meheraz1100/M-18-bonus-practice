//calculating discount
const purchaseHistory = [100, 300, 500, 150, 125];

const discountedPrice = [];
for( let i = 0; i < purchaseHistory.length; i++){
    const currentElement = purchaseHistory[i];
    if(currentElement > 200){
        const calculatedDiscount = currentElement - currentElement * 10 / 100;
        discountedPrice.push(calculatedDiscount);
    }
    else{
        discountedPrice.push(currentElement);
    }
}

console.log(discountedPrice);