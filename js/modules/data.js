'use strict';

const products = [

    {id: 1, name: "Стул 'Венский'", price: 3490, category: 'chairs', discount: 10, inStock: true},
    {id: 2, name: "Кресло 'Лофт'", price: 8900, category: 'chairs', discount: 10, inStock: true},
    {id: 3, name: "Стол 'Дуб'", price: 24500, category: 'tables', discount: 10, inStock: false},
    {id: 4, name: "Диван 'Скандинавия'", price: 34900, category: 'sofas', discount: 10, inStock: true},
    {id: 5, name: "Шкаф 'Классик'", price: 19900, category: 'wordrobes', discount: 10, inStock: true},
    {id: 6, name: "Журнальный столик 'Стекло'", price: 5900, category: 'tables', discount: 10, inStock: true},

];

const shopInfo = {

    name: '13 Стульев',
    adres: 'Ул. Пушкина д. 2',

};

export {shopInfo, products};