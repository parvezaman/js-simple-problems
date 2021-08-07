const phones = [
    {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'Walton m32', price: 15000, camera: 8, storage: 8},
    {name: 'Xaomi m3', price: 12000, camera: 8, storage: 16},
    {name: 'Oppo a2', price: 17000, camera: 8, storage: 32},
    {name: 'Nokia N95', price: 8000, camera: 8, storage: 4},
    {name: 'htc h81', price: 25000, camera: 8, storage: 16}
];

/* let cheapest = phones[0];
for(const phone of phones){
    // compare price only
    if(phone.price<cheapest.price){
        cheapest = phone;
    }
    // console.log(phone);
}
console.log(cheapest); */

// lets find out the total price of all phones
function totalPhonePrice (phones){
    let totalPrice = 0;
    for(const phone of phones){
        let phonePrice =phone.price;
        // console.log(phonePrice);
        totalPrice = phonePrice + totalPrice;
    }
    return totalPrice;
}
console.log(totalPhonePrice(phones));