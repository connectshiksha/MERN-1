// array Methods 
// 1. push() - add element at the end of the array
// 2. pop() - remove element from the end of the array
// 3. shift() - remove element from the start of the array
// 4. unshift() - add element at the start of the array
// 13. map() - map the array
// 15. sort() - sort the array
// 16. reverse() - reverse the array

// let array = [1,2,3,4,5,6,7,8,9,10] ;

// array.push(11) ;
// console.log("Modified array after push ", array) ;
// array.pop() ;

// console.log("Modified array after Pop ", array) ;

// array.shift() ;

// console.log("Modified array after Shift ", array) ;

// array.unshift(0);


// console.log("Modified array after UnShift ", array) ;

// let array = [1,2,3,4,5,6,7,8,9,10] ;
// time complexity in each case  n * n

// let result = array.map((value)=>{      // 1  ,     2 , 3 ,4
//     return value *5                     // 1+1 = 2 ,  2 +1 = 3 , 3+1 =4 ,4+1 = 5
// })
        
// console.log("result after map ",result)  //   result =  [2,3,4,5]

// let sortResult = array.sort((a,b)=>{
//     return b-a
// })
// console.log("sort method result",sortResult);

// let reversedArray = array.reverse() ;
// console.log("reversedArray",reversedArray);

// let exampleObj = {
//     "name" : "Rohit",
//     "mobileNumber" : "8878719466",
//     "email" : "rohit@gmail.com"
// }

// // printing whole object
// // console.log("example object",exampleObj) ;

// // printing properties of object
// let result = exampleObj.email ;

// console.log("result", result) ;


// classes in javascript 

// class exampleClass {

//     constructor(a,b){
//      this.a = a ;
//      this.b = b ; 
//     }

//     addTwonumber(){
//         return this.a + this.b
//     }
//     //number of method 

// }

// let obj1 = new exampleClass(2,3) 

// let result = obj1.addTwonumber()

// console.log("result",result) ;

let inputStr = "JavaScript is fun!" ;

function countVowels (str){
    let counter = 0 ;
    let vowels = ["a", "e", "i", "o", "u"] ;

    for(let i=0 ;i<str.length;i++){
        if(vowels.includes(str[i])){
            counter = counter + 1
        }
    }
    return counter

}
let result = countVowels(inputStr)
console.log("result",result)