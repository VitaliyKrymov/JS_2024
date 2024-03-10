// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);

let v1 = 1;
console.log(v1);
let ua = 'ua';
console.log(ua);
let v4 = 123;
console.log(v4);
let v2 = 10;
console.log(v2);
let v3 = -999;
console.log(v3);
let v5 = 3.14;
console.log(v5);
let v6 = 2.7;
console.log(v6);
let v7 = 16;
console.log(v7);

const status1 = false;
console.log(status1);

const status2 = true;
console.log(status2);


//     - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
const firstName = 'Viy';
const middleName = 'Mix';
const lastName = 'Krym';
let fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstNameFromPromt = prompt('Enter your name','kokos');
let middleNameFromPromt = prompt('Enter your middle name', 'kokosovich');
let lastNameFromPromt = prompt('Enter your last name', 'kokoseev');

console.log(firstNameFromPromt+' '+middleNameFromPromt+' '+lastNameFromPromt);
