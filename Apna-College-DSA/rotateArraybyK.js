function rorateArrayByK(arr, k) {
    const n = arr.length;
    
    reverse(arr, 0, n - 1); // Reverse the entire array
    reverse(arr, 0, k - 1); // Reverse the first k elements
    reverse(arr, k, n - 1); // Reverse the remaining elements
}
// Helper function to reverse a part of the array
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

}
// Example usage:

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rorateArrayByK(arr, k);
console.log(arr); // Output: [5, 6, 7, 1, 2, 3, 4]