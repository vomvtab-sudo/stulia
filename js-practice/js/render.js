"use strict";

import { formatPrice } from "./format.js";
import { addTOCart, getCartTotal, removeFromCart } from "./state.js";
import { getVisibleProducts } from "./logic.js";

export function renderProducts(products){

    const productList = document.getElementById('product-list');

    if (!productList) {

        console.error('Don`t search product-list');
        return;

    }

    productList.replaceChildren();

    products.forEach(product => {
        
        const li = document.createElement('li');
        li.classList.add('product-item');
        li.dataset.id = product.id;

        const nameEl = document.createElement('h3');
        nameEl.classList.add('product-name');
        nameEl.textContent = product.name;

        const priceEl = document.createElement('p'); 
        priceEl.classList.add('product-price'); 
        priceEl.textContent = formatPrice(product.price);

        const categoryEl = document.createElement('span');
        priceEl.classList.add('product-category');
        priceEl.textContent = product.category;

        const button = document.createElement('button');
        button.classList.add('add-cart-btn');
        button.textContent = 'В корзину';

        button.addEventListener('click', () => {

            addTOCart(product.id);

        });

        li.append(nameEl, priceEl, categoryEl, button);

        productList.append(li);

    });

}

export function renderCart(cart){

    const cartList = document.getElementById('cart-list');
    const cartTotalEl = document.getElementById('cart-total');

    if (!cartList || !cartTotalEl) {

        console.error('cart-list or cart-total don`t search');

        return;

    }

    cartList.replaceChildren();

    cart.forEach(item => {
        
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.textContent = item.id;

        const infoEl = document.createElement('div');
        infoEl.classList.add('cart-info');
        infoEl.textContent = `${item.name} (x${item.quantity})`;

        const priceEl = document.createElement('div');
        priceEl.classList.add('cart-price');
        priceEl.textContent = formatPrice(item.price * item.quantity);

        const but = document.createElement('button');
        but.classList.add('remove-cart-but');
        but.textContent = 'Удалить';

        but.addEventListener('click', removeFromCart(item.id));
        li.append(infoEl, priceEl, but);
        cartList.append(li);
        
    });

    

    cartTotalEl.textContent = formatPrice(getCartTotal());

}

export function setStatus(message){

    const stat = document.getElementById('status');

    if (!stat) {

        console.error('don`t search #status');

    }

    stat.textContent = message;

}

export function renderAll(state){

    renderProducts(getVisibleProducts(state));

    renderCart(state.cart);

}