// function foo() {
//     console.log('dfklghkh');
//     console.log('___________');
// };
// foo();

// function foo(name) {
//     document.write(`<div>Hello ${name}</div>`);
//   };
// foo('Vitaliy');
// foo('John');
// foo(prompt('enter you name'));

// function plan(dataObj) {
// document.write(`
// <div>
// <h3>lesson ${dataObj.lesson}</h3>
// <h3>teater ${dataObj.teater}</h3>
// <h3>time ${dataObj.time}</h3>
// <h4>_______________</h4>
// </div>
// `)
// };
//
// let data=[
//     {lesson:'JS',teater:'Tiatear1',time:'19:30'},
//     {lesson:'HTML',teater:'Tiatear2',time:'20:30'},
//     {lesson:'JAVA',teater:'Tiatear3',time:'15:30'},
//     {lesson:'Piton',teater:'Tiatear4',time:'12:30'},
//     {lesson:'JS4',teater:'Tiatear5',time:'10:30'}
// ];
// for (const datum of data) {
//     plan(datum);
// }

// let array=[
//     {lesson:'JS',teater:'Tiatear1',time:'19:30'},
//     {lesson:'HTML',teater:'Tiatear2',time:'20:30'},
//     {lesson:'JAVA',teater:'Tiatear3',time:'15:30'},
//     {lesson:'Piton',teater:'Tiatear4',time:'12:30'},
//     {lesson:'JS4',teater:'Tiatear5',time:'10:30'}
// ];
//
// function plan2(obj){
//     for (const datum of array) {
//     document.write(`
// <div>
// <h3>
// lesson- ${datum.lesson},
// teater ${datum.teater},
// time ${datum.time},
// <h4>___________________</h4>
// </h3>
// </div>
// `);
// }
// };
//
// plan2(array);
// let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// function asd(mass){
//     for (const mass1 of mass) {
//         console.log(mass1);
//         document.write(`<ul>`)
//         for (const key in mass1) {
//             console.log(key, mass1[key]);
//             document.write(`
//          <li> ${key}-${mass1[key]}</li>`)
//         }
//         document.write(`</ul>`);
//     }
// };
// let products = [
//         {
//             title: 'milk',
//             price: 22,
//             image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//         },
//         {
//             title: 'juice',
//             price: 24,
//             image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//         },
//         {
//             title: 'tomato',
//             price: 47,
//             image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//         },
//         {
//             title: 'tea',
//             price: 15,
//             image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//         },
//     ];
// asd(users);
// asd(products)

// function calc(a, b) {
//     return a + b;
// };
// let res = calc(5, 6);
// console.log(res);

function dsfa(){
    console.log(arguments);  //psevdo array
};
dsfa(3,4,56,7,7,8);

function foobar(a,b,c,...xxx){  //...xxx rest argument -array
console.log(xxx);
console.log(arguments);
};
foobar(11,33,44,66,77)