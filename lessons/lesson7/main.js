// try{
//     console.log(a);
// }catch (e){
//     console.log('error');
//     console.log(e);
//    // console.error(e);
// }
//
// console.log(123/0);
//
// function devider(a,b){
//    if(!b){
//       throw new Error('b cannot be 0')
//    }
//     return a/b;
// }
//
// try {
//     devider(10,0)
// }catch (e){
//     console.log('error');
// }

// let obj={
// name:'vasia',
// wife:{
//     name:'Anna'
// }
// }
// console.log(obj.wife?.name);

// let obj = {
//     name: 'kokos',
//     age: 20,
//     greeting() {
//         console.log('my name is ' + this.name);
//     },
//     wife: {
//         name: 'olia'
//     }
// }
// // let name=obj.name;
// let {name, greeting, age} = obj;
// console.log(name);
// console.log(age);

// function foo(obect){
//     let{name,age}=obect
//     console.log(name,age);
// }
//
// foo(obj);

// function foo({name:imya,age,wife,wife:{name}}){
//     console.log(imya,age,wife,name);
// }
//
// foo(obj);
//
// let numbers=[788,9];
// let [a,,c,]=[12,34,56];
// console.log(a,c);

// let user = {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     wife: {
//         name: 'anna'
//     }
// }
//     let copy={...user};// copy obj not true copy
// console.log(copy);
// copy.id=1;
// console.log(user);
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
//
// console.log(users.map((user,index)=>({id:index+1,...user,age:user.age+1})));

let user = {
    name: 'max',
    age: 31,
    status: true,
foo(){
        console.log('bar');
}
}
let stringify=(JSON.stringify(user));

console.log(stringify);
console.log(JSON.parse(stringify));