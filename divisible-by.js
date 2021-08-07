// task hoiteche j 1-50 porjonto numbers nite hobe n divisible by 3 hole => foo; divisible by 5 hole => Bar; divisible by both 3 and 5 hole => foobar likhbe

for (let i= 1; i<=50; i++){
    // console.log(i);
    if((i%3 == 0) && (i%5 == 0)){
        console.log("foobar");
    }
    else if(i%5 == 0){
        console.log("bar");
    }
    else if(i%3 == 0){
        console.log("foo");
    }
    else{
        console.log(i);
    }
}
