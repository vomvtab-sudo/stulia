// ||||||||||||||||||||||| 1 практика |||||||||||||||||||||||
"use strict";
/* //=========Объявление переменных===============
let visitorCount = 0;
const shopName = '13 стульев';
const isOpen = true;
//const shopName = '12 стульев';   //"синтаксическая ошибка(Type error)"
console.log(shopName, visitorCount, isOpen );

*/
/* //=========Работа с объектом===============

const product = {
    name: "Шкаф 'Классика'",
    price: '80 800',
    category: "Шкаф",
}
product.price = '2132';
console.log(product.name, product.price, product.category);

*/

/* //=========Определение типов===============
 
let productName = "Стул 'Венский'0'";
let productPrice = 3490;
let inStock = true;
let discount = null;
let description;
console.log(productName, typeof productName, productPrice, typeof productPrice, inStock, typeof inStock, discount, typeof discount, description, typeof description);

*/

/* //=========Массив и объект===============

let categories = ['chairs', 'tables', 'sofas', 'wardrobes'];
const shop = {
    name: "",
    addres: "",
    phone: "",
};
console.log(typeof shop, typeof categories);

*/

/* //=========Неявное преобразование===============

console.log(
    typeof '5' + 3, '\n',
    typeof '5' - 3, '\n',
    typeof '5' * '2', '\n',
    typeof true + 1, '\n',
    typeof null + 1, '\n',
    typeof undefined + 1, '\n'
);

*/

/* //=========Явное преобразование===============

let priceString = '3900';
let priceNum = Number(priceString);
console.log(priceNum, typeof priceNum);

let a = 0;
let b = Boolean(a);
console.log("\n", b);

let c = "";
let g = Boolean(c);
console.log("\n", g);

*/

/* //=========Арифметические операции===============

let price = 3490;
let quantity = 3;
console.log(
    "\n", price * quantity,
    "\n", (price * quantity) * 0.9,
    "\n", price * quantity % 1000
);

*/

/* //=========Сравнение===============

console.log(
    "\n 5 === '5' : \t", 5 === '5',
    "\n 5 == '5' : \t", 5 == '5',
    "\n null == undefined : \t", null == undefined,
    "\n null === undefined : \t", null === undefined,
);

*/

/* //=========Логические операторы===============

let discount = 0;
console.log(
    "\n discount || 10 : \t", discount || 10, //ИЛИ
    "\n discount ?? 10 : \t", discount ?? 10  //нулевое присваивание
);

*/

/*//=========Опциональная цепочка===============

const product = {
    name: "Soofa",
    details: null,
};
console.log(product.details.weight); //TypeError
console.log(product.details?.weight); //undefined

*/

/*//=========Приоритет операторов===============

let a = 8 + 4 / 3 * 4;
let b = (8 + 4) / (3 * 4); //из за разных приоритетов операторов порядок вычислений будет другой
console.log(a, b);

*/

/*//=========Практическое применение. Калькулятор заказа===============

const name = "Stul";
const price = 3500;
let value = 5;
let skidka = 0.85;
function Calculator(a, b, c, d) {
    let total = (a * b) * c;
    console.log(`${d} в количестве ${b} штук со скидкой ${((1 - c) * 100).toFixed(0)}% будет стоить: \t ${total.toFixed(2)}`);
    return 0;
};
console.log(Calculator(price, value, skidka, name));

*/

// ||||||||||||||||||||||| 2 практика |||||||||||||||||||||||

/*
const order = {
    product: 'Стул "Венский" ',
    price: 3490,
    quantity: 3,
    discount: 10,
    delivery: 500,
}

function processOrder(obj){

    let summa = obj.price * obj.quantity;
    let skidka = summa - (summa *  (obj.discount * 0.09));
    let summask = summa - skidka;
    let total = summask + obj.delivery;

    console.log(
        `\n Заказ: \t\t\t ${obj.product}`,
        `\n Количество: \t\t ${(obj.quantity).toFixed(0)} шт`,
        `\n Сумма без скидки: \t ${summa.toFixed(2)}₽`,
        `\n Скидка ${obj.discount}%:  \t\t ${skidka.toFixed(2)}₽`,
        `\n Сумма со скидкой: \t ${summask.toFixed(2)}₽`,
        `\n Доставка: \t\t\t ${(obj.delivery).toFixed(2)}₽`,
        `\n Итого к оплате: \t ${total.toFixed(2)}₽`
    );
}

processOrder(order);
*/

