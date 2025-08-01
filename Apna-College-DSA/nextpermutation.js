function nextpermutation(nums) {
     let i = nums.length - 2;

    // Step 1: Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // Step 2: If such element found, find the next bigger element to swap
    if (i >= 0) {
        let j = nums.length - 1;
        while (j > i && nums[j] <= nums[i]) {
            j--;
        }
        // Step 3: Swap nums[i] and nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 4: Reverse the part from i+1 to end
    reverse(nums, i + 1, nums.length - 1);
};

// Helper function to reverse a part of the array
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
// Example usage:
const nums = [1, 2, 3];
nextpermutation(nums);
console.log(nums); // Output: [1, 3, 2]