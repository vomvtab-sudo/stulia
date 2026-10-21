'use strict';

import { formatReceipt } from "./format.js";
import { shopInfo, products } from "./data.js";
import { searchid, calculatorOrderTotal, applyPromoCode } from "./utils.js";

const tovid = document.getElementById('tovars');
const but = document.getElementById('but-promo');
const promo = document.getElementById('promo');
const check = document.getElementById('check');

const order = {

    items: [

        {name: "Стул 'Венский'", price: 3490, quantity: 1},
        {name: "Кресло 'Лофт'", price: 8900, quantity: 1},

    ],

};

check.style.background = 'yellow';
check.style.width = '220px';

but.addEventListener('click', () => {

    check.textContent = formatReceipt(order);

});
