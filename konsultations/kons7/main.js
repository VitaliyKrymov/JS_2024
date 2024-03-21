function CoffeeMachine(id, name, power, milk = []) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.water = 0;
    this.admin = 'Jason';
    this.milk = milk;
    this.test = 'TEST';

    this.info = function () {
        // console.log('***********');
        // console.log(`Name:${this.name}, Water: ${this.water},Admin:${this.admin}`);
        // console.log('***********');
        for (const key in this) {
            if (typeof this[key] === 'function') continue;
            console.log(key.toUpperCase() + ': ', this[key]);
        }
        console.log('***********');
    }
    this.addMilk = function (milk) {
        this.milk.push(milk)
    }
    this.start = function () {
        console.log('Good day! Mashin is On');
        this.power = true;
    };
    this.stop = function () {
        console.log('Good night! Machine is OFF');
        this.power = false;
    };
    this.addWater = function (adminName, valueWater) {
        if (adminName === 'Jason') {
            this.water += valueWater;
            console.log('Water added successfully', this.water, 'ml');
        } else {
            console.log('911 !!! - You are not an Admin');
        }

    };
    this.createCoffee = function () {
        if (this.power) {
            if (this.water >= 200) {
                this.water -= 200;
                console.log('Your coffee is ready. ', 'Water left-', this.water);
            } else {
                console.log('Excuse! Water is ended, Admin HELP!');
            }
        } else {
            console.log('Excuse machine is Off');
        }
    }
}


let phillips = new CoffeeMachine(1, 'phillips', false);
console.log(phillips);

// phillips.info();
// phillips.addMilk('kokosMilk');
// phillips.addMilk('pupmpMilk');
// phillips.start();
// phillips.info();
// phillips.addWater('Jason', 1000);
// phillips.addWater('Max', 100000);
// phillips.createCoffee();
// phillips.info();
//
// phillips.createCoffee();
// phillips.info();
//
// phillips.createCoffee();
// phillips.info();
//
// phillips.createCoffee();
// phillips.info();
//
// phillips.createCoffee();
// phillips.info();
//
// phillips.createCoffee();
// phillips.stop();
// phillips.info();

let arr = [];
for (i = 0; i < 10; i++) {
    arr.push(new CoffeeMachine(i + 1, `Name${i}`, 1000 * i + 2))
}

console.log(arr);
// let filter = arr.filter(item => item.id > 4)
//
//     console.log(filter);

let sort=arr.sort((a,b)=>b.id-a.id).filter(item=>item.id>4 || item.id===2);
console.log(sort);