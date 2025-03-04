// Reverse a Number

// function ReverseNumber(num){
//     if (num==0 && num==9){
//         return num;

//     }
//     let reverse = 0;
//     while(num>0){
   
//        reverse = reverse*10+(num%10) ;
//        num = Math.floor(num/10);
//     }
//     return reverse;
// }
// console.log(ReverseNumber(54321));


// Count Number 

// function countNumber(num){
//     num = Math.abs(num);
//     let count =0;
//     if (num==0){  return 1;

//     }
//     while (num>0){
// num = Math.floor(num/10)
// count++;
//     }
//     return count;
// } 
// console.log(countNumber(543678));

//binary search

// function binarysearch(arr,target){
//     left =0;
//     right =arr.length-1
//     while(left<=right){
//         const mid = Math.floor(left+right/2)
//         if(target === arr[mid])
            
//             {
//                 return mid;

//             }
//             if(arr[mid]<target)
//                 {
//                 left= mid+1
//             }else{
//             right=mid-1;
//             }
            
//     }
//     return -1;
// }
// const arr = [1,2,3,4,5];
// console.log(binarysearch(arr,1));
// const str = "yashkatara"
// console.log(str.length);

function fetch(id){
const createobj = {
    1:'admin',
    2:'Subscriber',
    3:'moderator',
    
}
return createobj [id]|| 'User'
}
console.log(fetch(1));
console.log(fetch(2));
console.log(fetch(4));



function sum (a,b,c){
    return a+b+c;
}
const num = [1,2,3];
console.log(sum(...num));


const user = {
    'Name':'admin',
    'age':'21',
   ' clas':'gen',
    
};
const keys = ['Name','age'];
console.log(user[keys[0]]);



// a +=4 -> a = a+4;
// ++a and --a -> it will add and substract first then print
// a *=4 -> a = a*4;
// a -=4 -> a = a-4;
// && for both true
// || if one or both true then true otherwise false in both false 
// in while loop we write the only stopping condition and initialization will bw declared before of the while loop and code will be in while loop
// slice method give a peice of array slice(strt index, end index);
// splice method change an original array splice(strtindex, deletecount, new element)

let sum1 =0;
for(let i=1;i<=10;i++){
    sum1 += i;

}
console.log(sum1);

//Whie loop
let j=0
while(j<=10){
    console.log(j);
    j++; 
}

// for-of loop is used for string and object
// for-in loop is used for array and object-keys
let str = "yashkatara"
for(let k of str){
    console.log(k);
    
}


// avrage of students
let stdnt =[85,55,65,76,87,33];
sum =0;
for(let val of stdnt){
sum += val;


}
console.log(sum);

console.log(sum/stdnt.length);


//Arrow function Syntax
// const sum  =(a,b)=>{
   //return  a+b;
// }


//Map method create a new array with performing some operation
let ar = [2,3,4,5];
let newar = ar.map((val)=>{
   return val*val;
    
})
console.log(newar);

// filter gives new array by applying the filter conditon
let ar1 = [2,3,4,5];
let newar1 = ar.filter((val)=>{
   return val%2 ===0;
    
})
console.log(newar1);





// Asynchrounous operation
setTimeout(()=>{
    console.log("hello");
    
},3000);


function getdata(id){
    setTimeout(()=>{
        console.log("id", id);
        
    },1000)
}
getdata(1);
getdata(2);




// Example of Promise Chaining
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched"), 1000);
    });
  };
  
  fetchData()
    .then(result => {
      console.log(result); // Output: Data fetched
      return "Processing data";
    })
    .then(processedData => {
      console.log(processedData); // Output: Processing data
      return "Data processed";
    })
    .then(finalResult => {
      console.log(finalResult); // Output: Data processed
    })
    .catch(error => {
      console.error("Error:", error);
    });



function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weatherdata");
            resolve(200);
        },3000)
    })
}
async function callapi() {
await api()

}
console.log(callapi());



async function fetcheData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetcheData();