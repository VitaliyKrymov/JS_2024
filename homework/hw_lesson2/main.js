// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr=[12,false,'dsfg',NaN,true,undefined,1000,'rfgsdg',0,'geh'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);

//     let arr=[10,'Vasia',NaN,false,25,true,'Time',0,25,'false'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1={
//     title:'Garry Potter',
//     pageCount: 600,
//     genre:'Magic'
// };
// let book2={
//     title:'JS',
//     pageCount: 800,
//     genre:'IT'
// };
//
// let book3={
//     title:'Piton',
//     pageCount: 600,
//     genre:'IT'
// };
//
// console.log(book1,book2,book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let book1={
//     title:'Garry Potter',
//     pageCount: 600,
//     genre:'Magic',
//     authors:[{name:'Joahn Rouling',age:59}]
// };
// let book2={
//     title:'JS',
//     pageCount: 800,
//     genre:'IT',
//     authors:[{name:'Axel Rauschmayer',age:43}]
// };
//
// let book3={
//     title:'Piton for everybody',
//     pageCount: 600,
//     genre:'IT',
//     authors:[{name:'Charls Severans',age:40}]
// };
// console.log(book1,book2,book3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrUsers = [
    {
        name: 'Vasia',
        username: 'vas256',
        password: 'vldjsbaf3242£$%'
    },
    {
        name: 'Vasilina',
        username: 'lis2',
        password: '453242£$%'
    },
    {
        name: 'Valia',
        username: 'val54',
        password: 'vllsgk123K'
    },
    {
        name: 'John',
        username: 'jo435',
        password: 'asljpoet1235vk'
    },
    {
        name: 'Oleg',
        username: 'ol124',
        password: '32ij4019'
    },
    {
        name: 'Sven',
        username: 'sven245',
        password: 'DVGF&45'
    },
    {
        name: 'Evgen',
        username: 'jen423',
        password: 'JKHI437nn'
    },
    {
        name: 'Olena',
        username: 'olia324',
        password: 'PJHB^5vckn'
    },
    {
        name: 'Saaha',
        username: 'sash34',
        password: 'vIJHID233'
    },
    {
        name: 'Yulia',
        username: 'uli21',
        password: 'WD343djb'
    }
]
// console.log(`User- ${arrUsers[0].name} | password- ${arrUsers[0]["password"]}`);
// console.log(arrUsers[1]["password"]);
// console.log(arrUsers[2]["password"]);
// console.log(arrUsers[3].password);
// console.log(arrUsers[4]["password"]);
// console.log(arrUsers[5]["password"]);
// console.log(arrUsers[6]["password"]);
// console.log(arrUsers[7]["password"]);
// console.log(arrUsers[8]["password"]);
// console.log(arrUsers[9]["password"]);
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x=10;
// const no='Невірно'
// if(x!=0){console.log('Вірно')}else{console.log(no)};
// x=1;
// if(x!=0){console.log('Вірно')}else{console.log(no)};
// x=-3
// if(x!=0){console.log('Вірно')}else{console.log(no)};
// x=0
// if(x!=0){console.log('Вірно')}else{console.log(no)};


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 0;
// if (time > 0 && time <= 15) {
//     console.log('1 quter')
// } else {
//     if (time > 15 && time <= 30) {
//         console.log('2 quter')
//     } else {
//         if (time > 30 && time <= 45) {
//             console.log('3 quter')
//         } else {
//             console.log('4 quoter');
//         }
//     }
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 25;
// if (day > 0 && day <= 10) {
//     console.log('1 dec')
// } else {
//     if (day > 10 && day <= 20) {
//         console.log('2 dec')
//     } else {
//         console.log('3 dec')
//     }
// };


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day;
// day = +prompt("Enter day:", "1")
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
// let a;
// let b;
// a = +prompt('Enter first number', '3');
// b = +prompt('Enter second number', '0');
//
// if (a > b) {
//     console.log(a);
// } else if (a < b) {
//     console.log(b)
// } else {
//     console.log('Numbers are equal')
// }
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
// let x='';
// if(!x){x='default'}
// console.log(x);
//
// let asd=0 || 'default';
// console.log(asd);
//
