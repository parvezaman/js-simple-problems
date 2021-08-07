// fibonacci sequence: f(n) = f(n-1) + f(n-2)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, .........

// const fibo = [0, 1];

// for (let i = 2; i<=15; i++){
//     // f(n) = f(n-1) + f(n-2)

//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);


// lets make it in a function

/* function fibonacciSeries(num){
    const fibo = [0, 1];
    for (let i = 2; i<=num; i++){
        fibo [i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries); */


// lets filter out all bad inputs (eg: -1, 0, 1, 2, -52, [5654], 'string') etc.

/* function fibonacciSeries(num){
    const fibo = [0, 1];
    if(num != 'number' || num <2){
        return "Please input a number and grater >= 2"
    }
    for (let i = 2; i<num; i++){
        fibo [i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries('5');
console.log(fiboSeries); */



// now lets do it in recursive way and find out the nth element
/* function fibonacciNthElement(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return fibonacciNthElement(n-1) + fibonacciNthElement(n-2);
}
const fiboElement = fibonacciNthElement(6);
console.log(fiboElement); */



// now lets do it in recursive way and find out the all elements/series
function fibonacciSeries(n){
    if(n == 0){
        return [0];
    }
    if(n == 1){
        return [0, 1];
    }
    const fibo = fibonacciSeries(n-1);
    // return fibonacciNthElement(n-1) + fibonacciNthElement(n-2);
    fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo;
}
const fiboSeries = fibonacciSeries(6);
console.log(fiboSeries);
