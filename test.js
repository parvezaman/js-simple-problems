// numbers = [41,54,3,6,5,4,9,6,4,98,52,3,4,3,4,85,2,3,41,5,2,32,4,56,52,65,41,2,45,52,65,41,32,41,5,96,7,,546,374,,6,6,12,4,54,65,36,21];

// for(const element of numbers){

//     if(element>80){
//         console.log(element, "is grater than 80");
//     }
// }

/* var myPhone = {price: 2, model: 'I dont know', design: 'maashallah'};
myPhone.price = 'two taka only';

console.log(myPhone, typeof(myPhone));
 */


/* 
                        problem solving 
                        date : August 08 (Sunday)
 */


                        /* problem-01 */

/* function feetToInch(feet){
    return feet*12;
}
const userProvidedFeet = 5;
console.log('your answer in inch', feetToInch(userProvidedFeet)); */

                       /* problem-02 */

/* function centimeterToMeter (cm){
    return cm/100;
}
const userProvidedCM = 1000;
console.log("your answer meter is", centimeterToMeter(userProvidedCM)); */


                       /* problem-03 */

/* function paperRequirements(noOfCopyBook1,noOfCopyBook2,noOfCopyBook3){
    const pageOf1stBook =100;
    const pageOf2ndBook = 200;
    const pageOf3rdBook = 300;

    function totalPage(bookName, page){
        return bookName * page;
    }

    const paperFor1stBook = totalPage(noOfCopyBook1, pageOf1stBook);
    const paperFor2ndBook = totalPage(noOfCopyBook2, pageOf2ndBook);
    const paperFor3rdBook = totalPage(noOfCopyBook3, pageOf3rdBook);

    return paperFor1stBook + paperFor2ndBook + paperFor3rdBook;
}

const firstBook = 10;
const secondBook = 3;
const thirdBook = 5;

console.log('total page required', paperRequirements(firstBook, secondBook, thirdBook)); */



                       /* problem-04 */

/* const myFriends =['md. amanullah parvez', 'md. rakib hasan', 'mohibbul mokarrabin alvee', 'muhassinul mokarrabin tanvee', 'zannatul shefa zara', 'shirazis salekin raihan','md. shahidul islam', 'mst. nur mohal aktar daizy'];

function bestFriend (myFriends){
    let largestName = myFriends[0];

    for(let friend of myFriends){
        // console.log(friend);
        if(friend.length > largestName.length){
            largestName = friend;
        }
    }
    return largestName;

}
console.log('friend having largst name is', bestFriend(myFriends)); */



                       /* problem-05 */

/* const numbers = [22,5,65,4,2,52,47,1,4,1,4,-4,55,-6,5,6];
let positiveArray =[];

function positiveReturner (numbers){
    for(const element of numbers){
        if(element<0){
            break;
        }
        else if(element>0){
            positiveArray.push(element);
        }
    }
    return positiveArray;
}

console.log(positiveReturner(numbers)); */