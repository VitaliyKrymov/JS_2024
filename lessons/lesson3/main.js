let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 32, status: false},
    {name: 'max', age: 31, status: true}
];
//
// for (let user of users) {
//     if (user.age > 30) {
//         console.log(user);
//         user.asd='qwe'
//     }
// }

// console.log(users);
//
// for (let i=5; i<users.length-2;i++){
//     const user=users[i]
//     console.log(user);
// }
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//    
// }

// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     console.log(user);
// }
//
// let vasia=users[0];
// for(let key in vasia){                  //key
//     console.log(key,vasia[key]);
// }
// console.log(vasia);

//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 24,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (const product of products) {
//
//     document.write((`<div class="product">
//                               <h2>${product.title}</h2>
//                               <img src="${product.image}" alt="prod">
//                               </div>`))
// }

//
// let matrix = [
//     [1, 3, 4],
//     {name: 'Vasia1'},
//     {name: 'Vasia2'},
//     [12, 45, 654],
//     {name: 'Vasia3'},
//     [112, 333],
//     {name: 'Vasia4'},
// ]
//
// for (const outerItem of matrix) {
//     console.log(outerItem);
//     if (Array.isArray(outerItem)) {
//         for (const item of outerItem) {
//             console.log(item);
//         }
//     } else if (!Array.isArray(outerItem)) {
//         for (const outerItemKey in outerItem) {
//             console.log(outerItemKey, outerItem[outerItemKey]);
//         }
//     }
// }
//

let i=3;
while (i<users.length-1){
    console.log(users[i]);
    i++;
}

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

do{
    console.log('jhsdglkkfh');
} while (false)




