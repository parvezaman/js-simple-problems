const numbers=[1,2,2,5,6,4,3,3,4,8,9,2,4,5,3,74,5,4,6,23,4,5,74,5,6,5,];

function removeDuplicate(n){
    const unique =[];
    // for(let i =0; i< n.length; i++){
    //     const element = n[i];
    //     console.log(element);
    // }
    for(const element of n){
        console.log(element);
        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);