"use strict";

const state = {

    products: [],
    cart: [],
    filter: 'all',
    sortBy: 'default',
    searchQuery: "",

}

export {state};

function addTOCart(productid){

    const existingIndex = state.cart.findIndex(item => item.id === productId);

    if(existingIndex > -1) {

        state.cart[existingIndex].quantity += 1;

    } else {

        const productAdd = state.products.find(p => p.id === productid);

        if (productAdd) {

            state.cart.push({

                id: productAdd.id,
                name: productAdd.name,
                price: productAdd.price,
                quantity: 1,

            });

        } else {

            console.log(`Product id: ${productid} not search`);

        }

    }
    saveCart();

}

function removeFromCart(productid){
    state.cart = state.cart.filter(item => item.id !== productid);
    saveCart();

}

function clearCart(){
    state.cart = [];
    saveCart();

}

function getCartTotal(){

    return state.cart.reduce((total, item) => {

        return total + (item.price * item.quantity);

    }, 0);

}

function saveCart(){

    try {

        const cartData = JSON.stringify(state.cart);
        localStorage.setItem('cart', cartData);
        console.log('Загрузка завершена');

    } catch (err) {

        console.error('Error: ', err);

    }

}

function loadCart(){

    try {

        const cartData = localStorage.getItem('cart');

        if (cartData) {

            const pCart = JSON.parse(cartData);

            if (Array.isArray(pCart)) {

                state.cart = pCart;
                console.log('Корзина загружена успешно:', state.cart);
                
            } else {

                console.log('Format error!');

            }

        } else {

            console.log('Don`t search saved cart');
            state.cart = [];

        }

    } catch (err) {

        console.error('error: ', err);
        localStorage.removeItem('cart');
        state.cart = [];

    }

}

export { addTOCart, removeFromCart, clearCart, getCartTotal, saveCart, loadCart }