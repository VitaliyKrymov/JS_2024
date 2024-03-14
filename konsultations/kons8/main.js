// class Human {
//     constructor(name, age, sizeFoof) {
//         this.id = id;
//         this.name = name;
//     }
// };
//
// class Cinderella extends Human {}
// const CinderellasList = [
//     new Cinderella = (name:'Alina', age
// :
// 22, shoeSize
// :
// 36
// ),
// (
//     name:'Tamara',
//     age
// :
// 17,
//     shoeSize
// :
// 45
// ),
// )
// name:'Anna',
//     age
// :
// 17,
//     shoeSize
// :
// 40
// ),
// (
//     name:'Inna',
//     age
// :
// 17,
//     shoeSize
// :
// 37
// ),
// (
//     name:'Rita',
//     age
// :
// 30,
//     shoeSize
// :
// 39
// ),
// (
//     name:'Olga',
//     age
// :
// 17,
//     shoeSize
// :
// 39
// ),
// (
//     name:'Irina',
//     age
// :
// 18,
//     shoeSize
// :
// 34
// ),
// (
//     name:'Oksana',
//     age
// :
// 25,
//     shoeSize
// :
// 35
// ),
// (
//     name:'Tania',
//     age
// :
// 29,
//     shoeSize
// :
// 40
// ),
// (
//     name:'Sabrina',
//     age
// :
// 57,
//     shoeSize
// :
// 46
// ),
// ]
// ;
//
// class Prince extends Human {
// };
// const prince1 = new Prince('Sergey', 18, 37);
//
// for (const cinderella of CinderellasList) {
//     console.log(cinderella);
//     if (cinderella.shoeSize === prince1.shoe) {
//         prince.wife = cinderella
//         console.log(prince.wife);
//     }
// }
//
// console.log(CinderellasList);
// console.log(prince1);
// console.log('**************');
let cars = [
    {
        make:"toyota",
        model:"Camry",
        year:2022,
        color:"Blue",
        price:25000,
        test:100500
    },
    {
        make:"Honda",
        model:"Civic",
        year:2021,
        color:"Red",
        price:22000
    },
    {
        make:"Ford",
        model:"Mustang",
        year:2023,
        color:"Black",
        price:40000
    },
    {
        make:"Chevrolet",
        model:"Silverado",
        year:2022,
        color:"Gray",
        price:35000
    },
    {
        make:"Nissan",
        model:"Altima",
        year:2021,
        color:"White",
        price:23000
    },
    {
        make:"BMW",
        model:"X5",
        year:2022,
        color:"Silver",
        price:60000
    },
    {
        make:"Mercedes-Benz",
        model:"C-Class",
        year:2023,
        color:"ddd",
        price:50000
    },
    {
        make:"Audi",
        model:"A4",
        year:2022,
        color:"Blue",
        price:45000
    },
    {
        make:"Jeep",
        model:"Wrangler",
        year:2022,
        color:"Green",
        price:35000
    },
    {
        make:"Lexus",
        model:"RX",
        year:2023,
        color:"Champagne",
        price:55000
    },
    {
        make:"BMW",
        model:"X3",
        year:2012,
        color:"Ку",
        price:30000
    },

];

let father = document.getElementsByClassName('father')[0];
console.log(father)
father.innerText = 'FATHER';
// father.style.color='red'
// father.classList.add('new');
// father.classList.remove('new');
father.className = 'new';
// father.classList.toggle('new')


let carsDiv = document.createElement('div');
document.body.appendChild(carsDiv);
carsDiv.classList.add('cars')

for (const car of cars) {
    let item = document.createElement('div')
    let carDivH2 = document.createElement('h2')
    let carDivH4 = document.createElement('h4')
    let carDivP = document.createElement('p');
    item.classList.add('item');

    carDivH2.innerText = `${car.make}--${car.model}`
    carDivH4.innerText = `color ${car.color}`
    carDivP.innerText = `price ${car.price} -- year ${car.year}`

    item.append(carDivH2, carDivH4, carDivP);
    carsDiv.appendChild(item)
}
let clone = carsDiv.cloneNode(true);
document.body.appendChild(clone)