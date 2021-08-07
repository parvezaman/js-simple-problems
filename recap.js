// goal is to find out the largest Element of an array
function largestElement (numberArray){
    let largest = numberArray[0];
    for (let i = 0; i<numberArray.length; i++){
        var element = numberArray[i];
        if(element > largest){
            largest = element; //jetar vitore assign korte hobe seta bame thakbe. 
        }
    }
    return largest;
}
const highestNumber =  largestElement( [-5, -8, 3, 6, 4, 7, -96]);
console.log("the largest element of this array is, ", highestNumber);



// now time to get the lowest

function lowestElement(numberArray){
    let lowest = numberArray[0];
    for(let i = 0; i <numberArray.length; i++){
        let element = numberArray[i];
        if (element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const lowestNumber = lowestElement([-5, -8, 3, 6, 4, 7, -96]);
console.log("the smallest element of this array is ", lowestNumber);


// a function that will declare every element as odd or even and will filter them out and will store them in separate array inshallah 
function evenPicker(numberArray){
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i<numberArray.length; i++){
        let element = numberArray[i];
        if(element %2 == 0){
            console.log(element, " lies in the array is an even number");
            evenArray.push(element);
        }
        if(element %2 != 0){
            console.log(element, " lies in the array is an odd number");
            oddArray.push(element);
        }
    }
    console.log("the even number array is",evenArray);
    console.log("the odd number array is ",oddArray);
}

const numbers =[1,6,5,8,4,3,6,9,10,4,2];
const toIdentify = evenPicker(numbers);
console.log(toIdentify);