// goal is to sum up all numbers in an array

// var sum = 0;

// const number = [41,525,5,4,6,4,2,54,21,85,5,54];
// for (let i =0; i <number.length; i++){
//     const element =number[i];
//     // console.log(element);
//     // let sum = 0; //eta ekhane rakhle loop er jnne prottekbar sum =0 hoye jabe. tai etake loop er baire rakhte hbe.
//     sum += element;
// }
// console.log(sum);



// lets do it using recursion inshallah
// const number = [41,525,4,6,2,54,21,85,5];
// var sum = 0;
// function arrayElement(n){
//     for (let i =0; i<number.length; i++){
//         let n = (number[i]);
//         console.log(n);
//     }
//     sum += n;
//     return sum;
// }

// for (var i = 0; i<number.length; i++){
//     let n = number[i];
//     // console.log(n);
//     sum += n;
// }
// var result = arrayElement();
// console.log(sum);


// function sumArray(){
//     if (i==number.length){
//         return 0;
//     }
//     else{
//         for (var i = 0; i<number.length; i++){
//             let n = number[i];
//             // console.log(n);
//             sum += n;
//         }
//     }
//     console.log(sum);
// }
// console.log(sumArray());



// recursion diya pari nai tai normal function diya try mari inshallah 

// var number = [41,525,4,6,2,54,21,85,5];
function arrayTotal(numbers){
    let sum = 0;
    for(let i= 0; i<numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
console.log(arrayTotal([41,525,4,6,2,54,21,85,5]));