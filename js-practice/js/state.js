"use strict";

const state = {

    products: [],
    cart: [],
    filter: 'all',
    sortBy: 'default',
    searchQuery: "",

}

export {state};

async function addTOCart(productid){

    saveCart();

}

async function removeFromCart(productid){

    saveCart();

}

async function clearCart(){

    saveCart();

}

async function getCartTotal(){



}

async function saveCart(){



}

async function loadCart(){



}

export {addTOCart, }