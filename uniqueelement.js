function uniqueelement(arr){
   let ans =0;
    for(let i=0;i<arr.length;i++){
        ans ^= arr[i];
    }
    return ans;
}
const arr = [1,2,1,2,3]
console.log(uniqueelement(arr));