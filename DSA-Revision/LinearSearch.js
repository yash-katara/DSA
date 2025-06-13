function LinearSearch(arr,target){
    for (let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i; 
        }

    }
    return -1; 
}
const arr = [1,2,3,4,5,6,7,8,9];
const target = 5;
console.log(LinearSearch(arr,target)); 
