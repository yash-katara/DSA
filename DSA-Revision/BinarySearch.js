function BinarySearch(arr,target){
let left = 0;
let right = arr.length - 1;
while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid; 
    } else if (arr[mid] < target) {
        left = mid + 1; // Search in the right half
    } else {
        right = mid - 1; // Search in the left half
    }
}
return -1; // Target not found
}

console.log(BinarySearch([1,2,3,4,5,6,7,8,9],1)); // Output: 4