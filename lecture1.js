
// console.log("Hello World") ;

// let example = "example " ;

// console.log(typeof(example));

// let example2 = 452 ;

// console.log(typeof(example2));

// let example3 = true
// console.log(typeof(example3));

// let example4 = "78"
// console.log("Before parse",typeof(example4))
// example4 = parseInt(example4)

// console.log("after Parse",typeof(example4));

// let arrayExample = [ 2, "5",true ,8 , "hello" ] ;

// console.log(arrayExample) ;

// consitional statements 
// if , else If ,else 

// let ageOfStudet = -50 ;

// if(ageOfStudet>18){
//     //Block of any  Code 
//     console.log("You are adult");
// }else if(ageOfStudet<=0){
//     console.log("Please provide the valid age ");
// }
// else{
//     //Block of any code 
//     console.log("You are minor");
// }

let arrayOne = [5,8,9,6,3,4,8,9,6,3,14] ;

let arrayLength = arrayOne.length ;
// console.log(arrayOne[1])

// for(let x=0;x<arrayLength;x=x+1){

//     console.log(`element of array at index `,x,arrayOne[x]) ;
// }

while(arrayLength>0){                                                 // arraylength = -1
    console.log(`element of array at index `,arrayOne[arrayLength]) ;  // print
    arrayLength  = arrayLength -1                                    // arratLength = -1
}

