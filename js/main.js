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

