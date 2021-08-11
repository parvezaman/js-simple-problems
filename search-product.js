const products = [
    {name: 'Samsung s3 phone', price: 12000},
    {name: 'asus laptop s34', price: 12000},
    {name: 'apple smart watch', price: 120000},
    {name: 'bashundhara binding paper', price: 100},
    {name: 'lg smart phone', price: 1000},
    {name: 'old granny land phone', price: 100},

]

/* function searchProducts(products, searchString){

    const matched = [];
    for(const product of products){
        if(product.name.indexOf(searchString) != -1){
            // console.log(product.name);
            // matched.push(product.name);
            matched.push(product);

        }
    }
    return matched;
}
const matched = searchProducts(products, 'on');
console.log(matched); */



// break and continue and search product
for (const product of products){
    // console.log(product);
    if(product.price < 200){
        // break;
        continue;
    }
    console.log(product);
}