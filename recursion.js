/* let sum = 0;
for(let i = 1; i<= 6; i++){
    sum += i;
    console.log(i);
}
console.log(sum);



for(let i = 6; i>= 1; i--){
    sum += i;
    console.log(i);
}
console.log(sum); */


/* function sum (i){
    if (i==1){
        return 1;
    }
    return sum(i-1) + i;
}
console.log(sum(6)); */


//factorial recursion

/* function factorial(i){
    if(i==1){
        return 1;
    }
    return i * factorial(i-1);
    // return product;
}
console.log(factorial(3)); */


// fibonacci for loop
const fibo = [0,1];
for (let i = 2; i<= 6; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

// Fibonacci and recursion
// let n = [0,1];
/* function fibonacci(n){
    if (n == 0){
        return [0];
    }
    if (n == 1){
        return [0,1];
    }
    const fibo = fibonacci(n-1);
    fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo;
}

console.log(fibonacci(5)); */


// only to get the nth Element
function fiboNthElement(n){
    if(n==0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return fiboNthElement(n-1) + fiboNthElement(n-2);
}
console.log(fiboNthElement(6));