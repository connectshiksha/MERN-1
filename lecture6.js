

// const fetchWithDelay= async (url,delay)=>{

//     let mypromise = await new Promise (async(resolve,reject)=>{
//        await fetch(url).then((data)=>{
//             return data.json()
//         }).then((data)=>{

//             setTimeout(()=>{
//                    resolve(data)
//            },delay)

//         }).catch((e)=>{
//             reject(e)
//         })
//     })
//  return mypromise
// }


// url = "https://api.publicapis.org/entries"
// let delay = 10000

// fetchWithDelay(url,delay).then((data)=>{
//     console.log("line 19",data);
// }).catch((e)=>{
//     // handle error
//  console.log("error while fething data",e.message);
// })


// let date = new Date() ;

// console.log(date)


const myMap = new Map() ; 

myMap.set("name", "Rohit") ;  // o index   

myMap.set("Mob" , "88126955") ; 

let result =  myMap.get("name")
//console single key 
// console.log("result",result)

//deleting the pain from my map 
// myMap.delete("Mob")

// find out the key 

// let result2 =  myMap.has("Mob") ;

// console.log("result2",result2);

// console.log("My Whole Map",myMap);


let mySet = new Set()

mySet.add(5) ; 
mySet.add(6) ; 
// mySet.add(6) ; 

// checking if value is present 

// let result3 = mySet.has(6)
// console.log("result" ,result3);

mySet.delete(6) 

// console my set 

console.log("my set",mySet)

