"use string";

export function formatPrice(amount){

    if(typeof amount !== 'number') {

        return '0 ₽';

    }

    return new Intl.NumberFormat('ru-RU', {

        style: "currency",
        currency: 'RUB',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,

    }).format(amount);

}

export function formatProduct(product) {

    if (!product || !product.name || product.price === undefined) {

        return '';

    }

    const priceString = formatPrice(product.price);

    return `${product.name} - ${priceString}`;

}

export function formatCartItem(item) {

    if (!item || !item.name || item.price === undefined || item.quantity === undefined){

        return '';

    }

    const discountM = 1 - (item.discount || 0) / 100;
    const priceWD = item.price * discountM;

    const totalPrice = priceWD * item.quantity;

    const priceString = formatPrice(totalPrice);

    return `${item.name} (x${item.quantity}) - ${priceString}`;

}