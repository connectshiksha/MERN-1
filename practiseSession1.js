
// // Problem2 = You are given an array of integers, where each element represents the maximum number of steps you can take forward from that position. Write a function to determine if you can reach the last index starting from the first index.

// //  [1, 1, 3, 2, 1, 1] = true
// //  [1, 1, 0, 2, 1, 1] = false
// //  [1, 1, 1, 3, 1, 1] = false



// function stepCheckofArray(nums) {

//     let arrayLength = nums.length -1 ;  // 5 


//     for (let i = 0; i < nums.length-1; i++) {  // element = 1

//         if (nums[i] > arrayLength) {    // 1 > 1  == false
//             return false;
//         }else if (nums[i] == 0 ){      // 1 ===0  == false
//             return false;
//         }
//         arrayLength--;                   // arrayLength = 1-1 = 0
//     }
//  return true;
// }

// // Example usage:
// const nums = [1, 1, 3, 4, 1, 1];

// console.log(stepCheckofArray(nums));

let url = "https://api.publicapis.org/entries" ;

const AUTHHEADER = new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
const CONFIG = {
    method: 'GET',
    headers: AUTHHEADER,
    mode: 'cors',
}

fetch(url,CONFIG).then((data)=>  data.json() ).then((data)=>{
    console.log("api data",data);
}).catch((error)=>{
    console.log("error",error.message);
})

