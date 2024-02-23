// let dog={
//     id:1,
//     name:'Kokos',
//     breed:'spaniel',
//     age:3
// }
// console.log(dog);
// console.log(dog.name);
// let dogMas1=[
//     {   id:1,name:'Kokos',breed:'spaniel',age:3},
//     {  id:2,name:'ananas',breed:'staff',age:4},
//     {  id:3,name:'Kit',breed:'pes',age:35},
// ];
// // console.log(dogMas1);
// // console.log(dogMas1[0]);
// // console.log(dogMas1[0].name);
// // console.log(dogMas1[0].breed);
// // console.log(dogMas1[0].id);
// // console.log(dogMas1[0].age);
// // let dog1=dogMas[1];
// // console.log(dog1);
//
// let dogMas2=[
//     {   id:1,name:'banan',breed:'mops',age:13},
//     {  id:2,name:'avokado',breed:'staff',age:5},
//     {  id:3,name:'Kit',breed:'dog',age:7},
// ];
//
// let multiArray=[
//     dogMas1,
//     dogMas2
// ];
//
// console.log(multiArray.length);
// console.log(multiArray);
// console.log(multiArray[0][0]);
// console.log(multiArray[0][1]);
// console.log(multiArray[0][2]);
//
// console.log(multiArray[1][0].breed);
//
//
// let cats=[
//     {   id:11,name:'cat1',breed:'gem1',age:13},
//     {  id:12,name:'cat2',breed:'gem2',age:5},
//     {  id:13,name:'cat3',breed:'dog',age:7},
// ];
//
// let pets=[
//     dogMas1,
//     dogMas2,
//     cats
// ];
// console.log(pets);
//
// let dev=[
//     {name:'vasia',skills:['html','js','java']},
//     {name:'petia',skills:['html','js','node']},
//     {name:'anna',skills:['html','js']},
// ];
//
// console.log(dev);
// console.log(dev[0]);
// console.log(dev[0].skills);
// console.log(dev[0].skills[2]);
//
// dev['name']='olia';
// console.log(dev);

// let p=0;
// let p2=p;
// console.log(p,p2);
// p=p2+100;
// console.log(p,p2);
//
// console.log(typeof []);
//
// let obj1={id:1};
// let obj2=obj1;
// obj2.name='sgdfgdf';
// console.log(obj1);

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || false);
console.log(true || true);

console.log(true && true || false);
console.log(true && false || false);

// let age=16;
// if(age<18){
//     document.write('<h2>hello young user</h2>')
// }else {
//     document.write('<h2>hello adult user</h2>')
// };

// let age=164;
// if(age>0 && age<=18){
//     document.write('<h2>hello young user</h2>')
// }else if (age>18 && age<=35){
//     document.write('<h2>hello old user</h2>')
// }else{
//     document.write('<h2>hello ????</h2>')
// }

let user = {name: 'vasia', age: 25};

switch (user.age) {
    case 10:
        console.log('boy');
    case 18:
        console.log('young man');
        break;
    case 25:
        console.log('adult man');
        console.log('Hello');
        break;
    default:
        console.log('kghsdklfhg');
}

