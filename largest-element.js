function largestElement (numbers){
    let largest = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        const element= numbers[i];
        // console.log(element);
        if (element > largest){
            largest = element;
        }
    }
    return largest;
}

const ages = [14,55,48,12,45,63,45];
const oldest = largestElement(ages);


const oldest2 = largestElement([-2,-6,-17]);
// console.log('oldest', oldest);
console.log('oldest', oldest2);