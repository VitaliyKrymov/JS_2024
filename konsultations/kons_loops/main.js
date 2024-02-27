let cars = [
    {make: 'Toyota', model: 'Camry', year: 2022, price: 25000},
    {make: 'Honda', model: 'Camry', year: 2000, price: 25000},
    {make: 'Ford', model: 'Mustang', year: 2020, price: 40000},
    {make: 'Chevrolet', model: 'Silverado', year: 2023, price: 15000},
    {make: 'Nissan', model: 'Leaf', year: 2024, price: 20000},
    {make: 'BMW', model: 'X5', year: 2023, price: 45000},
    {make: 'Mercedes-Benz', model: 'C-Class', year: 2012, price: 55000},
    {make: 'Audi', model: 'A4', year: 2005, price: 29000},
    {make: 'Jeep', model: 'Wranfler', year: 2015, price: 27000},
    {make: 'Lexus', model: 'RX', year: 2020, price: 65000},
];

for (const car of cars) {
    document.write(`<div>${car.make}-${car.price}$</div>`)
}
;
for (const car of cars) {
    for (const key in car) {

        document.write(`<div>${key}</div>`)
        console.log(key + ' ' + car[key]);
    };
    console.log('____________________');
};
