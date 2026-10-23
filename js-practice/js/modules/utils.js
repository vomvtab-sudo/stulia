'use strict';


function searchid(prod, id){

    return console.log (prod.find(prod => prod.id === id));

}

function calculatorOrderTotal(items, id){

    const totalPrice = items[id].price + items[id].discount;
    console.log(`Order total: ${totalPrice}`);

}

function applyPromoCode(total, code){

    if (code == 'STUL10' || 'stul10') {

        const result = total * 0.9;        
        console.log(result);

    }

    else {

        console.log(total);

    }

}

export {searchid, calculatorOrderTotal, applyPromoCode};