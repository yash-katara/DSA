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