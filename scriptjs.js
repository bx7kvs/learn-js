// function func() {
//
// }
//
// let a = function () {
// }
// let b = () => {}; // let b = function () {}
// let d = (a, b, c) => ({a, b, c}) // let
// let b = (a, b, c) => a + b + c;
// let e = a => a + 1;
let c = () => {
};
let n = () => {
    return 2 + 2;
}; // n = () => 2 + 2;
let arr = [1, 2, 3];
arr.map((value, index, array) => value + index);
arr.map(function (value, index, array) {
    return value + index;
});
let obj = {};
obj.name = 'asdas';
function Item(name, priceDollars, description) {
    // this.name = name;
    // this.price = priceDollars;
    // this.description = description;
    this.getName = () => name;
    this.getPrice = () => priceDollars;
    this.getDescription = () => description;
    this.rename = (newName) => {
        name = newName;
    }
}

function Cart() {
    var items = [];
    this.addItem = (item) => items.push(item);
    this.removeItem = (item) => {
        items = items.filter((existing) => existing !== item);
    }
    this.itemsCount = () => items.length;
    this.getTotalPrice = () => items.reduce((acc, item) => item.getPrice() + acc, 0);
}

const myAwesomeShopCart = new Cart();
let ddr4RamStick = new Item('Hynix DDR4', 200, 'Best DDR4 in the world');
let ddr4RamStick2 = new Item('Hynix DDR4', 300, 'Best DDR4 in the world');
console.log(myAwesomeShopCart)
myAwesomeShopCart.addItem(ddr4RamStick);
myAwesomeShopCart.addItem(ddr4RamStick2);
console.log(myAwesomeShopCart.itemsCount());
console.log(myAwesomeShopCart.getTotalPrice());

