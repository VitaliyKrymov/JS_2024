
console.log("s;ghdfdh");
document.write("jfsdklgj");
products2 = [
    {
        title: 'milk by koza',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice by tomat',
        price: 24,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato by juice',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea of eternal life',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products2) {
    document.write(`
            <div>
                <h2> ${product.title}</h2>
                <p>price - ${product.price}</p>
                <img src="${product.image}" alt="${product.title}" width="400px">
            </div>
        `);
}
