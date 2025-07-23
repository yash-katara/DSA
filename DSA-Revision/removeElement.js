function removeElement(nums,val){
    let i=0;
    for(let j=1; j<nums.length; j++){
        if(nums[j]!== val){
            nums[i] = nums[j];
            i++;
        }
    }
    return i; // i is the new length of the array after removing elements
}
let arr = [3, 2, 2, 3];
let val = 3;
let newLength = removeElement(arr, val);
console.log(newLength); // Output: 2