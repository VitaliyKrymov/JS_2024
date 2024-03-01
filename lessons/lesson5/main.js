// let obj ={
//     imya:"kokos",
//     greeting: function (msg){
//         console.log(msg+'mu name is ' + this.imya);
//     },
// }
//
// obj.greeting('hi');
//
// let obj2={
//     imya:'abricos',
//     greeting: function (msg){
//         console.log(msg+'my name is '+ this.imya);
//     }
// }
// obj2.greeting('Petia');


// function asd(){
//     console.log(this);
// }
// asd();

// function declaration
function asd() {
    console.log(this);
}

asd();

// function expression xosting does not work

// let foobar = function(){
// console.log('asasas');
// };

// let foobar = () => {
//     console.log('asasas');
//     console.log(this);
// };
//
// foobar();
//
// let obj3 = {
//     imya: 'max',
//     greeting: () => {
//         console.log('my name is ' + obj3.imya);
//     },
//     sayHi: function () {
//         let arrFn = () => {
//             console.log('hi mi name is ' + this.imya);
//         }
//         arrFn();
//     }
// }
// obj3.sayHi('hi');


// const foo = ()=>    console.log('krjhtkwh');
// foo();

// const foobar = (a,b) => {
//     console.log('hello');
//     return a + b;
// }
// console.log(foobar(4, 4));

// const bar = a => a.toUpperCase();
//
// console.log(bar('asd'));

const bar = a => a+10;

console.log(bar(100));
