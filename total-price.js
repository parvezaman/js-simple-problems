const products =[
    {name: 'laptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 5},
    {name: 'watch', price: 3680, quantity: 2},
    {name: 'phone', price: 55000, quantity: 10}
];

let totalPrice = 0;

/* for (const product of products){
    totalPrice =totalPrice + product.price;
}
console.log(totalPrice); */

for(const product of products){
    // console.log(product);
    let price = product.price * product.quantity;
    totalPrice = totalPrice + price;
}
console.log(totalPrice);