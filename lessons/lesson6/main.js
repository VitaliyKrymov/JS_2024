// let s1 = 'sgdfg';
// let s2 = new String('kld;fhsh');
//
// let str1 = 'okdfjsgkOUIOUIUllsdghok'
// console.log(s1.toUpperCase('mncbvjnbk'));
// console.log(str1[3]);
//string methods   CTR+Q - documentation
// console.log(str1.toUpperCase(), str1);
// console.log(str1.toLowerCase());
// console.log(str1.startsWith('ok', 2));
// console.log(str1.startsWith('ok'));
//
// console.log(str1.substring(1, 11));
// console.log(str1.substring(1, str1.length - 1));
// console.log(str1.indexOf('o'));
// console.log(str1.charAt(0));
//
// let sss = '=+3806754890746=+++';
// console.log(
//     sss
//         .substring(
//             sss.indexOf('=')+1,
//             sss.lastIndexOf('=')
//         )
// );
//
// console.log(sss.replaceAll('+', ''));
//
// let objStr='vasia 31 male';
// function adapter(objStr) {
//         let split = objStr.split(' ');
//         return {
//                 name: split[0],
//                 age:split[1],
//                 gender: split[2]
//         }
// };
// let objStr2='kokoos 36 female';
// console.log(adapter(objStr2));

// let arr=[];
// console.log(Array.isArray(arr),typeof arr);
// arr[arr.length]='asd';
// arr[arr.length]='klghjfdgh';
// console.log(arr);
//
// arr.push('sfg');
// arr.unshift('xxx');
// let pop=arr.pop();
// console.log(pop);
// let shift=arr.shift();

// let numbers=[21,34,56,7564,3,243];
// numbers.splice(3,4);
// console.log(numbers);
// numbers.splice(2,1);//delete
// numbers.splice(1,1,'new');//replace
// console.log(numbers);
//
// let num=[111,22,3333];
//
// let newArr=numbers.concat(num);
// console.log(newArr);
//
// console.log('asadf'.includes('dfsgd'));
//
// console.log(newArr.join('.'));
// console.log(newArr.reverse(num));

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
// function asd(unit){
//         console.log(unit);
//
// }
// users.forEach(asd);
//
// let filter=users.filter((user)=>!user.status && user.age>30);
// console.log(filter);

// let map=users.map((user)=>{
//         let u={
//                 imya: user.name,
//                 vik:user.age
//         }
//         return u
// });

// console.log(map);

// let map= users.map((user)=>({imya:user.name,vik:user.age}));
// console.log(map);
//  let map =users.map((user,index)=>{
//          let u={
//                  name:user.name,
//                  age:user.age,
//                  status:user.status,
//                  id:index
//          }
//          return u
//  })
// console.log(map);
//  console.log(users);

// let map =users.map((user,index)=>{
//         user.id=index+1
//         return user
// })
// console.log(map);
// console.log(users);

// let newUsers=users.sort((firstObj,neibor)=>{
// return neibor.age-firstObj.age
// })
//     console.log(newUsers);

// console.log(users.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())));


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
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let reduce = users.reduce(
    (accumulator, user) => {
        if (user.status) {
            accumulator[0].push(user);
        } else {
            accumulator[1].push(user)
        }
        return accumulator;
    },
    [[], []]
);

let reduceElement = reduce[0];
console.log(reduceElement);
let reduceElement1 = reduce[1];
console.log(reduceElement1);