// ||||||||||||||||||||||| 3 практика |||||||||||||||||||||||

/* const products = [
    {id: 1, name: "Стул 'Венский'", price: 3490, category: 'chairs', inStock: true},
    {id: 2, name: "Кресло 'Лофт'", price: 8900, category: 'chairs', inStock: true},
    {id: 3, name: "Стол 'Дуб'", price: 24500, category: 'tables', inStock: false},
    {id: 4, name: "Диван 'Скандинавия'", price: 34900, category: 'sofas', inStock: true},
    {id: 5, name: "Шкаф 'Классик'", price: 19900, category: 'wordrobes', inStock: true},
    {id: 6, name: "Журнальный столик 'Стекло'", price: 5900, category: 'tables', inStock: true}
];
console.log(products.slice(0));
console.log(products.every(p => p.inStock));

*/
//Function for practice Arrays
/*
const products = [
        {id: 1, name: "Стул 'Венский'", price: 3490, category: 'chairs', inStock: true},
    {id: 2, name: "Кресло 'Лофт'", price: 8900, category: 'chairs', inStock: true},
    {id: 3, name: "Стол 'Дуб'", price: 24500, category: 'tables', inStock: false},
    {id: 4, name: "Диван 'Скандинавия'", price: 34900, category: 'sofas', inStock: true},
    {id: 5, name: "Шкаф 'Классик'", price: 19900, category: 'wordrobes', inStock: true},
    {id: 6, name: "Журнальный столик 'Стекло'", price: 5900, category: 'tables', inStock: true},
];
function buildCatalogReport(array){
    const totalCount = array.length;
    const totalPrice = array.reduce((acc, p) => acc + p.price, 0);
    const averagePrice = totalPrice / array.length;
    const byCategory = {
        chairs: array.filter(u => u.category == 'chairs').length,
        tables: array.filter(u => u.category =='tables').length,
        sofas: array.filter(u => u.category == 'sofas').length,
        wordrobes: array.filter(u => u.category == 'wordrobes').length,
    };
    const hasOutOfStock = array.some((item) => item.inStock === false);
    const available = array.sort((a, b) => b.price - a.price).filter((item) => item.inStock == true).map(u => u.name);
    const mostExpensive = array.sort((a, b) => a.price - b.price);
    console.log("Всего товаров: \t\t" + totalCount);
    console.log("\n Общая стоимость товаров: \t\t" + totalPrice);
    console.log("\n Средняя цена товаров: \t\t" + averagePrice);
    console.log("\n Количество товаров по категориям: \t\t\n Стулья: \t" + byCategory.chairs + "\n Шкафы: \t" + byCategory.tables + "\n Диваны: \t" + byCategory.sofas + "\n Шкафы-купе: \t" + byCategory.wordrobes);
    console.log("\n Товары в наличии: \t\t" + available);
    console.log("\n Самый дорогой товар: \t\t" + mostExpensive.map(u => u.name).slice(-1) + "\t" + mostExpensive.map(u => u.price).slice(-1));
    console.log("Есть ли хотя бы один товар не в наличии?\t\t" + hasOutOfStock); 
}
buildCatalogReport(products);
*/


const products = [
        {id: 1, name: "Стул 'Венский'", price: 3490, category: 'chairs', discount: 10, inStock: true},
    {id: 2, name: "Кресло 'Лофт'", price: 8900, category: 'chairs', discount: 10, inStock: true},
    {id: 3, name: "Стол 'Дуб'", price: 24500, category: 'tables', discount: 10, inStock: false},
    {id: 4, name: "Диван 'Скандинавия'", price: 34900, category: 'sofas', discount: 10, inStock: true},
    {id: 5, name: "Шкаф 'Классик'", price: 19900, category: 'wordrobes', discount: 10, inStock: true},
    {id: 6, name: "Журнальный столик 'Стекло'", price: 5900, category: 'tables', discount: 10, inStock: true},
];
function renderProductCard(product){
    if(product.inStock == true){
        product.inStock = "В наличии!";
    }
    else {
        product.inStock = "Нет в наличии!";
    }
    document.getElementById('target').insertAdjacentHTML('beforeend', ` <article class="product-card"> <h3>${product.name}</h3> <span class="price">${product.price} ₽</span> <span class="category">${product.category}</span> <span class="discount">${product.discount}%</span> <span class="stock">${product.inStock}</span> </article> `);
}
renderProductCard(products[3]);
   