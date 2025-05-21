function countArray(arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        count++;
    }
    return count;
}
const arr = [1, 2, 3, 4, 5];
const result = countArray(arr); 
console.log('Count of array elements:', result);