
// Temepelate Code for reading a file and splitting it into lines
// const fs = require('fs');
// const data = fs.readFileSync('lecture4.txt', 'utf8');
// const lines = data.split('\n');


//---------------------- Write your code here------------------------------------ 

// let n = lines[2];

// for(let i=0 ;i<n ;i++){
//     console.log(i);
// }

//1
//2   // work  time = 5 min    status = pending == resolved == rejected 
//3
//4
//5
//6
//7

// let myPromise = new Promise((resolve,reject)=>{
//     let n = Math.random() * 10;
//     if(n>5){
//         resolve(n)
//     }else{
//         reject("number is less than 5 ")
//     }

// })

// let result = myPromise.then((data)=>{
//     console.log("rsult of my promise is",data);
// })

// console.log(result)

// console.log("test")

// setTimeout(()=>{
//    console.log("hello World")
// },5000)

// let time = 0

// setInterval(()=>{
//     time = time +1 
//     console.log("time is",time)
// },1000)


// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve("Promise is resolved ")
//     },5000)
// })

// myPromise.then((data)=>{
//     console.log("result",data)
// })


// rapidapi.com

url = "https://api.publicapis.org/entries"


fetch(url).then((data)=>  data.json() ).then((data)=>{
    console.log("api data",data);
})


// setTimeout(()=>{
//     clearInterval(myTimer) 
//     console.log("Timer Stop ")
// },5000)

// let time = 0


// let myTimer =  setInterval(()=>{
//     time = time +1 
//     console.log("time is",time)
// },1000)