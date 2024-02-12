
// error handling in javascript 

// Destructuring Assignment:

// Debugging Techniques

// try {
//     // code needs to be axecute
//     let examplevariable = "Rohit" ;
//     console.log("Console in Try Block",examplevariable) ;
    

// } catch (error) {
//     // here we handle the error 
//     console.log("Error comes in catch block", error.message)
    
// } finally {
//   console.log("this is finally Block")
// }


// async function fethData (url){
    
//     try {
//        await fetch(url).then((data)=> data.json()).then((data)=>{
//             console.log("fetch Data" ,data)
//         })
        
//     } catch (error) {
//         console.log("error While Fething data",error.message)
//     } finally{
//         console.log("Work is done ") ;
//     }
  
// }

// let url = "https://api.publicapis.org/entries"

// fethData(url) ;



// Destructuring Assignment: 

// let exampleData = [5,8,9,7,5] ;

// let [a,b,c] = exampleData

// console.log("value of a ",a)
// console.log("value of b ",b)
// console.log("value of c ",c)

let exampleObj = {
    "userName":"Rohit",
    "mobState": "8878719466",
    "City" : "Bhopal"
}

// let userName = exampleObj.userName
// let mobState = exampleObj.mobState
// let City = exampleObj.City

let { userName ,mobState,City } = exampleObj  ;

console.log("userName",userName) ;
console.log("mobState",mobState) ;
console.log("City",City) ;

