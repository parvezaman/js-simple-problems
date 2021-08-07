const business =450;
const minister = 350;
const army = 500;

// if(business > minister){
//     console.log("Business is grater than minister");
// }
// else{
//     console.log("minister is greter than business");
// }


if(business>minister && business>army){
    console.log("business is bigger");
}
else if( minister>business && minister>army){
    console.log("minister is bigger");
}
else {
    console.log("army is bigger");
}


var max = Math.max(business, minister, army);
console.log(max);


function largestNumber (first, second){
    if(first>second){
        return first;
    }
    else{
        return second;
    }
}

var largest = largestNumber(564,4752);
console.log("the largest number is ", largest);