function removeduplicates(arr){
    // if(arr.length ===1)
    //     return 1;
    let i=0;
    for (let j=1; j<arr.length; j++){
        if(arr[i]!== arr[j]){
            i++;
            arr[i] = arr[j];
    }
    
}
return arr; // i is the index of the last unique element
}
const arr = [1, 1, 2, 2, 3, 4, 5, 5];
console.log(removeduplicates(arr));



function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0; // Pointer for the position of the next unique element

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++; // Move to the next position for a unique element
      nums[i] = nums[j]; // Place the unique element
    }
  }
  return i + 1;
}

let arr2 = [1, 1, 2, 2, 3, 4, 4, 5];
let newLength = removeDuplicates(arr2);
console.log(arr2.slice(0, newLength)); // Output: [1, 2, 3, 4, 5]