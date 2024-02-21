// Задание 1
let nums = [5, 2, 4];
let squares = [];
nums[99] = 3;
let count = 0;

for (let i = 0; i < nums.length; i++) {
    if (!isNaN(nums[i])) {
        squares[count] = Math.pow(nums[i], 2);
        count++;
    }
}
console.log(squares);


// Задание 2
let list = [
    { product: "Apple", price: 25 },
    { product: "Hum", price: 15 },
    { product: "Cheese", price: 45 },
    { product: "Cherry", price: 80 },
    { product: "Watermelon", price: 55 },
    { product: "Orange", price: 62 },
    { product: "Apple", price: 35 }
]

let sorted_list = list.sort((a, b) => a.price - b.price);
let last_elem = sorted_list.slice(-1);
let res = Object.values(last_elem[0]);
console.log(`"${res[0]}"`);


// Задание 3
let products = ["tomato", "apple", "eggs", "bread", "milk", "orange", "cheese", "cake", "lime", "salad"];
let random = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
let basket = [
]

function add_object(product_from_arr) {

    let in_busket = false;
    for (let i = 0; i < basket.length; i++) {

        if (basket[i].product === product_from_arr) {
            basket[i].cnt++;
            in_busket = true;
            break;
        }
    }

    if (!in_busket) {
        let random_price = Math.floor(Math.random() * (300 - 10 + 1)) + 10;
        basket.push({ product: product_from_arr, price: random_price, cnt: 1 })
    }

}

for (let i = 0; i < random; i++) {
    let random_product = products[Math.floor(Math.random() * products.length)];
    add_object(random_product);
}

let total_sum = basket.reduce(function (accumulator, current_item) {
    return accumulator + current_item.price * current_item.cnt;
}, 0);
console.log(basket);
console.log(total_sum)