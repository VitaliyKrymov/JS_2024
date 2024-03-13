// const div = document.createElement('div');
//
// div.innerText = 'add Text';
// document.body.appendChild(div);
//
// let h2 = document.createElement('h2');
// h2.innerHTML = `<i>okten</i>`;
// // div.append(h2);
//
// let img = document.createElement('img');
// img.src = 'https://img.freepik.com/premium-photo/young-shaggy-puppy-maltipu-sits-studio-white-background_231474-1522.jpg?w=1800';
//
// div.append(h2,img);


//
//
// const productsBlock = document.getElementsByClassName('products')[0];
//
// let productsList = [
//     {
//         title:'milk',
//         price:22,
//         image:'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title:'juice',
//         price:24,
//         image:'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title:'tomato',
//         price:47,
//         image:'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title:'tea',
//         price:15,
//         image:'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of productsList) {
//     let div = document.createElement('div');
//     div.classList.add('product');
//
//     productsBlock.appendChild(div);
//
//    let h2 = document.createElement('h2');
//     h2.innerText=`Назва-${product.title},ціна-${product.price}грн`;
//     div.appendChild(h2);
//
//     let img = document.createElement('img');
//     img.src = product.image;
//     div.appendChild(img);
// }
//
// console.log(document.getElementsByTagName('img'));
//


let prince = {footfetish:43}
let cinderelas = [
    {
        id:1,
        name:'Olia',
        foot:36
    },
    {
        id:2,
        name:'Oksana',
        foot:38
    },
    {
        id:3,
        name:'Ania',
        foot:43
    },
    {
        id:4,
        name:'Tania',
        foot:40
    }];

// for (const cinderela of cinderelas) {
//     if (cinderela.foot === prince.footfetish) {
//         prince.wife = cinderela;
//         console.log(prince.wife);
//         break
//     }
// }

console.log(prince.wife = cinderelas.filter(value => value.foot === prince.footfetish));
