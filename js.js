/* 'use strict';
const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Сыт!');
}

console.log((hamburger && fries)); */
//результат логических операций это какоето логическое булевое значение.

//если одно из блюд будет отсутствовать получим фолс
/* const hamburger = true;
const fries = false;

if (hamburger && fries) {
    console.log('Сыт!');
}

console.log((hamburger && fries)); */
//получим false

const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим!');
}


//hamburger === 3 эта часть выполнетс первой, далее выполнеетс сравнение && 
//лева часть правда, права часть неправда
